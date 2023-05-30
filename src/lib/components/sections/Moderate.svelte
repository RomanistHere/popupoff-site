<script>
	import ImageShowcase from "$lib/components/ImageShowcase.svelte";
</script>

<section class="h-screen bg-bright flex justify-center items-center text-dark">
	<div class="flex max-w-7xl px-8 w-full">
		<div class="w-1/2 relative">
			<ImageShowcase
				class="-top-60"
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
		<div class="w-1/2 pl-24 relative">
			<h2 class="text-title">
				Moderate mode
			</h2>
			<p class="text-basic">
				Enjoy the web without
				paywalls and overlays
				while keeping main
				elements on
			</p>
			<p class="text-basic">
				Tip! <span class="bg-accent">Good default option</span> if you surf around the web a lot
			</p>
		</div>
	</div>
</section>