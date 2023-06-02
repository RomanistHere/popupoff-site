<script>
	import { enhance } from "$app/forms";

	import Input from "$lib/components/Input.svelte";
	import Textarea from "$lib/components/Textarea.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";

	const enhanceCallback = async ({ data, cancel }) => {
		cancel();

		console.log(data);

		const resp = await fetch("/api/intouch/submit", {
			method: "POST",
			body: data,
		});

		const { success } = await resp.json();

		if (!success) {
			// eslint-disable-next-line no-alert
			alert("Something went wrong!");
		}
	};
</script>

<section class="min-h-screen bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title leading-[4.2rem]">Get in touch</h1>

		<form
			method="POST"
			use:enhance={enhanceCallback}
			class="max-w-md mx-auto"
		>
			<Textarea
				title="Your message (required)"
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
				class="px-20"
			/>
		</form>
	</div>
</section>
