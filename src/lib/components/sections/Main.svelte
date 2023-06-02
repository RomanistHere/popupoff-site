<script>
	import Nav from "$lib/components/Nav.svelte";
	// drop-shadow-[0_1px_2px_rgb(255,0,0)]
</script>

<section class="relative min-h-screen flex justify-center items-center">
	<Nav />

	<div class="font-logo">
		<h1 class="text-[10rem] drop-shadow">
			PopUp<span class="text-accent">OFF</span>
		</h1>
		<h2 class="text-[3.2rem] -mt-8 drop-shadow">
			<span class="text-accent">Popup and overlay</span>
			blocker
		</h2>
	</div>

	<ul class="absolute text-3xl left-8 bottom-8 font-logo">
		<li>
			<span class="text-accent">4.7/5</span> in <span class="text-accent">180+</span> ratings
		</li>
	</ul>
</section>
