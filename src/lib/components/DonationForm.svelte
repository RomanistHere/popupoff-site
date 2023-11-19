<script>
	import PrimaryButtonLink from "$lib/components/PrimaryButtonLink.svelte";

	// last update: Nov 19, 2023
	const options = [
		{
			text: "$2.00",
			linkOneTime: "https://donate.stripe.com/8wM6qbgJh69F9Xy3cf",
			linkSubscribe: "https://buy.stripe.com/7sIaGr8cL2XtedOeUZ",
			number: 4,
		},
		{
			text: "$5.00",
			linkOneTime: "https://donate.stripe.com/7sI29Vdx555B9XycMN",
			linkSubscribe: "https://buy.stripe.com/3csaGrct1gOjfhSbIO",
			number: 9,
		},
		{
			text: "$10.00",
			linkOneTime: "https://donate.stripe.com/9AQ8yj0Kj9lR2v6002",
			linkSubscribe: "https://buy.stripe.com/aEUbKv9gP69F9Xy28f",
			number: 6,
		},
		{
			text: "$25.00",
			linkOneTime: "https://donate.stripe.com/14k6qbakTeGb3za7sw",
			linkSubscribe: "https://buy.stripe.com/7sIeWH3WvbtZ3zadQY",
			number: 6,
		},
		{
			text: "Custom",
			linkOneTime: "https://donate.stripe.com/7sIbKv3WveGb3za4gp",
		},
	];

	let state = null;

	const handleDonationButtonClick = (e, oneTime, subscribe) => {
		e.preventDefault();

		if (!subscribe) {
			document.location.href = oneTime;
			return;
		}

		state = { oneTime, subscribe };
	};

	const resetDonation = e => {
		e.preventDefault();
		state = null;
	};
</script>

<ul class="flex justify-center -md:flex -md:flex-wrap">
	{#if state}
		<li class="relative m-3">
			<PrimaryButtonLink
				href="/"
				on:click={resetDonation}
			/>
		</li>
		<li class="relative m-3">
			<PrimaryButtonLink
				href={state.oneTime}
				title="Single time"
			/>
		</li>
		<li class="relative m-3">
			<PrimaryButtonLink
				href={state.subscribe}
				title="Every month"
			/>
		</li>
	{:else}
		{#each options as { text, linkOneTime, linkSubscribe, number }}
			<li class="relative m-3 -md:mb-8">
				<PrimaryButtonLink
					href={linkOneTime}
					title={text}
					on:click={e => {
						handleDonationButtonClick(e, linkOneTime, linkSubscribe);
					}}
				/>
				{#if number}
					<p class="absolute italic inset-x-0 -bottom-8">
						{number}
						{#if number === 1}
							supporter
						{:else}
							supporters
						{/if}
					</p>
				{/if}
			</li>
		{/each}
	{/if}
</ul>
