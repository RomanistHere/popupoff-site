<script>
	import { onMount } from "svelte";

	export let text;
	export let shouldAnimate;
	export let animationDuration;

	$: counter = 0;
	let isAnimating = false;

	const randomX = Math.round(Math.random() * 600) - 300;
	const randomY = Math.round(Math.random() * 400) - 200;

	const animateValue3 = (start, end, duration) => {
		let startTimestamp = null;
		const step = timestamp => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			counter = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};

	onMount(() => {
		if (!shouldAnimate) return;

		animateValue3(0, text, animationDuration);
		isAnimating = true;
		setTimeout(() => {
			isAnimating = false;
		}, animationDuration);
	});
</script>

<span class="relative text-accent font-bold text-5xl">
	{#if shouldAnimate}
		<span class="opacity-0">
			{Math.round(text)}
		</span>
		<span
			class="absolute bottom-1 left-1 text-center transition-transform duration-1000 z-10"
			style="transform: translate({isAnimating ? randomX : 0}px, {isAnimating
				? randomY
				: 0}px) scale({isAnimating ? 3 : 1})"
		>
			{counter}
		</span>
	{:else}
		{text}
	{/if}
</span>
