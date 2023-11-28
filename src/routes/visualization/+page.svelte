<script>
	import { onDestroy, onMount } from "svelte";

	import SEO from "$lib/components/SEO.svelte";
	import Visualize from "$lib/components/Visualize.svelte";
	import Spinner from "$lib/components/Spinner.svelte";

	let state = null;
	let isConnectionFailed = false;

	const onMessage = ({ detail }) => {
		state = { ...detail };
	};

	const initConnection = () => {
		document.dispatchEvent(
			new CustomEvent("showPopUpOFFStats", { detail: "letTheShowBegin" })
		);
	};

	onMount(() => {
		if (typeof document === "undefined") return;

		document.addEventListener("PopUpOFFStats", onMessage);
		initConnection();

		setTimeout(() => {
			if (state) return;

			initConnection();
			setTimeout(() => {
				if (state) return;

				setTimeout(() => {
					if (state) return;

					isConnectionFailed = true;
				}, 1500);
			}, 1000);
		}, 500);
	});

	onDestroy(() => {
		if (typeof document === "undefined") return;

		document.removeEventListener("PopUpOFFStats", onMessage);
	});
</script>

<SEO
	title="PopUpOFF | Visualization"
	description="Check this page with PopUpOFF installed"
/>

{#if state}
	<Visualize {state} />
{:else if isConnectionFailed}
	<section class="flex justify-center items-center text-lg text-center min-h-screen">
		<div>
			<div class="relative w-28 h-28 inline-block opacity-0">
				<Spinner />
			</div>
			<p>
				Couldn't connect.
				<a
					href="/submit-issue"
					class="underline"
				>
					Contact us
				</a>
			</p>
		</div>
	</section>
{:else}
	<section class="flex justify-center items-center text-lg text-center min-h-screen">
		<div>
			<div class="relative w-28 h-28 inline-block">
				<Spinner />
			</div>
			<p>Connecting extension...</p>
		</div>
	</section>
{/if}
