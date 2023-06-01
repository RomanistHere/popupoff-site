<script>
	const oneTimeButtons = [{
		text: "$2.00",
		link: "",
		number: 1,
	}, {
		text: "$5.00",
		link: "",
		number: 3,
	}, {
		text: "$10.00",
		link: "",
		number: 5,
	}, {
		text: "$25.00",
		link: "",
		number: 3,
	}, {
		text: "Custom",
		link: "",
	}];
</script>

<ul class="flex justify-center">
	{#each oneTimeButtons as { text, link, number }}
		<li class="relative m-3">
			<a
				class="relative block py-3 px-8 text-2xl rounded-3xl bg-accent font-logo z-10 transition-transform hover:-translate-x-px hover:-translate-y-px active:translate-x-1 active:translate-y-1 tracking-wide"
				href={link}
				on:click|preventDefault={() => {}}
			>
				{text}
			</a>
			<span class="absolute bg-dark inset-0 rounded-3xl translate-x-1 translate-y-1 z-0"></span>
			{#if number}
				<p class="absolute italic inset-x-0 -bottom-8">
					{number} supporters
				</p>
			{/if}
		</li>
	{/each}
</ul>