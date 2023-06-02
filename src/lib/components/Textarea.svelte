<script>
	import { createEventDispatcher } from "svelte";

	export let maxlength;
	export let placeholder;
	export let title;
	export let id;
	export let name;

	let ref;
	let remainingCommentLength = maxlength;

	$: isRemainingCharsWarning = remainingCommentLength / maxlength < 0.05;

	const dispatch = createEventDispatcher();

	const handleInput = e => {
		const { value } = e.target;
		remainingCommentLength = maxlength - value.length;
		dispatch("input", value);
	};

	export const focus = () => {
		ref?.focus();
	};
</script>

<div class="relative mb-8">
	<label
		for={id}
		class="my-4 relative block text-2xl"
	>
		<span>{title}</span>
	</label>

	<textarea
		class="w-full h-40 p-4 rounded-3xl text-base border-2 border-dark focus:outline-0 transition-colors focus:border-accent duration-100"
		{placeholder}
		{maxlength}
		{id}
		{name}
		on:input={handleInput}
		bind:this={ref}
	/>

	<span
		class="w-3 h-3 rounded-full absolute -left-6 -md:-left-4 top-[4.5rem] opacity-0 bg-accent transition-opacity duration-200 delay-100"
	/>
	<span
		class="w-3 h-3 rounded-full absolute -right-6 -md:-right-4 top-[4.5rem] opacity-0 bg-accent transition-opacity duration-200 delay-100"
	/>

	<p
		class="text-right absolute right-0 -bottom-6"
		class:text-orange-400={isRemainingCharsWarning}
	>
		{remainingCommentLength}
	</p>
</div>

<style>
	textarea:focus + span {
		opacity: 1;
	}

	textarea:focus + span + span {
		opacity: 1;
	}
</style>
