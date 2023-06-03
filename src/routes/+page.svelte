<script>
	import Main from "$lib/components/sections/Main.svelte";
	import Slogan from "$lib/components/sections/Slogan.svelte";
	import Aggressive from "$lib/components/sections/Aggressive.svelte";
	import Moderate from "$lib/components/sections/Moderate.svelte";
	import Antipaid from "$lib/components/sections/Antipaid.svelte";
	import Points from "$lib/components/sections/Points.svelte";
	import Video from "$lib/components/sections/Video.svelte";
	import FAQ from "$lib/components/sections/FAQ.svelte";
	import Support from "$lib/components/sections/Support.svelte";
	import GetInTouch from "$lib/components/sections/GetInTouch.svelte";
	import Footer from "$lib/components/sections/Footer.svelte";

	import ScrollHandler from "$lib/components/ScrollHandler.svelte";
	import Header from "$lib/components/Header.svelte";

	import { isBgDark } from "$lib/stores/index.js";

	const updateBodyClass = isDark => {
		if (typeof document === "undefined") return;

		if (isDark) {
			document.body.classList.remove("bg-bright", "text-dark");
			document.body.classList.add("bg-dark", "text-bright");
		} else {
			document.body.classList.add("bg-bright", "text-dark");
			document.body.classList.remove("bg-dark", "text-bright");
		}
	};

	$: updateBodyClass($isBgDark);
</script>

<Header />
<ScrollHandler />

<Main />
<Slogan />
<Aggressive />
<Moderate />
<Antipaid />
<Points />
<Video />
<FAQ />
<Support />
<GetInTouch />
<Footer />
