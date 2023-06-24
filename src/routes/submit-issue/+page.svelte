<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import SEO from "$lib/components/SEO.svelte";
	import FAQ from "$lib/components/sections/FAQ.svelte";

	// state: null | "loading" | "success" | "fail"
	let state = null;
	let typingStarted = false;

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		for (const [key, value] of data.entries()) {
			if (key === "description" && value.length < 9) {
				// eslint-disable-next-line no-alert
				alert("Provide some description to report the issue.");
				return;
			} else if (key === "link" && value.length < 9) {
				// eslint-disable-next-line no-alert
				alert("'Where happens' field cannot be this short.");
				return;
			}
		}

		try {
			state = "loading";
			const resp = await fetch("/api/report/submit", {
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
	<div class="relative max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Report issue</h1>

		{#if state === "success"}
			<p class="text-basic">Thank you for sharing. We've got it!</p>
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
				<Input
					title="Where happens"
					placeholder="Paste a link from the browser"
					id="issueLink"
					type="text"
					name="link"
					maxlength={256}
				/>

				<Textarea
					title="What happens"
					id="issueDescription"
					placeholder="Describe briefly, write steps how to reproduce"
					name="description"
					maxlength={1024}
					on:input={() => {
						typingStarted = true;
					}}
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

		<div class="text-center absolute -bottom-16 left-1/2 -translate-x-1/2">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</div>
</section>

<FAQ />
