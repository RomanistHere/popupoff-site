<script>
	let customClass = "";
	export { customClass as class };
	export let title;
	export let disabled;
</script>

<div class="relative inline-block">
	<button
		class="relative block py-3 px-8 text-2xl rounded-3xl bg-accent font-logo z-10
		transition-transform hover:opacity-95
		active:translate-x-1 active:translate-y-1 tracking-wide {customClass}"
		class:translate-x-1={disabled}
		class:translate-y-1={disabled}
		{disabled}
		on:click
	>
		{title}
	</button>
	<span class="absolute bg-dark inset-0 rounded-3xl translate-x-1 translate-y-1 z-0" />
</div>
