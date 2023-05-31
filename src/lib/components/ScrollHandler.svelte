<script>
	import { onMount } from "svelte";

	import { isScrollingStore } from "$lib/stores/index.js";

	let isScrolling = false;
	let timerId = null;

	const debouncedHandler = () => {
		if (!isScrolling) {
			isScrollingStore.set(true);
		}

		if (isScrolling) {
			clearTimeout(timerId);
		}

		isScrolling = true;
		timerId = setTimeout(() => {
			isScrolling = false;
			isScrollingStore.set(false);
		}, 800);
	};

	onMount(() => {
		window.addEventListener("scroll", debouncedHandler);
	});
</script>