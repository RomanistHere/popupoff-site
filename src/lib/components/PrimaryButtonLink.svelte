<script>
	import ArrowLeft from "$lib/components/icons/ArrowLeft.svelte";

	export let href = "#";
	export let title;
</script>

<a
	class="relative block py-3 px-8 text-2xl rounded-3xl bg-accent font-logo z-10
	transition-transform hover:-translate-x-px hover:-translate-y-px
	active:translate-x-1 active:translate-y-1 tracking-wide"
	{href}
	on:click
>
	{#if title}
		{title}
	{:else}
		<ArrowLeft class="my-2" />
	{/if}
</a>
<span class="absolute bg-dark inset-0 rounded-3xl translate-x-1 translate-y-1 z-0" />
