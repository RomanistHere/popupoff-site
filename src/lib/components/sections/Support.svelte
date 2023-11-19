<script>
	import DonationForm from "$lib/components/DonationForm.svelte";
</script>

<p id="donate" />

<section class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title">Support the project</h1>

		<div class="text-basic mx-auto leading-9">
			<strong class="block mb-8">Why should you consider supporting PopUpOFF:</strong>

			<ul class="list-disc list-inside">
				<li class="mb-4">
					<span class="bg-accent">Fair exchange for the time and stress</span>
					the extension has saved you
				</li>
				<li class="mb-4">To thank a single guy behind this project</li>
				<li class="mb-4">To encourage people to make more useful free apps</li>
				<li class="mb-4">
					$2 from you once per month = us having dedicated testers =
					<span class="bg-accent"> no bugs on your favorite websites </span>
				</li>
			</ul>
		</div>

		<DonationForm />
	</div>
</section>
