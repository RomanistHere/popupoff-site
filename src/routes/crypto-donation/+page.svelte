<script>
	import SEO from "$lib/components/SEO.svelte";

	let isSuccessCrypto = null;
	let timeoutId = null;

	const writeToCopyNavigator = async (string, crypto) => {
		isSuccessCrypto = null;
		clearTimeout(timeoutId);
		try {
			await navigator.clipboard.writeText(string);
			isSuccessCrypto = crypto;

			timeoutId = setTimeout(() => {
				isSuccessCrypto = null;
			}, 1200);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	};
</script>

<SEO
	title="PopUpOFF | Donate crypto"
	description="Make a crypto donation (transfer) to support PopUpOFF"
/>

<section class="relative min-h-screen flex justify-center items-center">
	<ul
		class="flex justify-center items-center text-center space-x-16 text-lg -md:flex-wrap -md:space-x-0 -md:space-y-24"
	>
		<li>
			<button
				on:click={() =>
					writeToCopyNavigator("bc1qxjlrnzfa9w54g54dzs2efy7qyksp59fhds0qg0", "BTC")}
			>
				<span class="text-2xl font-bold block">Donate Bitcoin (BTC)</span>
				<span class="text-sm opacity-60 mb-4 block">Click or tap address to copy</span>
				<span class="block">
					{#if isSuccessCrypto !== "BTC"}
						bc1qxjlrnzfa9w54g54dzs2efy7qyksp59fhds0qg0
					{:else}
						copied!
					{/if}
				</span>
				<span class="block opacity-0">bc1qxjlrnzfa9w54g54dzs2efy7qyksp59fhds0qg0</span>
			</button>
		</li>
		<li>
			<button
				on:click={() =>
					writeToCopyNavigator("0xD7E1B479b6cfe27d8F550A67958B2668237F31A4", "ETH")}
			>
				<span class="text-2xl font-bold block">Donate Ethereum (ETH)</span>
				<span class="text-sm opacity-60 mb-4 block">Click or tap address to copy</span>
				<span class="block">
					{#if isSuccessCrypto !== "ETH"}
						0xD7E1B479b6cfe27d8F550A67958B2668237F31A4
					{:else}
						copied!
					{/if}
				</span>
				<span class="block opacity-0">0xD7E1B479b6cfe27d8F550A67958B2668237F31A4</span>
			</button>
		</li>
	</ul>

	<div class="text-center absolute bottom-16 left-1/2 -translate-x-1/2">
		<a
			href="/"
			class="text-link text-lg inline-block px-2">← Go to main page</a
		>
	</div>
</section>
