<script>
	import { onMount } from "svelte";

	import Spinner from "$lib/components/Spinner.svelte";

	let isYouTube = false;
	let scrolledEnough = false;
	let ref = null;

	const observeTillElementMet = ({ action, element }) => {
		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			const first = entries[0];
			if (first.isIntersecting) {
				action();

				observer.disconnect();
			}
		});

		observer.observe(element);
	};

	onMount(() => {
		observeTillElementMet({
			action: () => {
				scrolledEnough = true;
			},
			element: ref,
		});
	});
</script>

<p id="video" />

<section
	bind:this={ref}
	class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark"
>
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title">See in action</h1>

		<div
			class="relative mx-auto my-8 py-1 px-1 bg-accent rounded-3xl inline-flex justify-center items-center"
		>
			<button
				class="py-2 px-6 rounded-3xl"
				class:bg-dark={!isYouTube}
				class:text-bright={!isYouTube}
				on:click={() => {
					isYouTube = false;
				}}
			>
				Video
			</button>
			<button
				class="py-2 px-6 rounded-3xl"
				class:bg-dark={isYouTube}
				class:text-bright={isYouTube}
				on:click={() => {
					isYouTube = true;
				}}
			>
				YouTube
			</button>
			<span class="absolute text-xs italic -top-10 -right-16 rotate-12">
				YouTube version is separated<br />
				because of
				<a
					href="https://deletegoogle.com/"
					class="underline"
					target="_blank">privacy concerns</a
				>
			</span>
		</div>

		<div class="flex justify-center">
			{#if isYouTube}
				<iframe
					width="860"
					height="490"
					src="https://www.youtube-nocookie.com/embed/3jTKRCxLyPE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			{:else if scrolledEnough}
				<iframe
					width="860"
					height="490"
					src="https://customer-vlbvou0ablsk8yf5.cloudflarestream.com/a767b42bc5d14395ae45d8c23fac6576/iframe?muted=true&autoplay=true&startTime=6s"
					title="Cloudflare video player"
					frameborder="0"
					allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
					allowfullscreen
				/>
			{:else}
				<div class="max-w-2xl text-xl mt-12">
					<p class="animation-1 transition-opacity">
						Sorry to inform that our JavaScript code to show the video didn't work.
						Currently we can't afford to show you the video without JS.
						If you're still interested, see the video on <a href="https://www.youtube.com/watch?v=3jTKRCxLyPE" class="underline">YouTube</a>, enable JS or reload page.
					</p>

					<div class="relative block w-48 h-48 mx-auto">
						<Spinner />
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	@keyframes from-opacity {
		0%,
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.animation-1 {
		animation: from-opacity 2.5s ease-in;
	}
</style>
