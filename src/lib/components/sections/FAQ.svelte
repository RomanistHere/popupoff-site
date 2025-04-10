<script>
	import AnswerFAQ from "$lib/components/AnswerFAQ.svelte";

	const initState = {
		first: false,
		second: false,
		third: false,
		fourth: false,
		fifth: false,
		sixth: false,
		seventh: false,
		eighth: false,
		ninth: false,
		tenth: false,
		eleventh: false,
	};

	let state = { ...initState };

	const showAnswer = prop => {
		if (state[prop]) {
			state = { ...initState };
			return;
		}

		state = {
			...initState,
			[prop]: true,
		};
	};
</script>

<p id="faq" />

<section class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">FAQ</h1>
		<ul class="text-basic">
			<AnswerFAQ
				title="Can I stop/disable PopUpOFF on certain websites?"
				handleClick={() => {
					showAnswer("first");
				}}
				shouldShow={state.first}
				isShouldShowSeparator={false}
			>
				<p class="block mb-4">
					Yes, you can. <span class="bg-accent">
						Open the website, click on icon of the extension and choose “Dormant”
					</span>
					mode.
				</p>
				<p class="block mb-4">
					<span class="bg-accent">Your choice will be remembered</span>
					and from now on PopUpOFF will not work on this site unless you decide to change your
					mind and choose another mode.
				</p>
				<p class="block mb-4">
					Then <a
						href="/submit-issue"
						class="underline">submit</a
					>
					it to our <span class="bg-accent">database of known issues</span>
					, so we know about the issue and can fix it.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Extension removes parts of the site I need, what do I do?"
				handleClick={() => {
					showAnswer("second");
				}}
				shouldShow={state.second}
			>
				<p class="block mb-4">
					You can disable PopUpOFF on the certain websites.
					<span class="bg-accent">
						Open the website, click on icon of the extension and choose “Dormant”
					</span>
					mode.
				</p>
				<p class="block mb-4">
					<span class="bg-accent">Your choice will be remembered</span>
					and from now on PopUpOFF will not work on this site unless you decide to change your
					mind and choose another mode.
				</p>
				<p class="block mb-4">
					Then <a
						href="/submit-issue"
						class="underline">submit</a
					>
					it to our <span class="bg-accent">database of known issues</span>
					, so we know about the issue and can fix it.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="I’m switching the browser, can I export/import data?"
				handleClick={() => {
					showAnswer("third");
				}}
				shouldShow={state.third}
			>
				<p class="block mb-4">Yep, you can find export/import on the settings page.</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="So, does PopUpOFF block trackers? What about privacy?"
				handleClick={() => {
					showAnswer("fourth");
				}}
				shouldShow={state.fourth}
			>
				<p class="block mb-4">
					PopUpOFF <span class="bg-accent">does not block trackers</span>
					, cookies or any other privacy related scripts. Its only goal is to remove overlays.
					<a
						href="/privacy-guide"
						class="underline">Learn more about privacy</a
					>
				</p>
				<p class="block mb-4">
					We recommend to <span class="bg-accent">
						use it together with uBlock Origin and Privacy Badger
					</span>
					extensions on Firefox / Ungoogled Chromium / Brave for decreasing ads concentration
					and privacy matters.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Is there a keyboard shortcut available?"
				handleClick={() => {
					showAnswer("fifth");
				}}
				shouldShow={state.fifth}
			>
				<p class="block mb-4">Certainly is. Configured in settings.</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Website doesn't work, what to do? Help me fix."
				handleClick={() => {
					showAnswer("sixth");
				}}
				shouldShow={state.sixth}
			>
				<p class="block mb-4">
					First, <span class="bg-accent">disable PopUpOFF</span>
					. Open the website, click on icon of the extension and choose “Dormant” mode.
				</p>
				<p class="block mb-4">
					<span class="bg-accent">Your choice will be remembered</span>
					and from now on PopUpOFF will not work on this site unless you decide to change your
					mind and choose another mode.
				</p>
				<p class="block mb-4">
					Then <a
						href="/submit-issue"
						class="underline">submit</a
					>
					it to our <span class="bg-accent">database of known issues</span>
					, so we know about the issue and can fix it.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="I’m still seeing popups and overlays, why doesn't it work?"
				handleClick={() => {
					showAnswer("seventh");
				}}
				shouldShow={state.seventh}
			>
				<p class="block mb-4">
					First, check that PopUpOFF is working. Open the website and click on the
					extension icon. If the current mode (marked with green arrow) is "Dormant", pick
					"Moderate" or "Aggressive".
				</p>
				<p class="block mb-4">
					If the current mode is "Moderate", try "Aggressive", for it has more power to
					fight overlays.
				</p>
				<p class="block mb-4">
					If popups are not removed on "Aggressive" mode, <span class="bg-accent">
						submit it to our database of known issues
					</span>
					, so we know about the issue and can fix it.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Is PopUpOFF free? If so, what’s the business model behind?"
				handleClick={() => {
					showAnswer("eighth");
				}}
				shouldShow={state.eighth}
			>
				<p class="block mb-4">
					<span class="bg-accent">It is completely free</span>
					. We don't have a "business" model for we are not a business. We have a "help-people"
					model instead
					<span class="not-italic">😁</span>
				</p>
				<p class="block mb-4">
					<a
						href="#donate"
						class="underline">We accept donations</a
					> from people who appreciate the time and stress PopUpOFF saved them. Consider supporting!
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Do you sell my information? How do I trust you?"
				handleClick={() => {
					showAnswer("ninth");
				}}
				shouldShow={state.ninth}
			>
				<p class="block mb-4">
					Nah, <span class="bg-accent">we don't sell or even collect anything</span>
					really. Both
					<span class="bg-accent">
						PopUpOFF and this site are
						<a
							href="https://github.com/RomanistHere/"
							class="underline"
							target="_blank"
							rel="noreferrer">open source</a
						>
					</span>
					, so you're free to check if we collect anything yourself. And without collecting
					we can't really sell anything, can we? Proof enough.
					<a
						href="/privacy-guide"
						class="underline">We are actually protecting your privacy</a
					>.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="I’m still seeing context ads on the page, why?"
				handleClick={() => {
					showAnswer("tenth");
				}}
				shouldShow={state.tenth}
			>
				<p class="block mb-4">
					<span class="bg-accent">PopUpOFF does not remove context ads</span>
					. Nor does it have a goal to.
				</p>
				<p class="block mb-4">
					Pair it with already existing solutions like uBlock Origin or Brave browser to
					achieve adless.
				</p>
			</AnswerFAQ>

			<AnswerFAQ
				title="Can I use PopUpOFF on a mobile phone?"
				handleClick={() => {
					showAnswer("eleventh");
				}}
				shouldShow={state.eleventh}
			>
				<p class="block mb-4">
					If you're using <span class="bg-accent">Firefox on your phone</span>, you can.
					We are researching other options as well. Stay in touch!
				</p>
			</AnswerFAQ>
		</ul>
	</div>
</section>
