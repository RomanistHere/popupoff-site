<script>
	import ImageShowcase from "$lib/components/ImageShowcase.svelte";
</script>

<p id="antipaid" />

<section
	class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark overflow-hidden"
>
	<div class="flex max-w-7xl px-8 w-full flex-wrap">
		<div class="w-1/2 pr-24 relative -xl:w-3/5 -md:w-full -md:pr-0">
			<h2 class="text-title">There's "Anti-paid"</h2>
			<p class="text-basic">
				Experimental feature. <span class="bg-accent">Unhides content</span>
			</p>
			<p class="text-basic">Works only if the content is seen while the page loads</p>
		</div>
		<div class="w-1/2 relative -xl:w-2/5 -md:w-full -md:flex -md:flex-wrap">
			<ImageShowcase
				class="-top-60 -left-12 -xl:-top-40 -xl:-left-20 -md:w-full -md:my-4 -md:static"
				text="Before"
				src="images/wi3.png"
				alt="example of website with popups"
			/>
			<ImageShowcase
				class="-bottom-60 -right-12 -xl:-bottom-40 -xl:right-0 -md:w-full -md:my-4 -md:static"
				text="After"
				src="images/wo3.png"
				alt="example of website without popups"
				textTop={false}
			/>
		</div>
	</div>
</section>
