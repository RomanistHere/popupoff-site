<script>
	import { onMount } from "svelte";

	import "vidstack/styles/base.css";
	import { defineCustomElements } from "vidstack/elements";

	import Spinner from "$lib/components/Spinner.svelte";

	import Play from "$lib/components/icons/Play.svelte";
	import VolumeOff from "$lib/components/icons/VolumeOff.svelte";
	import VolumeOn from "$lib/components/icons/VolumeOn.svelte";

	export let src;

	let containerRef = null;
	let player = null;
	let volumeHiddenTimer = null;
	let isPlayerCanPlay = false;
	let isReloading = false;
	let reloadingCounter = 0;

	$: isPlayerPaused = true;
	$: isPlayerMuted = true;
	$: isVolumeHidden = !isPlayerMuted;

	const updateVolumeLevel = ({ isVideosMuted }, playerRef) => {
		if (!playerRef) return true;

		if (isVideosMuted) {
			playerRef.volume = 0;
			isVolumeHidden = false;
		} else {
			playerRef.volume = 1;
			volumeHiddenTimer = setTimeout(() => {
				isVolumeHidden = true;
			}, 3000);
		}

		return isVideosMuted;
	};

	const videoClick = () => {
		if (player.paused) {
			player.play();
			isPlayerPaused = false;
		} else {
			player.pause();
			isPlayerPaused = true;
		}
	};

	const volumeIconClick = () => {
		clearTimeout(volumeHiddenTimer);
		player.muted = false;

		if (isPlayerMuted) {
			player.volume = 1;
			isPlayerMuted = false;
			volumeHiddenTimer = setTimeout(() => {
				isVolumeHidden = true;
			}, 3000);
		} else {
			player.volume = 0;
			isPlayerMuted = true;
			isVolumeHidden = false;
		}

		isPlayerMuted = !isPlayerMuted;
	};

	const observeElement = ({ element }) => {
		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(
			entries => {
				if (!isPlayerCanPlay) return;

				try {
					const first = entries[0];

					if (first.isIntersecting) {
						const promise = player.play();
						isPlayerPaused = false;
						if (promise !== undefined) {
							promise
								.then(() => {
									// Autoplay started
								})
								.catch(error => {
									console.log(error);
									// Autoplay was prevented.
									isPlayerMuted = true;
								});
						}
					} else if (player?.paused === false) {
						player.pause();
						isPlayerPaused = true;
					}
				} catch (e) {
					console.log(e);
				}
			},
			{ rootMargin: "200px 0px" }
		);

		observer.observe(element);
	};

	const init = async () => {
		await defineCustomElements();
		observeElement({ element: containerRef });

		player.addEventListener("can-play", () => {
			isPlayerCanPlay = true;
		});

		player.addEventListener("error", e => {
			console.warn(e.detail.message);

			if (reloadingCounter > 5) return;

			isReloading = true;
			setTimeout(() => {
				isReloading = false;
				init();
			}, 100);
		});

		reloadingCounter = reloadingCounter + 1;
	};

	onMount(init);
</script>

<div class="relative -mb-2 w-full max-w-4xl">
	{#if !isReloading}
		<div bind:this={containerRef}>
			<div class="absolute inset-0 bg-gray-100 flex justify-center items-center">
				<Spinner />
			</div>

			<media-player
				aspect-ratio="16/9"
				load="idle"
				loop
				playsinline={true}
				muted={isPlayerMuted ? true : null}
				bind:this={player}
				{src}
			>
				<media-outlet />
			</media-player>

			{#if isPlayerCanPlay}
				<button
					class="absolute inset-0 z-5 flex justify-center items-center drop-shadow"
					on:click|preventDefault={videoClick}
				>
					{#if isPlayerPaused}
						<Play
							class="h-20 w-20 opacity-80"
							color="#fff"
						/>
					{/if}
				</button>

				<button
					class="absolute bottom-0 right-0 w-16 h-16 z-5 flex justify-center items-center"
					on:click|preventDefault={volumeIconClick}
				>
					{#if isPlayerMuted}
						<VolumeOff
							class="h-8 w-8 opacity-60"
							color="#fff"
						/>
					{:else}
						<VolumeOn
							class="h-8 w-8 {isVolumeHidden
								? "opacity-0"
								: "opacity-60"} transition-opacity"
							color="#fff"
						/>
					{/if}
				</button>
			{/if}
		</div>
	{/if}
</div>
