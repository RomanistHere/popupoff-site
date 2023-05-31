<script>
	import { isScrollingStore } from "$lib/stores/index.js";

	let customClass = "";
	export { customClass as class };
	export let text;
	export let src;
	export let alt;
	export let textTop = true;

	let isHovered = false;

	const handleMouseEnter = () => {
		isHovered = true;
	};

	const handleMouseLeave = () => {
		isHovered = false;
	};
</script>

<div
	class="fixed inset-0 bg-black opacity-0 pointer-events-none z-10 transition-opacity duration-1000"
	class:opacity-50={isHovered && !$isScrollingStore}
></div>

<div
	class="absolute w-full {customClass}"
>
	{#if textTop}
		<p class="font-logo text-2xl text-dark p-2">
			{text}
		</p>
	{/if}

	<img
		{src}
		{alt}
		class="relative w-full shadow-xl transition-transform duration-1000"
		class:z-10={isHovered && !$isScrollingStore}
		class:scale-125={isHovered && !$isScrollingStore}
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
	>

	{#if !textTop}
		<p class="font-logo text-2xl text-dark p-2 text-right">
			{text}
		</p>
	{/if}
</div>