<script>
	export let title;
	export let handleClick;
	export let shouldShow;
	export let isShouldShowSeparator = true;
</script>

<li>
	{#if isShouldShowSeparator}
		<p class="-mb-3">***</p>
	{/if}

	<button
		class="transition-colors hover:bg-dark hover:text-bright p-1"
		on:click={handleClick}
	>
		{title}
	</button>

	{#if shouldShow}
		<div class="block italic text-lg my-8 max-w-2xl mx-auto">
			<slot />
		</div>
	{/if}
</li>