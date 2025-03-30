<script>
	import SEO from "$lib/components/SEO.svelte";
</script>

<SEO
	title="PopUpOFF | Privacy guide"
	description="Privacy guide from a creator of PopUpOFF. Privacy for beginners, intermediate and advanced users."
/>

<main class="bg-bright text-dark min-h-screen">
	<article class="max-w-2xl py-20 px-8 mx-auto text-lg">
		<h1 class="text-title text-center mb-20">Privacy simplified.</h1>

		<p class="my-4">
			As a creator of privacy related tool, I get asked about other tools in this field
			pretty often and by different people. So while for advanced users mentioning ad
			blockers doesn't make much sense, it can open the whole new world for beginners and
			people who care (or rather don't) about ads, for example - or being tracked
			everywhere they go.
		</p>

		<p class="my-4">
			I will split this guide in different groups based on the goals and will also share
			my setup and explain pros and cons of everything. Sounds cool? Let's dive right in!
		</p>

		<h2 class="text-article-title">
			Beginners. Major quality of live improvements with minimal effort.
		</h2>

		<p class="text-article-subtitle">3 extensions</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>uBlock Origin</strong> - the former king of the extensions. I say "former",
				because it's not going to work in newer Chromium (Chrome-like) browsers soon/anymore.
				So you can opt our for light version (which is not that effective), not update your
				Chromium browser or use a Firefox-based browser instead. Extension itself has no downsides
				and will prevent many websites from showing you ads and protect your privacy at the
				same time. 10/10 - never use internet without it!
			</li>
			<li>
				<strong>Privacy Badger</strong> - does protect your privacy in slightly different ways
				from uBlock Origin. Doesn't block ads. Some believe you shouldn't use them together,
				I use all the time and it works really well together, encourage you to experiment.
				No downsides for beginners.
			</li>
			<li>
				<strong>PopUpOFF</strong> - ha! It's my website. No really, it's a tool that removes
				annoying cookie notifications and different popups. What's important in terms of privacy
				is that it skips the step of accepting or declining cookie scripts by just removing
				the overlay, which basically means that you're "skipping" initialisation of many scripts
				since cookies and trackers are idling by default. And so PopUpOFF keeps them idling
				while you can access the website. Downside of course is that it can be too aggressive
				and break functionality so it's not recommended to use on every website, just on ones
				you really need help with.
			</li>
		</ul>

		<p class="my-4">
			There are of course many other extension that might help you, but they are either do
			what others here are already doing (like DuckDuckGo Privacy Essentials) or too
			specific to mention (but nevertheless great and useful) like NoScript.
		</p>

		<p class="text-article-subtitle">2 search engines</p>

		<p class="my-4">
			Before you judge next choices, remember that it's a beginner section and
			functionality and sustainability are very important for us at this point.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Kagi.com</strong> - paid engine that searches results better than google by
				now (which is google's fault partially) and focuses on privacy. I'm one of the early
				adopters and by now I'm using it daily and very happy with the results. Drawbacks:
				it's paid and that means that you'll have to sign in and connect your card which is
				not ideal for privacy of the more advanced levels, but is fine for us.
			</li>
			<li>
				Not-signed-in-<strong>google.com</strong>. Surprised? While no one recommends
				using google because of the tracking and ads - if you in never sign in to any
				google/facebook services in your browser and use extensions for the section above
				- it's decent enough for beginner goals while maintaining good search results.
				Plus if you're using it with VPN in incognito mode - there is very little info it
				can gather about it.
			</li>
		</ul>

		<p class="my-4">
			You can play with other search engines, like duckduckgo, brave search, qwantum - but
			they are not that great in my experience in terms of results + have some privacy
			related or moral concerns. I used all of them for long time and just couldn't settle
			there.
		</p>

		<p class="text-article-subtitle">1 VPN</p>

		<p class="my-4">
			I bet there are a lot of good VPNs that truly protect your privacy, there is an
			extensive reddit research, I however would recommend just two, and you need only one
			of them:
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>NordVPN</strong> - you might hear different things about it or consider it
				too mainstream because everyone advertises it. I, however, am recommending it because
				I worked there and I trust what I saw. Plus it's really good: for all the years I'm
				using it, I've never had any issues.
			</li>
			<li>
				My number 2 option is <strong>ProtonVPN</strong>. There are some unpleasant things
				you can find about proton products, but I still consider them very decent. Plus
				ProtonVPN has a free option which is probably what I would use if I needed a free
				VPN - which I can't recommend unless you know what you're doing.
			</li>
		</ul>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Little to no ads</strong> - many websites you used to see ads on will be cleared.
				News portals, google search, youtube, reddit, facebook - just name it.
			</li>
			<li>
				<strong>Reduced ads accuracy</strong>. If you care about your privacy, that's
				good. Cause your favorite platforms will have less access to what you're doing on
				the other websites (and right now they probably know a lot) and will be able to
				affect you to the lesser extent. Without more advanced steps you're still a
				target, but instead of "hitting the bullseye", it's just "hitting a bull" now.
			</li>
		</ul>

		<p class="my-4">Excited? More below!</p>

		<h2 class="text-article-title">Intermediate. More results but more effort.</h2>

		<p class="text-article-subtitle">Browsers</p>

		<p class="my-4">
			Let's talk browsers now. I didn't put them in a previous section because it takes
			effort to take the plunge. Changing routines, importing/exporting stuff, loggining
			in, etc. But once you do that, there's no way back. And it's definitely worth it if
			you're using regular Chrome, Opera, Edge or Safari now.
		</p>

		<p class="my-4">
			There are many different good options for everyone and changing the browser is not
			that hard physically as it is mentally.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Brave</strong> - the first browser I'm going to recommend simply because it
				looks and works very similar to Chrome or Edge, but does it better in terms or privacy
				and ad protection. It has some crypto attached to it be default that might warn you,
				but be scared not - all of it can be disabled in the settings and it will become a
				regular Chrome but better and with native ad blocker installed by default. You can
				test it with and without uBlock Origin to see what you prefer more. I use both. Also
				uBlock Origin is going to be supported after Chrome's support will end.
			</li>
			<li>
				<strong>Firefox</strong> - the best browser in terms of privacy but sadly have some
				issues with user experience, that's why I only recommend it as a second choice. It's
				a whole different platform beneath (unlike Brave which is a browser based on Chromium
				with Google's code stripped down) - and it has both pros and cons. Don't take me wrong,
				I like it and use it every day but your experience might be different from what you
				used to and it's up to you to try, would still encourage though. Any popular Firefox-based
				browser would be better for privacy than almost any Chromium-based one. Also if you
				pick Firefox, google something like "firefox privacy settings" to disable a few flags
				here and there and make it better than by default. And install Facebook container extension
				that will sandbox facebook related trackers to not track you on other websites.
			</li>
			<li>
				<strong>Ungoogled Chromium</strong> - is what I mainly use right now but sadly might
				be dropping (or stop updating - which I already did) soon because newer versions are
				not going to support extensions like uBlock Origin very soon. Apart from that, it's
				best from two worlds. It looks and works as regular Chrome but without google's bullshit.
				Though no sync and installation process makes it less user friendly for beginners.
			</li>
		</ul>

		<p class="my-4">
			I can't recommend any other browser that I know. Vivaldi, Opera, Edge, Yandex and
			most other popular browsers are closed sources and can be potential privacy threat
			instead of salvation. Every action you do in the internet can be monitored and
			recorded by browser - so pick wisely - pick open-source. Firefox is worth taking a
			plunge for.
		</p>

		<p class="text-article-subtitle">Email providers</p>

		<p class="my-4">
			Not using big popular email providers (Apple, Google, Microsoft, etc) is very
			important because those companies make money by showing you ads. And guess how much
			useful info about what can they sell to you a company can gather from analyzing your
			personal email. Yes, a lot! Do they do it? Short answer: "Yes". Long answer:
			"Absolutely". So what can you do? Switch to a email that has a different business
			model.
		</p>

		<p class="my-4">
			There is going to be only one provider that I'll be recommending:
			<strong>Protonmail</strong> - because that's what I started using long ago and never
			looked back. It doesn't mean that there are no alternatives, it's just I think this one
			is the best. And with proton you can get the whole pack (vpn, calendar, drive, etc) for
			a better price together with email.
		</p>

		<p class="my-4">
			Another thing I really like about protonmail and recommend to use is a Simplelogin
			(or Proton Pass) extension that automatically creates email aliases that forward
			emails to your main email, thus giving you possibility to not be worried about
			registrations with your email on shady resources. You never expose your real
			personal email and can always disable the alias you created. Thus endorsing not only
			your web privacy but also web security which a whole another topic.
		</p>

		<p class="text-article-subtitle">Password managers</p>

		<p class="my-4">
			This is a complicated topic because many popular password managers had leaks at some
			point which makes this topic spicy. But since password managers do not influence
			privacy directly, but rather security I'll just mention that it's important to use
			one and some - like NordPass - have email alias creation function as well that does
			increase your privacy for reasons I mentioned above. I am using and would recommend
			NordPass because I worked on it directly and helped to release it.
		</p>

		<p class="my-4">
			Bitwarden is also good. Proton Pass is decent but lucks certain features yet.
		</p>

		<p class="text-article-subtitle">Cloud drives</p>

		<p class="my-4">
			This is the last topic for this section and is a complex one because some services
			offer really strong privacy/encryption, but it often doesn't go very well with
			convenience and speed so be prepared to sacrifice some bits here.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>MEGA</strong> - it's decent combination of speed, convenience and privacy for
				pictures and regular stuff. I would not advise to store there important docs, information,
				private pictures without encrypting them first. But it's a general advise, if you're
				storing something private - encrypt (archive with password) it first, store password
				in a password manager and then upload to any cloud storage. This way it's 100% safe
				even if someone can access your data.
			</li>
			<li>
				<strong>Proton Drive</strong> - not the most convenient from user experience service,
				but has much more trust from me in relation to docs and private data.
			</li>
		</ul>

		<p class="my-4">
			I'm not mentioning self-hosted open-source solutions here because while they are the
			best, user has to have advanced knowledge about it and let's be honest, not many of
			us taking it that seriously. Plus it's more of a security topic again.
		</p>

		<p class="my-4">
			Storing not encrypted "raw" files like pictures and documents on google drive or any
			other popular free platform can give access to scripts and parsers to gather more
			information about you so they can sell it later, thus making money on what you
			thought was private.
		</p>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Close to 0 ads accuracy</strong>. Because we're cutting major points of
				access to who are you and what you're doing on the web, ads will start to be
				random most of the time. It's not going to happen right away. Platforms you used
				all those previous years will still have a huge collection of information about
				you - but they will hardly collect anything else.
			</li>
			<li>
				<strong>Increased web security</strong>. That's not our today's goal but it still
				is a very important topic and I'm glad we dived into it even for a bit. Let me
				know if you want to learn more.
			</li>
		</ul>

		<h2 class="text-article-title">Advanced. How to disappear completely.</h2>

		<p class="my-4">
			Wow, you're still here? Liked that crazy stuff, huh? I have even more (applicable to
			both "stuff" and "crazy")! We will discuss stuff that removes core of those greedy
			platforms to you. But at the price of rather drastic changes. Changing browsers is
			one thing, changing your OS is a completely different process requiring more
			preparation but also more effective.
		</p>

		<p class="my-4">Anyway, be ready to learn how to install Linux on your MacBook :)</p>

		<p class="text-article-subtitle">Yes, Linux</p>

		<p class="my-4">
			Linux is an OS that you can install (or pay someone to do so, sometimes even buy a
			PC/laptop with the system already) on your device. For simplicity I'll call it as a
			set of different OSs based on some core stuff which all of them share. These
			variants are called "distros" or "distributions" and there are many of them pursuing
			different goals. I'll recommend 2 of them which I'm using most and which are the
			simplest to live with.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Ubuntu</strong>. Conventionally one of the beginners distros there are and
				for a reason: it's easy to get used to after Microsoft or Apple OSs. There is not
				much special about it but it will do the same stuff you do on your device, you can
				use the same browser to do whatever you do in your browser, use steam to play
				games, watch movies - as far as I'm concerned it's what majority of us do majority
				of time.
			</li>
			<li>
				<strong>Pop OS!</strong>. Very similar to Ubuntu but a bit more customisable and
				beautiful with nice community of people who ready to help each other. Ubuntu has a
				bigger knowledge base but PopOS is based on Ubuntu so most of the stuff will be
				exactly the same.
			</li>
		</ul>

		<p class="my-4">Before you try, what are the downsides:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>No support for some programs</strong>. If you use some programs a lot and
				can't live without, check (by googling: "is Ubuntu supports 'insert my program'")
				if Linux supports it. One example would be Photoshop which can't be simply run on
				Linux. Though who cares about it nowadays when you can do everything from your
				browser. Also almost any program will have an open-source and private alternative.
				Though not that fancy of course. But most popular are very decent. Like
				LibreOffice.
			</li>
			<li>
				<strong>Sometimes no visual interface</strong>. It might sound scary, I
				understand, but it's not that big of a deal and chances are it won't happen to you
				anyway. But yeah, some issues have to be solved by pasting some commands from the
				internet to Linux terminal. If your blood pressure is rising from just reading it
				- Linux might be not for you.
			</li>
		</ul>

		<p class="my-4">Upsides besides privacy? Yes, a lot:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>You don't need to install it to try</strong>. You just need a USB flash
				drive with at least 4GB to try Linux experience on your device without a need to
				install it. It won't damage or change anything on your PC.
			</li>
			<li>
				<strong>Full control and freedom</strong>. Tired of forced updates at inconvenient
				times? Apps that you can't delete? Trackers that you can't disable? Well in Linux
				no one forces you to do anything.
			</li>
			<li>
				<strong>Full customisation</strong>. With a huge active community it can look and
				work however you want.
			</li>
			<li>
				<strong>Better performance</strong>. Out of box. It will fly on your device even
				if it's old.
			</li>
			<li>
				<strong>No viruses</strong>. There are essentially almost no malware for Linux.
				You don't need an antivirus to run all the time, this increasing the performance
				even more.
			</li>
			<li>
				<strong>It's free and open-source</strong>. Just like PopUpOFF! Or maybe
				vice-versa.
			</li>
			<li>
				<strong>You can learn how to control and deploy servers online</strong>. Most of
				the stuff in the internet is hosted on Linux servers.
			</li>
		</ul>

		<p class="text-article-subtitle bg-red-600">I stopped here</p>

		<p class="my-4">
			As you might or might not be interested, my setup ends here. It's not about the lack
			of knowledge. Life is complex and simple the same time. Everything needs balance,
			including effort, time spent, energy.
		</p>

		<p class="my-4">
			I'm fine with consequences of lack of privacy at this point in my life. I don't want
			a custom ROM on my phone because I barely use it. I don't need to sandbox my
			apps/browsers/tabs because I'm not using any social networks at all. I've got one
			entire browser dedicated to google/facebook services I have to use and trust Firefox
			with a sandboxing extension to do that heavy lifting. I use a dedicated Brave
			browser for my work profiles with work google account signed in. And I use
			everything else in a third browser.
		</p>

		<p class="my-4">
			On my android phone I'm not signed in into anything and have all the google services
			disabled. I wanted to do a custom ROM on my pixel for a long time but never really
			got to the point where I felt I needed it. So I guess that's as far as I go, but the
			path doesn't end here if you care to stick a bit longer.
		</p>

		<p class="my-4">
			I'd have liked a more private way to store pictures but the hardest task if making
			your family use it. And without family why would I need a cloud hosting for pictures
			in the first place? So there is always a compromise and balance. Remember that while
			privacy is important, relationships with your family are superior. Don't be angry or
			spoil relationships because someone refuses to care about privacy as much as you do.
		</p>

		<p class="text-article-subtitle">Custom phone ROMs</p>

		<p class="my-4">
			You'd need to have an Android phone as it can be configured better for privacy even
			without ROMs. There are basically only 2 names to trust here:
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>GrapheneOS</strong>. Only supports Google Pixel phones. As of now it's
				considered superior to anything else you could get on the phone. Allows you to
				sandbox apps so you can safely have Instagram installed and whatnot on your phone
				and "wrap it in a box", so while the app thinks it has its usual access to
				everything on your phone (pictures, contacts, etc), it will have zero access to
				anything.
			</li>
			<li>
				<strong>LineageOS</strong>. Supports many more devices, should be good generally -
				but as a privacy person, I'd get Pixel and install GrapheneOS instead.
			</li>
			<li>
				<strong>Any Linux based OS</strong>. Privacy: 10/10. Usability: you won't like it.
				Fun to try on the older phone, but that's about it.
			</li>
		</ul>

		<p class="text-article-subtitle">Doors opened by Linux</p>

		<p class="my-4">
			Now that you're a master of Linux, you can redo most of the stuff from previous
			sections but in a more private way. <strong>OpenVPN</strong> for VPN on your own
			server. <strong>Nextcloud</strong> for cloud storage. <strong>Vaultwarden</strong> for
			password manager. Do you have to? Sometimes, but not really, though for sure you can
			and it might fit your goals better. Plus you will have to master web security to make
			sure it's all secure.
		</p>

		<p class="text-article-subtitle">Going offline</p>

		<p class="my-4">
			Using that <strong>LibreOffice</strong> app instead of Google docs on Linux. In rare
			situations where you need something to be hosted and edited online - for example
			sharing or collaborating with other people, use services like
			<strong>CryptPad</strong>. No one except for you is likely to enjoy it. Save your
			data on encrypted hard drives.
			<strong>VeraCrypt</strong> is a default choice.
		</p>

		<p class="text-article-subtitle">Care more about tools you use</p>

		<p class="my-4">
			Like that <strong>Privacy Badger</strong> that I mentioned. It doesn't have
			downsides for beginners, but it might participate in leaving your digital footprint
			which is not what you want to have at this point. Research everything you use. Most
			of it is likely to be open-source. <strong>Brave</strong> is not that ideal anymore too.
			There's been occasion with it affiliate with some services - you can't risk anymore.
		</p>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Fun</strong> if you're into it.
			</li>
			<li>
				<strong>Stink eyes</strong> from people you're talking about regular things like posting
				pictures in social networks.
			</li>
			<li>
				<strong>To have an opportunity to be invisible</strong> in the internet. Like that
				special agent in a movie who was thought to be dead 30 years but is still alive and
				now is going for revenge. Except in the internet instead. And no revenge. And no one
				cares.
			</li>
		</ul>

		<h2 class="text-article-title">Above and beyond</h2>

		<p class="my-4">
			For any regular person there is no need in this. But of course there are ways to
			make everything even crazier - as always. There are self-destroying emails and
			messages.
		</p>

		<div class="text-center">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</article>
</main>
