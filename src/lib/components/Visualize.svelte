<script>
	import { onMount } from "svelte";

	import AnimatedText from "$lib/components/AnimatedText.svelte";

	export let state = { cleanedArea: 0, numbOfItems: 0 };

	const averageScreenArea = 0.12;
	const sqMetresToFt = 10.764;
	const animationDuration = 2000;
	let isAnimating = false;

	const areaData = {
		// square metres
		1: {
			size: 0.01,
			value: "iPhone 11 Pro",
		},
		2: {
			size: 0.04,
			value: "iPad Pro",
		},
		3: {
			size: 0.18,
			value: "small bathroom mirror",
		},
		4: {
			size: 0.41,
			value: "the Mona Lisa",
		},
		5: {
			size: 2.6,
			value: "an average double bed",
		},
		6: {
			size: 11.5,
			value: "an average parking space",
		},
		7: {
			size: 40,
			value: "the largest book in the world",
		},
		8: {
			size: 67,
			value: "the largest painting at the Louvre Museum, “The Wedding Feast at Cana”",
		},
		9: {
			size: 125,
			value: "Boeing 737 wing area",
		},
		10: {
			size: 307,
			value: "world's smallest inhabited island",
		},
		11: {
			size: 1250,
			value: "olympic pool",
		},
		12: {
			size: 10625,
			value: "regular soccer field",
		},
		13: {
			size: 490000,
			value: "Vatican City",
		},
	};

	const secondsToHms = l => {
		const d = Number(l);
		const h = Math.floor(d / 3600);
		const m = Math.floor((d % 3600) / 60);
		const s = Math.floor((d % 3600) % 60);

		const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
		const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
		const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

		return hDisplay + mDisplay + sDisplay;
	};

	const setText = (ratio, key) => {
		const text = {
			less: "the size of",
			equal: "almost like the size of",
			more: "times bigger than the size of",
		};

		return key === "equal" ? text[key] : `${ratio.toFixed(1)} ${text[key]}`;
	};

	const getText = (val, size) => {
		const ratio = val / size;
		const equality =
			ratio <= 1.1 && ratio >= 0.9
				? "equal"
				: ratio < 0.9 && ratio >= 0.4
				? "less"
				: ratio > 1.1 && ratio <= 1.6
				? "more"
				: ratio <= 0.3
				? "less"
				: null;
		return equality ? setText(ratio, equality) : false;
	};

	const getArea = (val, numb = 1) => {
		try {
			const { size, value } = areaData[numb];
			const text = getText(val, size);
			return text ? `${text} ${value}` : getArea(val, numb + 1);
		} catch (e) {
			return "almost nothing";
		}
	};

	$: time = secondsToHms(state.cleanedArea * 1.32);
	$: areaInMetres = state.cleanedArea * averageScreenArea;
	$: areaInFt = state.cleanedArea * averageScreenArea * sqMetresToFt;

	onMount(() => {
		isAnimating = true;
		setTimeout(() => {
			isAnimating = false;
		}, animationDuration);
	});
</script>

<section
	class="min-h-screen py-16 px-8 bg-bright text-dark flex justify-center items-center"
>
	<main>
		<h1 class="text-title text-center">Your stats</h1>

		<ul class="text-2xl tracking-wide text-center mt-12 leading-[4.5rem]">
			<li>
				<AnimatedText
					text={state.numbOfItems}
					shouldAnimate={true}
					{animationDuration}
				/> of popups, overlays and other elements removed
			</li>
			<li>
				With a total area about
				<AnimatedText
					text={state.cleanedArea}
					shouldAnimate={true}
					{animationDuration}
				/> of your screen sizes
			</li>
			<li>
				Estimated time save is about <AnimatedText text={time ? time : "0 seconds"} />
			</li>
			<li>
				Approximate cleared area is about
				<AnimatedText
					text={areaInMetres.toFixed(1)}
					shouldAnimate={true}
					{animationDuration}
				/> square metres or <AnimatedText text={areaInFt.toFixed(1)} /> square feet
			</li>
			<li>
				Which is <AnimatedText text={getArea(areaInMetres)} />.
			</li>
		</ul>

		<p class="absolute bottom-8 right-8">No one but you can access your stats</p>
	</main>

	<div
		class="fixed inset-0 bg-dark opacity-0 pointer-events-none transition-opacity duration-1000"
		class:opacity-100={isAnimating}
	/>
</section>
