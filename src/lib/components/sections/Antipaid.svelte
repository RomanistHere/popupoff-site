<script>
	import ImageShowcase from "$lib/components/ImageShowcase.svelte";
</script>

<p id="antipaid"></p>

<section
	class="min-h-screen bg-bright flex justify-center items-center text-dark overflow-hidden"
>
	<div class="flex max-w-7xl px-8 w-full">
		<div class="w-1/2 pr-24 relative">
			<h2 class="text-title">There's "Anti-paid"</h2>
			<p class="text-basic">
				Experimental feature. <span class="bg-accent">Unhides content</span>
			</p>
			<p class="text-basic">Works only if the content is seen while the page loads</p>
		</div>
		<div class="w-1/2 relative">
			<ImageShowcase
				class="-top-60 -left-16"
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
