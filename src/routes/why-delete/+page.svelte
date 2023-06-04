<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import SEO from "$lib/components/SEO.svelte";

	// state: null | "loading" | "success" | "fail"
	let state = null;

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		for (const [key, value] of data.entries()) {
			if (key === "message" && value.length < 9) {
				// eslint-disable-next-line no-alert
				alert("Message is too small to send. It'll get lost.");
				return;
			}
		}

		try {
			state = "loading";
			const resp = await fetch("/api/intouch/submit", {
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
			While you were using PopUpOFF, you’ve been making the world of the web a little bit
			better.
		</p>
		<p class="text-basic italic mb-2">I appreciate you gave it a try.</p>
		<p class="text-basic italic mb-12">
			If I wanted to make the extension better, what would I need to focus on from your
			point of view?
		</p>

		{#if state === "success"}
			<p class="text-basic">Thank you for sharing. I'll get to your message ASAP.</p>
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
				<Textarea
					title="Share your thoughts"
					id="getInTouchMessage"
					placeholder="What did you like, what did you not like and how could it be fixed?"
					name="message"
					maxlength={1024}
				/>

				<Input
					title="Expect a reply? Leave email!"
					id="getInTouchEmail"
					type="email"
					name="email"
					maxlength={96}
				/>

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
