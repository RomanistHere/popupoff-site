<script>
	import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
	title="PopUpOFF | Tutorial"
	description="How to use PopUpOFF browser extension correctly to enjoy the best web browsing experience possible without distractions."
/>

<main class="bg-bright text-dark min-h-screen">
	<article class="max-w-2xl py-20 px-8 mx-auto text-lg">
		<h1 class="text-title text-center mb-20">How to use PopUpOFF</h1>

		<p class="my-4">
			PopUpOFF is not a usual passive blocker. Every time you open a page it searches and
			eliminates popups depending on a mode you chose.
		</p>

		<p class="my-4">
			<strong>Spend 2 minutes</strong> to learn PopUpOFF now and
			<strong>save hours</strong> in the future.
		</p>

		<h2 class="text-article-title">Extension's popup</h2>

		<img
			src="images/popup_explained.png"
			alt="Extension's popup opened and described."
			class="block my-12"
		/>

		<p class="text-article-subtitle">4 modes:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Aggressive</strong> removes all sticky elements
			</li>
			<li>
				<strong>Moderate</strong> leaves sticky headers and other minor elements
			</li>
			<li>
				With the <strong>Delicate</strong> mode popups don't disappear, but moved somewhere
				else - usually the top or bottom of the page
			</li>
			<li>
				<strong>Turn OFF</strong> (old "Dormant") whitelists the website. Basically the mode
				turns PopUpOFF off until you activate it again
			</li>
		</ul>

		<p class="my-4">
			Every time you choose (click) a new mode, <strong
				>the extension will remember your choice</strong
			> for the website and activate it automatically next time you visit this site.
		</p>

		<p class="my-4">
			Indicator on the extension's icon and within the modal will tell you which mode is
			currently active for the given website.
		</p>

		<p class="text-article-subtitle">When not to use</p>

		<p class="my-4">
			<strong
				>We don't recommend using PopUpOFF on platforms like youtube, amazon, instagram,
				etc.</strong
			>
			These websites use popups to display content or other important information (login, payment
			confirmation and so on).
		</p>

		<p class="my-4">
			But for our extension all popups are the same, so it will try to do its job and
			block them. That's why by default PopUpOFF is disabled (turned off) on those popular
			platforms.
		</p>

		<p class="text-article-subtitle">Anti-paid for paywalls</p>

		<p class="my-4">
			Recently PopUpOFF started to learn how to <strong
				>show content hidden behind paywalls</strong
			>. It doesn't work everywhere, but you can test it on websites like: first, second,
			third.
		</p>

		<p class="my-4">
			To try it out, simply click the extension's icon in the browser and press
			"Anti-paid". The page will reload the page and, if possible, show you hidden
			content.
		</p>

		<p class="my-4">
			If it doesn't work (sometimes you need to reload the page manually a few times),
			<a
				href="/submit-issue"
				class="text-link"
			>
				send us a request
			</a>
			and we'll see if it's possible to "unlock".
		</p>

		<p class="text-article-subtitle">Your stats</p>

		<p class="my-4">
			"Your stats" button will lead you to a special page, where you can see your stats
			and visualize the job this extension has done for you.
		</p>

		<p class="my-4">
			All the stats are <strong>stored locally on your device</strong> and cannot be accessed
			by us or anyone else. You can also disable collecting in the settings.
		</p>

		<h2 class="text-article-title">Settings page</h2>

		<p class="my-4">
			There are a few settings we would recommend you to pay attention to. To open this
			page, click on the extension's icon and choose the button at the top right corner.
			Alternatively, right click on the icon and choose "Options" (Chromium) or "Manage
			extension" -> "Preferences" (Firefox)
		</p>

		<p class="text-article-subtitle">Active by default (Automode)</p>

		<p class="my-4">
			The most important setting. It is responsible for what PopUpOFF will do on the
			websites it <strong>encounters for the first time</strong>.
		</p>

		<p class="my-4">
			If you set up "Turn OFF" by default, PopUpOFF will be idle on every page unless you
			activate it explicitly. If you choose "Moderate", popups on every page will be
			removed, but you will need to manually turn it off sometimes.
		</p>

		<p class="my-4">
			See the "Achieve efficiency" section below to learn why you need this.
		</p>

		<p class="text-article-subtitle">Keyboard shortcut</p>

		<p class="my-4">
			Another important productivity option. You can assign one PopUpOFF command on a Ctrl
			+ X shortcut.
		</p>

		<p class="text-article-subtitle">Achieve efficiency</p>

		<p class="my-4">We would like to recommend you a few "styles" of using PopUpOFF:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>"Moderate" mode by default + "Aggressive" on shortcut.</strong>
				For people who are tired of overlays who mainly use search engines to search for info.
				<br />
				Example: open an article -> there are still overlays -> press Ctrl + X -> read the
				article -> quit the site.
			</li>
			<li>
				<strong>"Turn OFF" by default + "Moderate" or "Delicate" on shortcut.</strong>
				Precise blocking. Most of the time don't block anything, when you see annoyances press
				Ctrl + X.
			</li>
		</ul>

		<p class="text-article-subtitle">Other settings</p>

		<p class="my-4">
			You can find some other interesting settings there, like removing/enabling PopUpOFF
			from the <strong>context menu</strong> (right click) or
			<strong>export/import</strong> configuration for when you change a browser.
		</p>

		<p class="my-4">We recommend you have a look.</p>

		<p class="text-article-subtitle">Afterword</p>

		<p class="my-4 mb-16">
			There's a video being recorded in which we will showcase all the features and how to
			use them. For now, if you have additional questions, see the <a
				href="/#faq"
				class="text-link">FAQ</a
			> section.
		</p>

		<div class="text-center">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</article>
</main>
