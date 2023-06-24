<script>
	import Nav from "$lib/components/Nav.svelte";
	// drop-shadow-[0_1px_2px_rgb(255,0,0)]
</script>

<main class="bg-bright pb-32 text-dark">
	<Nav />

	<div class="max-w-2xl mx-auto pt-32 px-8 text-lg">
		<p class="my-4">
			Great, now you know how to "unlock" any page blocked by overlays.
		</p>

		<p class="text-article-subtitle">There are 4 modes:</p>

		<ul class="list-disc pl-4 mt-2 mb-4 space-y-2">
			<li>
				<strong>Aggressive</strong> removes all sticky elements
			</li>
			<li>
				<strong>Moderate</strong> leaves sticky headers and other useful minor elements
			</li>
			<li>
				With the <strong>Stationary</strong> mode popups don't disappear, but moved somewhere
				else - usually the top or bottom of the page
			</li>
			<li>
				<strong>Turn OFF</strong> whitelists the website. This mode turns PopUpOFF off
			</li>
		</ul>

		<p class="text-article-subtitle">Don't want to enable PopUpOFF manually for every website?</p>

		<p class="mt-2 mb-4">
			Go to the settings and set "<strong>Active by default (Automode)</strong>" option to the mode you like.
			We recommend to test all 3 modes first though, so you have a clear understanding what works best for you.
		</p>

		<img
			src="images/popup_explained.png"
			alt="Extension's popup opened and described."
			class="block my-12"
		/>

		<p class="my-4">
			Congratz, you've completed our tutorial.
			Keep in mind, that even with automode you will need to adjust its work on certain websites -
			<strong>"Moderate" is the best mode for most sites, but not for every one</strong>.
		</p>

		<p class="my-4">
			Popups still block content? Try "Aggressive" or "Stationary".
			Expect a sign in popup but it never appeared, select "Turn OFF" to restore layout.
			Configure a keyboard shortcut to do it more effective.
		</p>

		<p class="mb-12">
			P.S. There is a more <a href="/how-to-use" class="text-link">detailed guide</a> (2 min) if you want to learn more.
		</p>

		<div class="text-center">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</div>
</main>

<section class="fixed inset-0 flex justify-center items-center bg-dark/80 backdrop-blur-sm">
	<div class="max-w-3xl w-full text-center bg-dark px-4 py-8 shadow-lg text-lg">
		<h1 class="text-3xl font-bold mb-8 text-accent">
			This is an interactive PopUpOFF tutorial.
		</h1>
		<p class="my-4">
			Learn how to get that famous great PopUpOFF experience.
			All you need is <strong class="text-accent">30 seconds</strong>.
		</p>

		<img
			src="/animated/animated-moderate.webp"
			alt=""
			class="max-w-3xl mx-auto my-4"
			width="720"
			height="450"
		>

		<p class="my-4">
			<strong class="text-accent">Step 1.</strong> Enable <strong>"Moderate"</strong> mode
			to bypass the popup you're seeing right now by either:
		</p>
		<ul class="leading-7">
			<li>
				a) Click the extension's icon at the top and press "Moderate" button
			</li>
			<li>
				b) Right click anywhere on the page, find "PopUpOFF" and choose "Moderate"
			</li>
		</ul>
	</div>
</section>