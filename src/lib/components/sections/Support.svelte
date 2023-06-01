<script>
	import DonationForm from "$lib/components/DonationForm.svelte";
</script>

<section class="h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title">
			Support the project
		</h1>

		<div class="text-basic  mx-auto leading-10">
			<strong class="block mb-8">
				Why should you consider supporting PopUpOFF:
			</strong>

			<ul class="list-disc list-inside">
				<li class="mb-4">
					Fair <span class="bg-accent">exchange for the time and stress</span> the extension has saved you
				</li>
				<li class="mb-4">
					To thank a single guy behind this project
				</li>
				<li class="mb-4">
					To encourage people to make <span class="bg-accent">more useful free apps</span>
				</li>
				<li class="mb-4">
					Only 5$ monthly will boost speed of fixing bugs on your
					favorite websites due to dedicated testers we’ll be able to afford
					on a monthly basis. <span class="bg-accent">Only 5 bucks from you is enough
					to turn this amazing extension into a completely flawless app</span>.
				</li>
			</ul>
		</div>

		<DonationForm />
	</div>
</section>

