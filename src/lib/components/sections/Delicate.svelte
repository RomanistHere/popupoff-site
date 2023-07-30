<script>
	import ImageShowcase from "$lib/components/ImageShowcase.svelte";
</script>

<p id="delicate" />

<section
	class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark overflow-hidden"
>
	<div class="flex flex-wrap max-w-7xl px-8 w-full">
		<div class="w-1/2 pr-24 relative -xl:w-3/5 -lg:w-full -md:pr-0">
			<h2 class="text-title">Delicate mode</h2>
			<p class="text-basic">Move popups instead of deleting them</p>
			<p class="text-basic">
				<span class="bg-accent">Keep overlays at the top/bottom of the page</span>
				in case you ever need it
			</p>
			<p class="text-basic">
				The mode is experimental, may brake websites. Available starting v2.1.0
			</p>
		</div>
		<div
			class="w-1/2 relative -xl:w-2/5 -lg:w-full -lg:flex -lg:justify-between -md:flex -md:flex-wrap"
		>
			<ImageShowcase
				class="-top-52 -left-12 -2xl:-top-40 -xl:-left-20 -lg:static -lg:w-1/2 -lg:mr-2 -md:w-full -md:mr-0 -md:my-4"
				text="Before"
				src="images/wi4.png"
				alt="example of website with popups"
			/>
			<ImageShowcase
				class="-bottom-52 -right-12 -2xl:-bottom-40 -xl:right-0 -lg:static -lg:w-1/2 -lg:ml-2 -md:w-full -md:ml-0 -md:my-4"
				text="After"
				src="images/wo4.png"
				alt="example of website without popups"
				textTop={false}
			/>
		</div>
	</div>
</section>
