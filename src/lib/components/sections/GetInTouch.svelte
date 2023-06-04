<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";

	let state = null;

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		const resp = await fetch("/api/intouch/submit", {
			method: "POST",
			body: data,
		});

		const { success } = await resp.json();

		if (success) {
			state = "success";
		} else {
			state = "fail";
		}
	};
</script>

<p id="getintouch" />

<section class="min-h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Get in touch</h1>

		{#if state === "success"}
			<p class="text-basic">
				Thank you for contacting. We'll do our best to reply ASAP.
			</p>
		{:else if state === "fail"}
			<p class="text-basic">
				Something went wrong, please try again later.
			</p>
		{:else}
			<form
				method="POST"
				use:enhance={enhanceCallback}
				class="max-w-md mx-auto"
				class:opacity-0={state}
				class:absolute={state}
			>
				<Textarea
					title="Your message"
					id="getInTouchMessage"
					placeholder="You send a complaint, suggest a feature or just say hi, you'll be welcome nevertheless!"
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
				/>
			</form>
		{/if}
	</div>
</section>
