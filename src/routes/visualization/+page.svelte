<script>
	import { onDestroy, onMount } from "svelte";

	import SEO from "$lib/components/SEO.svelte";
	import Visualize from "$lib/components/Visualize.svelte";

	let state = null;

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
			if (state)
				return;
			
			initConnection();
			setTimeout(() => {
				if (!state)
					initConnection();
			}, 500);
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
{:else}
	<section class="flex justify-center items-center text-xl min-h-screen">
		Just a usual page (come back when you install PopUpOFF though)
	</section>
{/if}
