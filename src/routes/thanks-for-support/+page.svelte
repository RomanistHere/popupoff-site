<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import SEO from "$lib/components/SEO.svelte";
	import { onMount } from "svelte";

	// state: null | "loading" | "success" | "fail"
	let state = null;

	const reSubmitOnce = async data => {
		try {
			const resp = await fetch("/api/donation/comment/submit", {
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
			if (key === "message" && value.length < 9) {
				// eslint-disable-next-line no-alert
				alert("Message is too small to send. It'll get lost.");
				return;
			}
		}

		try {
			state = "loading";
			const resp = await fetch("/api/donation/comment/submit", {
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

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const amount = urlParams.get("amount"); // "single" || "multi"
		const term = urlParams.get("term"); // number or undefined
		window.history.replaceState(null, "", window.location.pathname);
	});
</script>

<SEO
	title="Thank you!"
	description="null"
/>

<section class="min-h-screen py-12 bg-bright flex justify-center items-center text-dark">
	<div class="relative max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Thank you for your support!</h1>

		<p class="text-basic italic mb-2">
			I can't emphasize it enough how much I appreciate it!
		</p>
		<p class="text-basic italic mb-2 text-white bg-dark inline-block mx-auto px-2">
			If it weren't for people like you I would have given up ages ago.
		</p>
		<p class="text-basic italic mb-12">If you want, add a comment to your donation.</p>

		{#if state === "success"}
			<p class="text-basic">Thank you! I'll get to your message ASAP.</p>
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
					title="Completely optional comment"
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

		<div class="text-center absolute -bottom-16 left-1/2 -translate-x-1/2">
			<a
				href="/"
				class="text-link text-lg inline-block px-2">← Go to main page</a
			>
		</div>
	</div>
</section>
