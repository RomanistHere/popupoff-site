<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import SEO from "$lib/components/SEO.svelte";

	// state: null | "loading" | "success" | "fail"
	let state = null;
	let typingStarted = false;
	let isCheckboxChecked = false;

	const checkboxChanged = () => {
		isCheckboxChecked = true;
	};

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		let noKeys = true;

		for (const [key, value] of data.entries()) {
			noKeys = false;
		}

		if (noKeys) {
			// eslint-disable-next-line no-alert
			alert("Can't send feedback without the reason.");
			return;
		}

		try {
			state = "loading";
			const resp = await fetch("/api/delete/submit", {
				method: "POST",
				body: data,
			});

			const { error } = await resp.json();

			if (!error) {
				state = "success";
			} else {
				state = "fail";
			}
		} catch (e) {
			state = "fail";
		}
	};
</script>

<SEO
	title="PopUpOFF | Share your feedback"
	description="Tell us why do you uninstall the extension."
/>

<section class="min-h-screen py-12 bg-bright flex justify-center items-center text-dark">
	<div class="relative max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Thank you for using my extension!</h1>

		<p class="text-basic italic mb-2">
			While you were using PopUpOFF, you’ve been making the world of web a little bit
			better.
		</p>
		<p class="text-basic italic mb-2">I appreciate you gave it a try.</p>
		<p class="text-basic italic mb-12">
			If I wanted to make the extension better, what would I need to focus on from your
			point of view?
		</p>

		{#if state === "success"}
			<p class="text-basic bg-dark text-accent inline-block mx-auto">Thank you for sharing. I'll get to your message ASAP.</p>
		{:else if state === "fail"}
			<p class="text-basic">Something went wrong, please try again later.</p>
		{:else}
			<form
				method="POST"
				use:enhance={enhanceCallback}
				class="max-w-md mx-auto relative"
				class:opacity-0={state === "success" || state === "fail"}
				class:absolute={state === "success" || state === "fail"}
			>
				<div
					class="mb-12 text-xl"
					class:opacity-0={isCheckboxChecked}
					class:pointer-events-none={isCheckboxChecked}
					class:absolute={isCheckboxChecked}
				>
					<label class="py-3 flex items-start justify-center">
						<input type="checkbox" on:change={checkboxChanged} class="accent-accent w-6 h-6 mr-2" name="doesntBlock">
						It doesn't block what it should
					</label>
					<label class="py-3 flex items-start justify-center">
						<input type="checkbox" on:change={checkboxChanged} class="accent-accent w-6 h-6 mr-2" name="blocksTooMuch">
						It blocks what it shouldn't
					</label>
					<label class="py-3 flex items-start justify-center">
						<input type="checkbox" on:change={checkboxChanged} class="accent-accent w-6 h-6 mr-2" name="looks">
						I don't like how it looks
					</label>
					<label class="py-3 flex items-start justify-center">
						<input type="checkbox" on:change={checkboxChanged} class="accent-accent w-6 h-6 mr-2" name="errors">
						It doesn't work (errors, freezes, etc)
					</label>
					<label class="py-3 flex items-start justify-center">
						<input type="checkbox" on:change={checkboxChanged} class="accent-accent w-6 h-6 mr-2" name="other">
						Something else
					</label>
				</div>

				{#if isCheckboxChecked}
					<Textarea
						title="Share your thoughts"
						id="getInTouchMessage"
						placeholder="What did you like, what did you not like and how could it be fixed?"
						name="message"
						maxlength={1024}
						on:input={() => { typingStarted = true }}
					/>

					<div
						class="max-h-0 transition-all duration-1000 opacity-0 pointer-events-none"
						class:max-h-64={typingStarted}
						class:opacity-100={typingStarted}
						class:pointer-events-auto={typingStarted}
					>
						<Input
							title="Expect a reply? Leave email!"
							id="getInTouchEmail"
							type="email"
							name="email"
							maxlength={96}
						/>
					</div>
				{/if}

				<PrimaryButton
					title="Submit"
					class="px-12"
					disabled={state === "loading"}
				/>

				{#if state === "loading"}
					<Spinner />
				{/if}
			</form>
		{/if}

		<a
			href="/"
			class="underline text-lg block absolute -bottom-16 left-1/2 -translate-x-1/2"
			>← Go to main page</a
		>
	</div>
</section>
