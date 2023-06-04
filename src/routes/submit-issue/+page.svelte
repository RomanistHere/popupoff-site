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
	title="PopUpOFF | Submit your issue"
	description="Update the database of known issues to get help on the sites you like."
/>

<section class="min-h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Submit your issue</h1>

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
					title="Your issue"
					id="getInTouchMessage"
					placeholder="Link to a website with a little description"
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
