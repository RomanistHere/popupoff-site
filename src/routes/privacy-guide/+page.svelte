<script>
	import SEO from "$lib/components/SEO.svelte";

	let shouldAllowAffiliateLinks = true;
</script>

<SEO
	title="PopUpOFF | Privacy guide"
	description="Privacy guide from a creator of PopUpOFF. Privacy for beginners, intermediate and advanced users."
/>

<main class="bg-bright text-dark min-h-screen">
	<article class="max-w-2xl py-20 px-8 mx-auto text-lg">
		<h1 class="text-title text-center mb-20">Privacy simplified.</h1>

		<p class="my-4">
			As a creator of a privacy related tool, I get asked about other recommendations in
			this field pretty often by people with different backgrounds and goals. So while for
			advanced users mentioning ad blockers doesn't make much sense, it can open the whole
			new world for beginners and people who care (or rather don't) about ads, for example
			- or being tracked everywhere they go.
		</p>

		<p class="my-4">
			I will split this guide in different levels based on the goals and effort required.
			Will also share my setup and explain pros and cons of everything. Sounds cool? Let's
			dive right in!
		</p>

		<label class="inline-flex items-center cursor-pointer mt-4">
			<input
				type="checkbox"
				bind:checked={shouldAllowAffiliateLinks}
				class="sr-only peer"
			/>
			<div
				class="relative w-14 h-7 bg-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/50
				rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
				peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
				after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-accent"
			/>
			<span class="ml-4"> Allow affiliate links </span>
		</label>

		<h2 class="text-article-title">
			Beginners. Major quality of live improvements with minimal effort.
		</h2>

		<p class="text-article-subtitle">3 extensions</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://ublockorigin.com/"
					class="text-link"
					target="_blank"
				>
					<strong>uBlock Origin</strong>
				</a>
				- the former king of the extensions. I say "former", because it's not going to work
				in newer Chromium (Chrome-like) browsers soon/anymore. So you can opt out for a light
				version (which is not that effective), not update your Chromium browser or use a Firefox-based
				browser instead.
				<strong class="bg-accent/20 font-normal"
					>Extension itself has no downsides and will prevent many websites from showing
					you ads and protect your privacy at the same time</strong
				>. 10/10 - never use internet without it!
			</li>
			<li>
				<a
					href="https://privacybadger.org/"
					class="text-link"
					target="_blank"
				>
					<strong>Privacy Badger</strong>
				</a> - does protect your privacy in slightly different ways from uBlock Origin. Doesn't
				block ads. Some believe you shouldn't use them together - in my experience it works
				really well in pair, I encourage you to experiment. No downsides for beginners. We
				will get back to it in the "advanced" section.
			</li>
			<li>
				<a
					href="/"
					class="text-link"><strong>PopUpOFF</strong></a
				>
				- ha! My website - my rules. Jokes aside, it's a tool that removes annoying cookie
				notifications and different popups. What's important in terms of privacy is that it
				skips the step of accepting or declining cookie scripts by just removing the overlay,
				which basically means that
				<strong class="bg-accent/20 font-normal"
					>you're "skipping" initialisation of many scripts since cookies and trackers are
					idling by default</strong
				>. And so PopUpOFF keeps them idling while you can access the website. The
				downside of course is that it can be too aggressive and break functionality so
				it's not recommended to use on every website, just where you really need its help.
			</li>
		</ul>

		<p class="my-4">
			There are of course many other extensions that might help you, but they are either
			do what others here are already doing (like DuckDuckGo Privacy Essentials) or too
			specific to mention (but nevertheless great and useful) like
			<a
				href="https://noscript.net/"
				class="text-link"
				target="_blank">NoScript</a
			>.
		</p>

		<p class="text-article-subtitle">2 search engines</p>

		<p class="my-4">
			Before you judge next choices, remember that it's a beginner section and
			functionality and sustainability are important.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://kagi.com/"
					class="text-link"
					target="_blank"
				>
					<strong>Kagi.com</strong>
				</a>
				- paid engine that
				<strong class="bg-accent/20 font-normal"
					>searches results better than google by now</strong
				> (which is google's fault partially) and focuses on privacy. I'm one of the early
				adopters and by now I'm using it daily and very happy with the results. Drawbacks:
				it's paid and that means that you'll have to sign in and connect your card which is
				not ideal for privacy of the more advanced levels, but is fine for us.
			</li>
			<li>
				Not-signed-in-<strong>google.com</strong>. Surprised? While no one recommends
				using google because of the tracking and ads - if you in never sign in to any
				google/facebook services in your browser and use extensions from the section above
				- it's decent enough for beginner goals while maintaining good search results.
				Plus if you're using it with VPN in incognito mode - there is a very little amount
				of info it can gather.
			</li>
		</ul>

		<p class="my-4">
			You can play with other search engines, like <a
				href="https://duckduckgo.com/"
				class="text-link"
				target="_blank">DuckDuckGo</a
			>,
			<a
				href="https://search.brave.com/"
				class="text-link"
				target="_blank">Brave Search</a
			>,
			<a
				href="https://www.qwant.com/?l=en"
				class="text-link"
				target="_blank">Qwant</a
			>,
			<a
				href="https://www.startpage.com/en/"
				class="text-link"
				target="_blank">Startpage</a
			>
			- but they are
			<strong class="bg-accent/20 font-normal"
				>not that great in my experience in terms of results</strong
			> + some have privacy or moral related concerns. I used all of them for long time and
			just couldn't settle there.
		</p>

		<p class="text-article-subtitle">1 VPN</p>

		<p class="my-4">
			I bet there are a lot of good VPNs that truly protect your privacy, there is an
			extensive reddit research, I, however, would recommend just two, and realistically
			you need only one of them:
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href={shouldAllowAffiliateLinks
						? "https://go.nordvpn.net/SH9Z9"
						: "https://nordvpn.com/"}
					class="text-link"
					target="_blank"
				>
					<strong>NordVPN</strong>
				</a>
				- you might hear different things about it or consider it too mainstream because everyone
				advertises it. I am recommending it because
				<strong class="bg-accent/20 font-normal"
					>I worked there and I trust what I saw</strong
				>. Plus the quality is really good: for all the years I'm using it, I've never had
				any issues.
			</li>
			<li>
				My number 2 option is <a
					href={shouldAllowAffiliateLinks
						? "https://go.getproton.me/SH1U7"
						: "https://protonvpn.com/"}
					class="text-link"
					target="_blank"><strong>ProtonVPN</strong></a
				>. I generally consider Proton products very decent and have a subscription to all
				ot them. Plus
				<strong class="bg-accent/20 font-normal">ProtonVPN has a free option</strong> which
				is probably what I would use if I needed a free VPN - which I can't recommend unless
				you know what you're doing.
			</li>
		</ul>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Little to no ads</strong> - many websites you used to see ads on will have
				0 ads. News portals, google search, youtube, reddit, facebook - just name it.
			</li>
			<li>
				<strong>Reduced ads accuracy</strong>. If you care about your privacy, that's
				good. Cause your favorite platforms will have less access to the information about
				what you're doing on the other websites (and right now they probably know a lot)
				and will be able to affect you to the lesser extent. Without more advanced steps
				you're still a target, but instead of "hitting the bullseye", it's just "hitting a
				bull" now.
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
			There are many different good options for everyone. Changing the browser is not that
			hard physically as it is mentally.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://brave.com/"
					class="text-link"
					target="_blank"
				>
					<strong>Brave</strong>
				</a>
				- the first browser I'm going to recommend simply because
				<strong class="bg-accent/20 font-normal"
					>it looks and works very similar to Chrome or Edge, but does it better in terms
					or privacy and ad protection</strong
				>. It has some crypto attached to it by default that might alert you, but worry
				not - all of it can be disabled in the settings and it will become a regular
				Chrome but better and with a native ad blocker installed by default. You can test
				it with and without uBlock Origin to see what you prefer more. I use both. Also
				uBlock Origin is going to be supported after Chrome's support will end.
			</li>
			<li>
				<a
					href="https://www.mozilla.org/en-US/firefox/"
					class="text-link"
					target="_blank"
				>
					<strong>Firefox</strong>
				</a>
				- the best browser in terms of privacy but might have some issues with user experience,
				that's why I only recommend it as a second choice. It's a whole different platform
				beneath (unlike Brave which is a browser based on Chromium with Google's code stripped
				down) - and it has both pros and cons. Don't get me wrong, I like it and use it every
				day but your experience might be different from what you're used to, and I would hate
				to see you drop the whole topic because of it.
				<strong class="bg-accent/20 font-normal"
					>Any popular Firefox-based browser would be better for privacy than almost any
					Chromium-based one</strong
				>. Also if you pick Firefox, google something like "firefox privacy settings" to
				disable a few flags here and there and make it better than by default and install
				<a
					href="https://www.mozilla.org/en-US/firefox/facebookcontainer/"
					class="text-link"
					target="_blank">a Facebook container extension</a
				> that will sandbox facebook related trackers thus limiting its power.
			</li>
			<li>
				<a
					href="https://ungoogled-software.github.io/ungoogled-chromium-binaries/"
					class="text-link"
					target="_blank"
				>
					<strong>Ungoogled Chromium</strong>
				</a>
				- is what I mainly use right now but sadly might be dropping (or stop updating - which
				I already did) soon because newer versions are not going to support extensions like
				uBlock Origin very soon. Apart from that, it's best from two worlds. It looks and works
				as regular Chrome but without google's bullshit. Though no sync and installation process
				makes it less user friendly for beginners.
			</li>
		</ul>

		<p class="my-4">
			<strong class="bg-accent/10 font-normal">
				I can't recommend any other browser that I know. Vivaldi, Opera, Edge, Yandex and
				most other popular browsers are closed source and can be a potential privacy
				threat instead of salvation. Every action you do in the internet can be monitored
				and recorded by browser - so pick wisely - pick open-source. Firefox is worth
				taking a plunge for.
			</strong>
		</p>

		<p class="text-article-subtitle">Email providers</p>

		<p class="my-4">
			Not using big popular email providers (Apple, Google, Microsoft, etc) is crucial
			because those companies make money by showing you ads. You can guess how much useful
			info about you a company can gather from analyzing your personal emails. Do they do
			it? Short answer: "Yes". Long answer: "Absolutely". So what can you do? Switch to an
			email provider that has a different business model.
		</p>

		<p class="my-4">
			There is going to be only one provider that I'll be recommending:
			<a
				href={shouldAllowAffiliateLinks
					? "https://go.getproton.me/SH1U8"
					: "https://proton.me/mail"}
				class="text-link"
				target="_blank"
			>
				<strong>Proton Mail</strong>
			</a>
			- because that's what I started using long ago and never looked back. It doesn't mean
			that there are no alternatives, it's just I think this one is the best. And with proton
			you can get the whole pack (vpn, calendar, drive, etc) for a better price.
		</p>

		<p class="my-4">
			Another thing I really like about Proton Mail and recommend to use is a
			<a
				href="https://simplelogin.io/"
				class="text-link"
				target="_blank"
			>
				<strong>Simplelogin</strong>
			</a>
			(or
			<a
				href={shouldAllowAffiliateLinks
					? "https://go.getproton.me/SH1U9"
					: "https://proton.me/pass"}
				class="text-link"
				target="_blank"
			>
				<strong>Proton Pass</strong></a
			>) extension that automatically creates email aliases. An alias is basically a dummy
			email that you generate for a specific website. It will forward emails to your main
			email, thus giving you a possibility to not expose your real personal email to the
			website. Thus endorsing not only your web privacy but also web security which is a
			whole another topic.
		</p>

		<p class="text-article-subtitle">Password managers</p>

		<p class="my-4">
			This is a complicated topic because many popular password managers had leaks at some
			point which makes this topic spicy. But since password managers do not influence
			privacy directly, but rather security I'll just mention that it's important to use
			one and some - like
			<a
				href={shouldAllowAffiliateLinks
					? "https://go.nordpass.io/SH9ZA"
					: "https://nordpass.com/"}
				class="text-link"
				target="_blank"
			>
				<strong>NordPass</strong>
			</a> - have email alias creation function as well that does increase your privacy for
			reasons I mentioned above. I am using and would recommend NordPass because I worked on
			it directly and helped to release it.
		</p>

		<p class="my-4">
			<a
				href="https://bitwarden.com/"
				class="text-link"
				target="_blank"
			>
				<strong>Bitwarden</strong>
			</a>
			is also good.
			<a
				href={shouldAllowAffiliateLinks
					? "https://go.getproton.me/SH1U9"
					: "https://proton.me/pass"}
				class="text-link"
				target="_blank"
			>
				<strong>Proton Pass</strong>
			</a>
			is decent but lacks certain features yet.
		</p>

		<p class="text-article-subtitle">Cloud drives</p>

		<p class="my-4">
			This is one of the last topics for this section and is a complex one because some
			services offer really strong privacy/encryption, but it often doesn't go very well
			with convenience and speed so be prepared to sacrifice some bits here.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://mega.io/storage"
					class="text-link"
					target="_blank"
				>
					<strong>MEGA</strong>
				</a>
				- a decent combination of speed, convenience and privacy for pictures and regular stuff.
				I would not advise to store there important docs, information, private pictures without
				encrypting them first. But it's a general advise -
				<strong class="bg-accent/20 font-normal"
					>if you're storing something private - encrypt (archive with password) it first,
					store password in a password manager and then upload to any cloud storage</strong
				> This way it's 100% safe even if someone or something can access your data.
			</li>
			<li>
				<a
					href={shouldAllowAffiliateLinks
						? "https://go.getproton.me/SH1U6"
						: "https://proton.me/drive"}
					class="text-link"
					target="_blank"
				>
					<strong>Proton Drive</strong>
				</a> - not the most convenient from a user experience point of view service, but has
				much more trust from me in relation to docs and private data.
			</li>
		</ul>

		<p class="my-4">
			I'm not mentioning self-hosted open-source solutions here because while they are the
			best, you have to have advanced knowledge about it and let's be honest, not many of
			us taking it that seriously. Plus it's more of a security topic again.
		</p>

		<p class="my-4">
			<strong class="bg-accent/10 font-normal">
				Storing not encrypted "raw" files like pictures and documents on google drive or
				any other popular free platform will give access to scripts and parsers to gather
				more information about you so they can sell it later. Thus making money on what
				you thought was private.
			</strong>
		</p>

		<p class="text-article-subtitle">Messengers</p>

		<p class="my-4">
			If you read it this far, you should understand by now that your "private" messages
			are even a better source of information that helps companies to track your
			interests. Direct messages on platforms like Instagram or Facebook are a gold mine
			for those companies knowledge base about you. And you shouldn't ideally ever send
			any personal information there.
		</p>

		<p class="my-4">However there are a few problems with this topic:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Limited reach</strong> - sometimes it's not possible to reach a person or business
				in any other way. Then you kinda don't have any options, do you? What to do? Use, but
				be smart about it. And never share any sensitive info (bank card numbers, ID details,
				etc), which brings us to another problem.
			</li>
			<li>
				<strong>Security</strong> - you can check all the data leaks yourself here. Chances
				are - if you're using a popular messenger tool - it has leaked in the past.
			</li>
		</ul>

		<p class="my-4">
			The visible solution is to use only encrypted and open source messengers with no
			history of leaks, but there is another problem. Who are you going to chat with? If
			you all your family and friends use WhatsApp/Viber or any other popular tool to
			communicate, you'll find it hard to persuade them to change it.
		</p>

		<p class="my-4">
			So the answer is... It's up to you, really. Is privacy worth sacrificing connections
			with people? I can't say so. But if that is an option, prefer to ask for
			<a
				href="https://signal.org/"
				class="text-link"
				target="_blank"
			>
				<strong>Signal</strong>
			</a>
			or
			<a
				href="https://telegram.org/"
				class="text-link"
				target="_blank"
			>
				<strong>Telegram</strong>
			</a> first. Those are not ideal but popular enough so you can actually find regular people
			who use it and they are better than more popular ones.
		</p>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Close to 0 ads accuracy</strong>. Because we're cutting major points of
				access to who you are and what you're doing on the web, ads will start to be
				random most of the time. It's not going to happen right away. Platforms were
				gathering info about you all those years and will still have a huge collection of
				information about you - but they will hardly collect anything else.
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
			both "stuff" and "crazy")! We will discuss ways to remove a core of access of those
			greedy platforms to you. But at the price of rather drastic changes. Changing
			browsers is one thing, changing your OS is a completely different process requiring
			more preparation but also more effective.
		</p>

		<p class="my-4">
			Anyway, be ready to learn <a
				href="https://www.reddit.com/r/pop_os/comments/xsylu0/how_to_dual_boot_pop_os_2204_on_macbook_pro_2020/"
				class="text-link"
				target="_blank">how to install Linux on your MacBook</a
			> :)
		</p>

		<p class="text-article-subtitle">Yes, Linux</p>

		<p class="my-4">
			Linux is an OS that you can install (or pay someone to do so, sometimes even buy a
			PC/laptop with the system already) on your device. For simplicity I'll call it a set
			of different Operation Systems based on the same core technology. Those variants are
			called "distros" or "distributions" and there are many of them - all pursuing
			different goals. I'm going to recommend 2 of them which I've used most and which are
			the simplest to live with.
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://ubuntu.com/"
					class="text-link"
					target="_blank"
				>
					<strong>Ubuntu</strong></a
				>. Conventionally one of the best beginners distros there are and for a reason:
				<strong class="bg-accent/20 font-normal">it's easy to get used to it</strong> after
				Microsoft or Apple OSs. There is not much special about it: you'll be able to do the
				same things you do now, like: use the same browser to do whatever it is you do in your
				browser, use Steam to play games, watch movies - as far as I'm concerned it's what
				majority of us do most of the time.
			</li>
			<li>
				<a
					href="https://system76.com/pop/"
					class="text-link"
					target="_blank"
				>
					<strong>Pop OS!</strong></a
				>. Very similar to Ubuntu but a bit more customisable and beautiful by default
				with a nice community of people who are ready to help each other. Ubuntu has a
				bigger knowledge base but PopOS is based on Ubuntu so most of the stuff will be
				exactly the same.
			</li>
		</ul>

		<p class="my-4">Before you try, you should know about downsides:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>No support for some programs</strong>. If you use some programs a lot and
				can't live without them, check (by googling: "does Ubuntu supports [insert my
				program]") if Linux supports it. One example would be Photoshop which can't be
				simply run on Linux. Though who cares about it nowadays when you can do everything
				from your browser.
				<strong class="bg-accent/20 font-normal"
					>Also almost any program will have an open-source and private alternative</strong
				>. Though not that fancy and polished of course. Most popular ones are very
				decent, like LibreOffice for example.
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
				You don't need an antivirus to run all the time, thus increasing the performance
				even more.
			</li>
			<li>
				<strong>It's free and open-source</strong>. Just like PopUpOFF! Well, maybe
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
			of knowledge. Life is complex and simple the same time.
			<strong class="bg-accent/20 font-normal"
				>Everything needs balance, including effort, time spent, energy.</strong
			>
		</p>

		<p class="my-4">
			I accept consequences of lack of privacy at this point in my life. I don't want a
			custom ROM on my phone because I barely use it. I don't need to sandbox my
			apps/browsers/tabs because I'm not using any social networks at all. I've got one
			entire browser dedicated to google/facebook services I have to use and trust Firefox
			with <a
				href="https://www.mozilla.org/en-US/firefox/facebookcontainer/"
				class="text-link"
				target="_blank">a sandboxing extension</a
			> to do that heavy lifting. I use a dedicated Brave browser for my work profiles with
			work google account signed in. And I use everything else in a third browser.
		</p>

		<p class="my-4">
			On my android phone I'm not signed in into anything and have all the google services
			disabled. I wanted to do a custom ROM on my pixel for a long time but never really
			got to the point where I felt I needed it. So I guess that's as far as I go, but the
			path doesn't end here if you care to stick a bit longer.
		</p>

		<p class="my-4">
			Sure, I'd have liked a more private way to store pictures but the hardest part if
			making your family use it. And without family why would I need a cloud hosting for
			pictures in the first place? So there is always a compromise and balance. <strong
				class="bg-accent/20 font-normal"
				>Remember that while privacy is important, relationships with your family are
				superior. Don't be angry or spoil relationships because someone refuses to care
				about privacy as much as you do.</strong
			>
		</p>

		<p class="text-article-subtitle">Custom phone ROMs</p>

		<p class="my-4">
			You'd need to have an Android phone as it can be configured better for privacy even
			without ROMs. There are basically only 2 names I trust here:
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://grapheneos.org/"
					class="text-link"
					target="_blank"
				>
					<strong>GrapheneOS</strong></a
				>. Only supports Google Pixel phones. As of now
				<strong class="bg-accent/20 font-normal"
					>it's considered superior to anything else you could get on the phone</strong
				>. Allows you to sandbox apps so you can safely have Instagram and whatnot
				installed on your phone and "wrap it in a box", so while the app thinks it has its
				usual access to everything on your phone (pictures, contacts, etc), it will have
				zero access to anything.
			</li>
			<li>
				<a
					href="https://lineageos.org/"
					class="text-link"
					target="_blank"
				>
					<strong>LineageOS</strong></a
				>. Supports many more devices, should be good generally - but as a privacy person,
				I'd get Pixel and install GrapheneOS instead.
			</li>
			<li>
				<a
					href="https://itsfoss.com/open-source-alternatives-android/"
					class="text-link"
					target="_blank"><strong>Any Linux based OS</strong></a
				>. Privacy: 10/10. Usability: you won't like it. Fun to try on the older phone,
				but that's about it.
			</li>
		</ul>

		<p class="text-article-subtitle">Doors opened by Linux</p>

		<p class="my-4">
			Now that you're a master of Linux, you can redo most of the stuff from previous
			sections but in a more private way. <a
				href="https://openvpn.net/"
				class="text-link"
				target="_blank"><strong>OpenVPN</strong></a
			>
			for VPN on your own server.
			<a
				href="https://nextcloud.com/"
				class="text-link"
				target="_blank"><strong>Nextcloud</strong></a
			>
			for cloud storage.
			<a
				href="https://www.passbolt.com/"
				class="text-link"
				target="_blank"><strong>Passbolt</strong></a
			>
			for password manager. Do you have to? Sometimes, but not really, though for sure you
			can and it might fit your goals better. Plus you would need to master web security to
			make sure it's all secure.
		</p>

		<p class="text-article-subtitle">Going offline</p>

		<p class="my-4">
			<a
				href="https://www.libreoffice.org/"
				class="text-link"
				target="_blank"><strong>LibreOffice</strong></a
			>
			package instead of Google/Microsoft docs on Linux. In rare situations where you need
			something to be hosted and edited online - for example sharing or collaborating with
			other people - you can use encrypted services like
			<a
				href="https://cryptpad.org/"
				class="text-link"
				target="_blank"><strong>CryptPad</strong></a
			>. No one except for you is likely to enjoy it, but that's the price for privacy.
			Saving your data on encrypted hard drives is much more private by default,
			especially with encryption.
			<a
				href="https://veracrypt.eu/en/"
				class="text-link"
				target="_blank"><strong>VeraCrypt</strong></a
			> is a default choice that.
		</p>

		<p class="my-4">
			As you can see it all comes with a price of convenience. You can't show your
			vacation pictures from your phone any time anymore because you have your hard drive
			hidden at home. And if you lose/forget your password, all data will be gone.
		</p>

		<p class="text-article-subtitle">Care more about tools you use</p>

		<p class="my-4">
			Like that <strong>Privacy Badger</strong> that I mentioned. It doesn't have downsides
			for beginners, but it might participate in leaving your digital footprint which is not
			what you want to have at this point.
		</p>

		<p class="my-4">
			By now you should understand how privacy "works". Almost anything that you use: <a
				href="https://www.consumerreports.org/electronics/privacy/smart-appliances-and-privacy-a1186358482/"
				class="text-link"
				target="_blank"
				>smart speaker/clock, robot vacuum, doorbell camera, TV, game console, smart
				fridge</a
			>,
			<a
				href="https://foundation.mozilla.org/en/blog/privacy-nightmare-on-wheels-every-car-brand-reviewed-by-mozilla-including-ford-volkswagen-and-toyota-flunks-privacy-test/"
				class="text-link"
				target="_blank">car</a
			>
			- everything that has access to your information can be collecting it. And since "it"
			has your data anyway, its company might as well sell it since the majority of users wouldn't
			care about it anyway. Besides it also possesses a huge
			<a
				href="https://www.housebeautiful.com/lifestyle/a62455472/dangers-risks-of-using-smart-appliances-devices/"
				class="text-link"
				target="_blank">security risk</a
			>.
		</p>

		<p class="my-4">
			<strong class="bg-accent/20 font-normal"
				>Research everything you use. Most of privacy-friendly tools are likely to be
				open-source, but it doesn't guarantee</strong
			>
			it's going to respect your privacy just yet. For example <strong>Brave</strong> had
			<a
				href="https://www.tomsguide.com/news/brave-affiliate-links-autocomplete"
				class="text-link"
				target="_blank">an occasion</a
			> with affiliate links for some services - even though it is open-source.
		</p>

		<p class="text-article-subtitle">Results</p>

		<p class="my-4">If you follow those recommendations you can expect:</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<strong>Fun</strong> if you're into it.
			</li>
			<li>
				<strong>Stink eyes</strong> from people you're talking to about everyday things like
				posting pictures in social networks.
			</li>
			<li>
				Probably even stronger <strong>web security</strong>. I'm saying probably because
				you need some knowledge in that area to make things better than companies, but
				again, don't overestimate companies. There is no need to even hack someone, on
				many occasions employees are just not careful enough that they
				<a
					href="https://gizmodo.com/chatgpt-ai-samsung-employees-leak-data-1850307376"
					class="text-link"
					target="_blank">can leak sensitive info</a
				> by themselves. Plus again, just having Linux on your device will protect you much
				better than Microsoft ever.
			</li>
			<li>
				<strong>To have a rare opportunity to be invisible</strong> in the internet. Like that
				special agent in a movie who was thought to be dead 30 years but is still alive and
				now is going for revenge. Except in the internet instead. And no revenge. And no one
				generally cares.
			</li>
		</ul>

		<h2 class="text-article-title">Above and beyond</h2>

		<p class="my-4">
			For any regular person there is no need in this. But of course there are ways to
			make everything even crazier - as always. There are self-destroying emails and
			messages, burner phones and apps, proxies and many, many, many other options to
			eliminate all ways to be traced but nothing there is actually of any interest to a
			regular person simply because convenience goes down into a negative field and pretty
			far.
		</p>

		<p class="my-4">
			There are some less important (imo) things that I didn't cover, like health
			trackers, translators, etc etc - which all contribute to your footprints, and if
			you're using any tool pretty often, you can always find a better alternative for it
			just by googling. I however will leave some pointers to other resources which you
			can gain more knowledge from:
		</p>

		<ul class="list-disc pl-4 my-8 space-y-2">
			<li>
				<a
					href="https://www.privacyguides.org/en/tools/"
					class="text-link"
					target="_blank"><strong>privacyguides.org</strong></a
				> - great collection of resources.
			</li>
			<li>
				<a
					href="https://www.privacytools.io/"
					class="text-link"
					target="_blank"><strong>privacytools.io</strong></a
				> - another great collection.
			</li>
			<li>
				<a
					href="https://www.reddit.com/r/privacy/top/?t=all"
					class="text-link"
					target="_blank"><strong>r/privacy</strong></a
				> - subreddit with answers to all the questions you can imagine.
			</li>
			<li>
				<a
					href="https://nomoregoogle.com/"
					class="text-link"
					target="_blank"><strong>nomoregoogle.com</strong></a
				> - google alternatives.
			</li>
			<li>
				<a
					href="https://www.reddit.com/r/degoogle/top/?t=all"
					class="text-link"
					target="_blank"><strong>r/degoogle</strong></a
				> - subreddit dedicated to "degoogling".
			</li>
		</ul>

		<p class="my-4 mb-16">
			Hope it was an interesting and useful read, took me some time to write and edit. Let
			me know if you'd like to read my view on <strong>web security</strong>. Have a more
			private life now, bye!
		</p>

		<div class="text-center">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</article>
</main>
