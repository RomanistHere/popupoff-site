<script>
	import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
	title="PopUpOFF | Changelog"
	description="Extension changes by versions."
/>

<main class="bg-bright text-dark min-h-screen">
	<article class="max-w-2xl py-20 px-8 mx-auto text-lg">
		<h1 class="text-title text-center mb-20">History of changes</h1>

		<p class="text-article-subtitle">2.1.0 (in progress)</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>New Delicate mode</li>
			<li>Add possibility to import/export settings</li>
			<li>Context menu made optional</li>
			<li>Antipaid improved</li>
			<li>Removed possibility to adjust strictness of Moderate mode</li>
			<li>Dormant renamed to "Turn OFF" for clarity</li>
			<li>Dedicated tutorial page on install (on new website)</li>
			<li>Settings icon to access settings from popup</li>
			<li>Other minor changes and improvements</li>
		</ul>

		<p class="my-4">
			After a serious brake a new major update is coming. This time we feature new mode,
			that will give you one more opportunity to bully popups, cookie notifications and
			overlays - Delicate mode. It doesn't remove popups from the page completely, but
			forces them to stop overlaying other page elements. This usually results in popups
			being statically displayed at the top or bottom of the page. Still experimental,
			will be improved.
		</p>

		<img
			src="images/popup_explained.png"
			alt="Extension's popup opened and described."
			class="block my-12"
		/>

		<p class="my-4">
			Extension's popup and settings page got the new looks. You can open the options
			directly from the popup right now. Settings themselves were refactored and rethought
			too.
		</p>

		<p class="my-4">
			Just as the extension, <a
				href="/"
				class="text-link">the website</a
			> got visually updated too. Now you can leave your feedback and report broken websites.
			In the next updates, we plan to integrate this functionality right into extension.
		</p>

		<p class="text-article-subtitle">2.0.1 - 2.0.2</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>Add "Reset to default" buttons</li>
			<li>Add some additional info at the options page</li>
			<li>Minor fixes and improvements</li>
			<li>Don't auto-reload when Dormant mode enabled</li>
			<li>Add quiz on uninstall</li>
		</ul>

		<p class="my-4">
			Most of this update's changes are invisible for you, my dear user, nevertheless
			there are few noticeable things. I made gentle (default) Moderate mode a bit nicer,
			so it's not going to block payment confirmations and other important popups.
			PopUpOFF doesn't reload the page automatically when you enable Dormant mode now. It
			was my mistake to make it so.
		</p>

		<p class="my-4">
			There are also two new fields at the options page. Reset-to-default buttons and
			additional info.
		</p>

		<p class="text-article-subtitle">2.0.0</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>Automode</li>
			<li>Redesign</li>
			<li>Context menu</li>
			<li>Major performance improvements</li>
			<li>Content updates</li>
		</ul>

		<p class="my-4">
			Biggest update so far. More than 4 000 strings of code were written by me during the
			update. I highly recommend reading the new tutorial.
		</p>

		<p class="my-4">
			Now you can set any of 3 new modes as automode (default mode for every website) at
			the options page. Aggressive - Hard mode, Moderate - Easy mode, Dormant - new one,
			making PopUpOFF inactive. You can also change how strict the Moderate mode block is.
		</p>

		<p class="my-4">
			Now you need to pick what website you apply prevent content feature ("Anti-paid")
			to. You can do so from our popup. There is also an option to manage PopUpOFF from
			the context menu now.
		</p>

		<p class="my-4">
			I enjoyed working on the new version very much. You guys inspired me on it. Let's
			test and see how it's going! Would be happy to hear from you! Check the new video.
			Rate our extension in the store. Have a great day!
		</p>

		<p class="text-article-subtitle">1.1.8</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>Detect and remove gradients</li>
			<li>Fix issue with scripts appearing at the top of the page</li>
			<li>Minor fixes and improvements</li>
			<li>Update tutorial</li>
		</ul>

		<p class="my-4">
			This update is mainly focused on the improvement of the user experience after recent
			changes. Now PopUpOFF can detect and remove gradients when preventing content from
			hiding. Also there were issues with scripts appearing at the top of the page - now
			fixed.
		</p>

		<p class="my-4">Next stop is automode:)</p>

		<p class="text-article-subtitle">1.1.7</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>"Prevent paid content from hiding" improved</li>
			<li>Instructions updated (new tutorial)</li>
			<li>Bug with stats fixed</li>
		</ul>

		<p class="my-4">
			Thank you for your feedback guys. Together we have discovered a few more websites,
			where new prevent-content feature didn't work. It will now. PopUpOFF is cleaning a
			few more restrictions up now. Have a look yourself: The Guardian, The Boston Globe,
			The Economist, Review-journal, CCHeadliner - just make sure you are using it right:)
		</p>

		<p class="my-4">
			There is a new tutorial that covers all the features. Squeeze up the maximum value
			from the extension.
		</p>

		<p class="my-4">
			If you experienced any weird behaviour with the stats, I'm sorry. Fixed it.
		</p>

		<p class="my-4">
			Join us in improving the web! And I hope, next time you will read something from
			this page - it will be about automatic mode.
		</p>

		<p class="text-article-subtitle">1.1.6</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>New (experimental) feature: prevent paid content from hiding</li>
			<li>New feature: collect and display stats</li>
			<li>Remove all tracking and analytics systems</li>
			<li>Activate/deactivate on shortcut (Alt + x)</li>
			<li>Changes in design and performance</li>
			<li>Next update is going to have something with automatic mode (finally!)</li>
		</ul>

		<p class="my-4">
			I added a new (experimental) feature. It's supposed to prevent paid content from
			hiding. You know, when you open a website (usually some cool newspaper), see the
			article you wanted to read, and then puf... It's reduced, you can see only a few
			strings and note that you should pay money to see more. Examples: The Economist, Las
			Vegas Review-Journal. Thanks to Whatatay T, I've got an idea - to interfere it. So
			now you can enable this feature at the options page. After you turn it on, it will
			work when you activate Hard or Easy mode and load the needed page (important: mode
			should be active before content removed). I have only a few examples of websites
			like I described above so if you sent me some more, I'd improve this feature
			(important: it's not possible to make it work on every website).
		</p>

		<p class="my-4">
			The statistics. Just a little bit of fun for you. Noone except you (even me) is able
			to see it. Activated by default. You can disable it at the options page. After you
			add some, try clicking it :) My stats during the development
		</p>

		<p class="my-4">
			I removed all the tracking from PopUpOFF and there are none on this site. It's not
			like I'm not interested anymore, I just don't want Google to sell info about you and
			me. I wrote an article about software - it will help you to understand what is
			happening more clearly.
		</p>

		<p class="my-4">
			Earlier I added a keyboard shortcut. From now on you can toggle chosen mode with Alt
			+ x (activate and deactivate with the same key combination).
		</p>

		<p class="text-article-subtitle">1.1.5</p>

		<p class="my-4">
			I'm glad to tell you that you can start using PopUpOFF in three browsers: Chrome,
			Firefox and new Edge. Feel free to use it. It's absolutely the same except new
			versions are coming faster in Firefox store.
		</p>

		<p class="my-4">
			Also, now you will get a nice small notification when you activate the mode from a
			keyboard. Just to be sure that you enabled it on purpose. Let's see how it looks
			like:
		</p>

		<p class="text-article-subtitle">1.1.3</p>

		<p class="my-4">
			From now on, you can use a keyboard shortcut to activate one mode - you need to
			enable it first at the options page. Command is Alt + x - after you use it for some
			period of time, please let me know, what do you think, would it be better to make
			shortcut command toggle mode(activate/deactivate) instead. Do you need one more
			shortcut combination for another mode or are you fine with the favourite one? Would
			it be better for you to set up your custom key combination? I would like to hear
			your thoughts about it!
		</p>

		<p class="my-4">
			And to make it easier for you, I started twitter. I am going to write about future
			updates and start discussions so you can be a part of all further developments. A
			lot depends on your opinion!
		</p>

		<p class="my-4">
			Also, now you can see what mode is enabled by looking at the icon. Helps with new
			keyboard shortcut feature.
		</p>

		<p class="text-article-subtitle">Previous (and missing) versions</p>

		<p class="my-4 mb-16">
			<a
				href="https://github.com/RomanistHere/PopUpOFF#changelog"
				class="text-link">Check github</a
			>
		</p>

		<div class="text-center">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</article>
</main>
