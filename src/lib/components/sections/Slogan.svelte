<script>
	import { onMount } from "svelte";

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
					const isAbove = viewportOffset.top + viewportOffset.height < window.innerHeight / 2;
					stopIntersecting(isAbove);
				}
			},
			{
				rootMargin: "-400px",
			}
		);

		observer.observe(element);
	};

	const updateBgColor = () => {
		isBgDark.set(false);
	};

	const checkBgColorUpdate = isAbove => {
		if (isAbove && $isBgDark) {
			isBgDark.set(false);
		} else if (!isAbove && !$isBgDark) {
			isBgDark.set(true);
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

<section class="min-h-screen font-logo flex justify-center items-center">
	<h1
		class="text-6xl drop-shadow"
		bind:this={elementRefScroll}
	>
		Better internet begins here
	</h1>
</section>
