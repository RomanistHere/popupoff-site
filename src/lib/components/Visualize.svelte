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
			value: "a small bathroom mirror",
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
			value: "the world's smallest inhabited island",
		},
		11: {
			size: 1250,
			value: "an olympic-size swimming pool",
		},
		12: {
			size: 10625,
			value: "a football pitch (soccer field)",
		},
		13: {
			size: 490000,
			value: "holy Vatican City",
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
		const finalString = hDisplay + mDisplay + sDisplay;

		return finalString.trim().slice(-1) === ","
			? finalString.trim().slice(0, -1)
			: finalString;
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

	$: time = secondsToHms(state.cleanedArea * 0.3);
	$: areaInMetres = state.cleanedArea * averageScreenArea;
	$: areaInFt = state.cleanedArea * averageScreenArea * sqMetresToFt;

	onMount(() => {
		isAnimating = true;
		setTimeout(() => {
			isAnimating = false;
		}, animationDuration);

		/* eslint-disable max-len */
		console.log(
			`I could’ve put here some ads or I could’ve sold “anonymised” info but I just don’t value money more than people. I simply enjoy that you guys find something I created useful (sometimes even cool).

			However I’m alone on this journey, and a small $2 donation just once per month would make a whole difference in the world for this little app. I’d be able to hire a dedicated tester to find and fix bugs on your favorite websites, which would give me more opportunities to focus on improvements and new features which you would like even more.`
		);
		/* eslint-enable max-len */
	});
</script>

<section
	class="min-h-screen py-16 px-8 bg-bright text-dark flex justify-center items-center"
>
	<main>
		<ul
			class="text-2xl tracking-wide text-center leading-[3.75rem]"
			class:max-w-7xl={!getArea(areaInMetres).includes("largest painting")}
			class:max-w-5xl={getArea(areaInMetres).includes("largest painting")}
		>
			<li>
				<AnimatedText
					text={state.numbOfItems}
					shouldAnimate={true}
					{animationDuration}
				/> of popups and overlays removed
			</li>
			<li>
				With a total area about
				<AnimatedText
					text={state.cleanedArea}
					shouldAnimate={true}
					{animationDuration}
				/> of your screen sizes...
			</li>
			<li>
				...and the cleared area about
				<AnimatedText
					text={areaInMetres.toFixed(1)}
					shouldAnimate={true}
					{animationDuration}
				/> square metres or
				<AnimatedText
					text={areaInFt.toFixed(1)}
					shouldAnimate={true}
					{animationDuration}
				/>
				square feet
			</li>
			<li>
				Which is <AnimatedText text={getArea(areaInMetres)} />.
			</li>
			<li>
				While estimated time save is about <AnimatedText
					text={time ? time : "0 seconds"}
				/>
			</li>
		</ul>

		<div class="absolute bottom-8 inset-x-0 text-center text-lg">
			<a
				class="underline mt-1 italic"
				href="/#donate"
			>
				Donate.
			</a>
			<span class="opacity-80 italic"
				>It keeps the project running without ads and other nonsense.</span
			>
			<p class="italic opacity-80">
				And yeah... no one but you can access your stats. It is your right.
			</p>
		</div>

		<!--		<div class="absolute bottom-8 left-8 w-1/4">-->
		<!--			<p class="mb-2">-->
		<!--				I could’ve put here some ads or I could’ve sold “anonymised” info but I just don’t-->
		<!--				value money more than people. I simply enjoy that you guys find something I-->
		<!--				created useful (sometimes even cool).-->
		<!--			</p>-->

		<!--			<p>-->
		<!--				However I’m alone on this journey, and a small $2 donation just once per month-->
		<!--				would make a whole difference in the world for this little app. I’d be able to-->
		<!--				hire a dedicated tester to find and fix bugs on your favorite websites, which-->
		<!--				would give me more opportunities to focus on improvements and new features which-->
		<!--				you would like even more.-->
		<!--			</p>-->
		<!--		</div>-->
	</main>

	<div
		class="fixed inset-0 bg-dark opacity-0 pointer-events-none transition-opacity duration-1000"
		data-popupoff="notification"
		class:opacity-100={isAnimating}
	/>
</section>
