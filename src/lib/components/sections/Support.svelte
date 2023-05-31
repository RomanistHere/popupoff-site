<script>
	import DonationForm from "$lib/components/DonationForm.svelte";
</script>

<section class="h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title">
			Support the project
		</h1>

		<div class="flex">
			<div class="w-4/6 text-basic text-left leading-10">
				<p class="mb-4">
					Why should you consider supporting PopUpOFF:
				</p>

				<ul class="list-disc list-inside">
					<li>
						Fair <span class="bg-accent">exchange for the time</span> the extension has saved you
					</li>
					<li>
						To encourage people to make <span class="bg-accent">more useful free apps</span>
					</li>
					<li>
						Only 5$ monthly will boost speed of fixing bugs on your
						favorite websites due to dedicated testers we’ll be able to afford
						on a monthly basis. Only 5 bucks from you is enough
						to turn this amazing extension into a completely flawless app.
					</li>
				</ul>
			</div>
			<div class="w-2/6">
				<DonationForm />
			</div>
		</div>
	</div>
</section>

