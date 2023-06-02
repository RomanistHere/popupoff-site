<script>
	const smoothScroll = elemId =>
		document.querySelector(elemId).scrollIntoView({ behavior: "smooth" });
</script>

<nav class="absolute text-xl tracking-wide right-6 top-6">
	<ul class="flex">
		<li>
			<a
				class="transition-colors border-b-2 border-dark hover:border-accent block p-2 mx-2 hover:text-accent"
				href="#donate"
				on:click|preventDefault={() => {
					smoothScroll("#donate");
				}}
			>
				Donate
			</a>
		</li>
		<li>
			<a
				class="transition-colors border-b-2 border-dark hover:border-accent block p-2 mx-2 hover:text-accent"
				href="#faq"
				on:click|preventDefault={() => {
					smoothScroll("#faq");
				}}
			>
				FAQ
			</a>
		</li>
		<li>
			<a
				class="transition-colors border-b-2 border-dark hover:border-accent block p-2 mx-2 hover:text-accent"
				href="/submit-issue"
			>
				Report issue
			</a>
		</li>
		<li>
			<a
				class="transition-colors border-b-2 border-dark hover:border-accent block p-2 mx-2 hover:text-accent"
				href="#getintouch"
				on:click|preventDefault={() => {
					smoothScroll("#getintouch");
				}}
			>
				Contact
			</a>
		</li>
	</ul>
</nav>
