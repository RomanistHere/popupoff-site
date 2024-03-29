<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Spinner from "$lib/components/Spinner.svelte";

	// state: null | "loading" | "success" | "fail"
	let state = null;

	const reSubmitOnce = async data => {
		try {
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

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		for (const [key, value] of data.entries()) {
			if (key === "message" && value.length < 5) {
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
				await reSubmitOnce(data);
			}
		} catch (e) {
			await reSubmitOnce(data);
		}
	};
</script>

<p id="getintouch" />

<section class="min-h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Get in touch</h1>

		{#if state === "success"}
			<p class="text-basic">
				Thank you for contacting us. We'll get to your message ASAP.
			</p>
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
					title="Your message"
					id="getInTouchMessage"
					placeholder="Send a complaint, suggest a feature or just say hi, you'll be welcome in any case!"
					name="message"
					maxlength={1024}
				/>

				<Input
					title="Want a reply? Leave email!"
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
	</div>
</section>
