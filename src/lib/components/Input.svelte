<script>
	export let title;
	export let type;
	export let id;
	export let value = "";
	export let name;
	export let isInputValid = true;
	export let autofocus = false;
	export let maxlength = null;
	export let placeholder;

	let isInputActive = false;

	let ref;

	export const focus = () => {
		ref?.focus();
	};

	const validateEmail = email =>
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

	const onBlur = e => {
		isInputValid = true;
		isInputActive = false;
		value = e.currentTarget.value;

		if (type === "email") {
			value = value.toLowerCase();
			isInputValid = validateEmail(value);
		}
	};

	const onInput = e => {
		isInputValid = false;
		isInputActive = true;
		value = e.currentTarget.value;
	};

	$: isError = !isInputValid && !isInputActive;
</script>

<div class="relative mb-8">
	<label
		for={id}
		class="mt-4 relative block text-2xl"
	>
		<span>{title}</span>
	</label>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="mt-4 py-2 px-4 text-lg w-full rounded-3xl border-2 border-dark focus:outline-0 transition-colors focus:border-accent duration-100"
		class:border-red-500={isError}
		{type}
		{name}
		{id}
		autocomplete={id}
		on:blur={onBlur}
		on:input={onInput}
		bind:this={ref}
		{autofocus}
		{maxlength}
		{placeholder}
	/>

	<span
		class="w-3 h-3 rounded-full absolute -left-6 -md:-left-4 top-16 opacity-0 bg-accent transition-opacity duration-200 delay-100"
		class:opacity-100={isError}
		class:bg-red-500={isError}
	/>
	<span
		class="w-3 h-3 rounded-full absolute -right-6 -md:-right-4 top-16 opacity-0 bg-accent transition-opacity duration-200 delay-100"
		class:opacity-100={isError}
		class:bg-red-500={isError}
	/>

	<span class="absolute right-0 -bottom-6 text-sm">
		{#if !isInputValid && !isInputActive}
			{#if type === "email"}
				Wrong email format
			{/if}
		{/if}
	</span>
</div>

<style>
	input:focus + span {
		opacity: 1;
	}

	input:focus + span + span {
		opacity: 1;
	}
</style>
