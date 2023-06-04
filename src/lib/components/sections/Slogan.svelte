<script>
	import { onMount } from "svelte";

	import DownloadBlock from "$lib/components/DownloadBlock.svelte";

	import { isBgDark } from "$lib/stores/index.js";

	let elementRefScroll = null;

	const observeTillElementMet = ({ startIntersecting, stopIntersecting, element }) => {
		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(
			entries => {
				const first = entries[0];
				if (first.isIntersecting) {
					startIntersecting();
				} else {
					const viewportOffset = first.target.getBoundingClientRect();
					const isAbove =
						viewportOffset.top + viewportOffset.height < window.innerHeight / 2;
					stopIntersecting(isAbove);
				}
			},
			{
				rootMargin: "-200px 0px -400px",
			}
		);

		observer.observe(element);
	};

	const updateBgColor = () => {
		isBgDark.set(false);
		elementRefScroll.classList.add("text-title");
	};

	const checkBgColorUpdate = isAbove => {
		if (isAbove && $isBgDark) {
			isBgDark.set(false);
			elementRefScroll.classList.add("text-title");
		} else if (!isAbove && !$isBgDark) {
			isBgDark.set(true);
			elementRefScroll.classList.remove("text-title");
		}
	};

	onMount(() => {
		observeTillElementMet({
			startIntersecting: updateBgColor,
			stopIntersecting: checkBgColorUpdate,
			element: elementRefScroll,
		});
	});
</script>

<section class="min-h-screen flex justify-center items-center">
	<div class="relative">
		<h1
			class="text-6xl font-logo mb-12 transition-colors duration-500 -md:text-3xl"
			bind:this={elementRefScroll}
		>
			Better internet begins here
		</h1>
		<div class="absolute inset-x-0 -bottom-40 flex flex-wrap justify-center items-end">
			<p class="w-full pb-1 pr-2 text-center text-basic mb-0">Download</p>
			<DownloadBlock />
		</div>
	</div>
</section>
