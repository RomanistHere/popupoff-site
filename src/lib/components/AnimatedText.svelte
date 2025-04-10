<script>
	import { onMount } from "svelte";

	export let text;
	export let shouldAnimate;
	export let animationDuration;
	export let textColorClassName = "text-accent";

	$: counter = 0;
	$: adjustValue(text);
	let isAnimating = false;

	const randomX = Math.round(Math.random() * 600) - 300;
	const randomY = Math.round(Math.random() * 400) - 200;

	const animateValue = (start, end, duration) => {
		if (typeof window === "undefined") return;

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

	const adjustValue = newVal => {
		if (isAnimating || newVal === counter || !shouldAnimate) return;

		animateValue(counter, newVal, 500);
	};

	onMount(() => {
		if (!shouldAnimate) return;

		animateValue(0, text, animationDuration);
		isAnimating = true;
		setTimeout(() => {
			isAnimating = false;
		}, animationDuration);
	});
</script>

<span
	class="relative {textColorClassName} font-bold text-4xl oldstyle-nums slashed-zero tabular-nums"
>
	{#if shouldAnimate}
		<span class="opacity-0">
			{Math.round(text)}
		</span>
		<span
			class="absolute bottom-0 left-0 text-center transition-transform duration-1000 z-10"
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
