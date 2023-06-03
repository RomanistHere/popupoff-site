<script>
	export let title = "PopUpOFF - Popup and overlay blocker";
	export let description =
		// eslint-disable-next-line max-len
		"Non-commercial and open-source browser extension. Removes popups, overlays, cookie and 'please, disable adBlock' notifications. Made for people, not profit.";
	export let image;
</script>

<svelte:head>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta
		name="format-detection"
		content="telephone=no"
	/>
	<link
		rel="me"
		href="mailto:romanisthere@pm.me"
	/>

	<meta
		name="description"
		content={description}
	/>
	<!--	<meta name="keywords" content={keywords} />-->
	<!--	<meta name="subject" content={subject} />-->

	<title>{title}</title>

	<meta
		property="og:site_name"
		content="melme"
	/>
	<meta
		property="og:locale"
		content="en"
	/>
	<!--	<meta property="og:url" content={url} />-->
	<meta
		property="og:type"
		content="website"
	/>
	<meta
		property="og:title"
		content={title}
	/>
	<meta
		property="og:description"
		content={description}
	/>
	<!--{#if image}-->
	<!--	<meta-->
	<!--		property="og:image"-->
	<!--		content={image}-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:width"-->
	<!--		content="1200"-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:height"-->
	<!--		content="627"-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:alt"-->
	<!--		content="image preview"-->
	<!--	/>-->
	<!--{:else}-->
	<!--	<meta-->
	<!--		property="og:image"-->
	<!--		content="https://melme.io/logo-192x192.png"-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:width"-->
	<!--		content="400"-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:height"-->
	<!--		content="400"-->
	<!--	/>-->
	<!--	<meta-->
	<!--		property="og:image:alt"-->
	<!--		content="melme logo"-->
	<!--	/>-->
	<!--{/if}-->

	<meta
		name="twitter:card"
		content={image ? "summary_large_image" : "summary"}
	/>

	<meta
		name="twitter:creator"
		content={"@RomanistHere"}
	/>
	<meta
		name="twitter:site"
		content={"@RomanistHere"}
	/>
	<!--{#if image}-->
	<!--	<meta-->
	<!--		name="twitter:image"-->
	<!--		content={image}-->
	<!--	/>-->
	<!--{:else}-->
	<!--	<meta-->
	<!--		name="twitter:image"-->
	<!--		content="https://melme.io/logo-192x192.png"-->
	<!--	/>-->
	<!--{/if}-->
</svelte:head>
