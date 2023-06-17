<script>
	let customClass = "";
	export { customClass as class };

	export let size = "24";
	export let color = "currentColor";
	export let ariaLabel = "play";
	export let isStroked = true;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
	width={size}
	height={size}
	fill={color}
	class={customClass}
	aria-label={ariaLabel}
	viewBox="0 0 384 512"
>
	<path
		stroke={isStroked ? "#EFBB35" : undefined}
		stroke-width={isStroked ? "20" : undefined}
		d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
	/>
</svg>
