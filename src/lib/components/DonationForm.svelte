<script>
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";

	const options = [
		{
			text: "$2.00",
			linkOneTime: "https://donate.stripe.com/7sI4kn5tXejGgRG3ch",
			linkSubscribe: "https://buy.stripe.com/9AQ7wz7C58ZmcBq145",
			number: 1,
		},
		{
			text: "$5.00",
			linkOneTime: "https://donate.stripe.com/00g6sv09DejG8la7sy",
			linkSubscribe: "https://buy.stripe.com/7sI9EH2hL5Na1WMdQS",
			number: 3,
		},
		{
			text: "$10.00",
			linkOneTime: "https://donate.stripe.com/3cs2cf8G9ejGgRG6ov",
			linkSubscribe: "https://buy.stripe.com/dR69EH5tX2AYeJy9AD",
			number: 5,
		},
		{
			text: "$25.00",
			linkOneTime: "https://donate.stripe.com/fZecQT6y10sQati28g",
			linkSubscribe: "https://buy.stripe.com/14k18be0tejGati3cg",
			number: 3,
		},
		{
			text: "Custom",
			linkOneTime: "https://donate.stripe.com/9AQ3gjg8B8Zm1WM6oo",
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

<ul class="flex justify-center">
	{#if state}
		<li class="relative m-3">
			<PrimaryButton
				href="/"
				on:click={resetDonation}
			/>
		</li>
		<li class="relative m-3">
			<PrimaryButton
				href={state.oneTime}
				title="Single time"
			/>
		</li>
		<li class="relative m-3">
			<PrimaryButton
				href={state.subscribe}
				title="Every month"
			/>
		</li>
	{:else}
		{#each options as { text, linkOneTime, linkSubscribe, number }}
			<li class="relative m-3">
				<PrimaryButton
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
