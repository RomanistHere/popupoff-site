<script>
	const points = [
		"created for people, not for profit",
		"no tracking or analytics",
		"free & open source",
		"all information stored locally",
		"maintained by individuals, not commerce",
		"plain HTML, CSS and JavaScript, <50 KiB",
	];
</script>

<section class="min-h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">
			Privacy and performance <br />
			from the beginning
		</h1>
		<ul class="text-basic leading-10 list-disc list-inside">
			{#each points as text}
				<li>
					{text}
				</li>
			{/each}
		</ul>
	</div>
</section>
