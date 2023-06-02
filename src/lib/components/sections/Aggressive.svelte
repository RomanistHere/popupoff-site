<script>
	import { onMount } from "svelte";

	import ImageShowcase from "$lib/components/ImageShowcase.svelte";

	// for users with disabled js
	let isJsEnabled = false;
	onMount(() => {
		isJsEnabled = true;
	});
</script>

<p id="aggressive" />

<section
	class="min-h-screen flex justify-center items-center text-dark overflow-hidden"
	class:bg-bright={!isJsEnabled}
>
	<div class="flex max-w-7xl px-8 w-full">
		<div class="w-1/2 pr-24 relative">
			<h2 class="text-title">Aggressive mode</h2>
			<p class="text-basic">Discover web without distractions*</p>
			<p class="text-basic">
				Removes all sticky elements from screen:
				<span class="bg-accent">no cookies, no popups, no useless bars</span>
				at the top or bottom of the page
			</p>
			<p class="text-basic">* - causes addiction (it's a joke... or is it?)</p>
		</div>
		<div class="w-1/2 relative">
			<ImageShowcase
				class="-top-60 -left-12"
				text="Before"
				src="images/wo1.png"
				alt="example of website with popups"
			/>
			<ImageShowcase
				class="-bottom-60 -right-12"
				text="After"
				src="images/wi1.png"
				alt="example of website without popups"
				textTop={false}
			/>
		</div>
	</div>
</section>
