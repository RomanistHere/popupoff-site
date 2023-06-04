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
	class="min-h-screen py-16 flex justify-center items-center text-dark overflow-hidden"
	class:bg-bright={!isJsEnabled}
>
	<div class="flex flex-wrap max-w-7xl px-8 w-full">
		<div class="w-1/2 pr-24 relative -xl:w-3/5 -lg:w-full -md:pr-0">
			<h2 class="text-title">Aggressive mode</h2>
			<p class="text-basic">Discover web without distractions*</p>
			<p class="text-basic">
				Removes all sticky elements from screen:
				<span class="bg-accent">no cookies, no popups, no useless bars</span>
				at the top or bottom of the page
			</p>
			<p class="text-basic">* - causes addiction (it's a joke... or is it?)</p>
		</div>
		<div class="w-1/2 relative -xl:w-2/5 -lg:w-full -lg:flex -lg:justify-between -md:flex -md:flex-wrap">
			<ImageShowcase
				class="-top-52 -left-12 -2xl:-top-40 -xl:-left-20 -lg:static -lg:w-1/2 -lg:mr-2 -md:w-full -md:mr-0 -md:my-4"
				text="Before"
				src="images/wo1.png"
				alt="example of website with popups"
			/>
			<ImageShowcase
				class="-bottom-52 -right-12 -2xl:-bottom-40 -xl:right-0 -lg:static -lg:w-1/2 -lg:ml-2 -md:w-full -md:ml-0 -md:my-4"
				text="After"
				src="images/wi1.png"
				alt="example of website without popups"
				textTop={false}
			/>
		</div>
	</div>
</section>
