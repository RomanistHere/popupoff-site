<script>
	import { onMount } from "svelte";

	import AnimatedText from "$lib/components/AnimatedText.svelte";

	import RemovedScreen from "$lib/components/icons/RemovedScreen.svelte";
	import Display from "$lib/components/icons/Display.svelte";
	import Plane from "$lib/components/icons/Plane.svelte";
	import Watch from "$lib/components/icons/Watch.svelte";
	import Bed from "$lib/components/icons/Bed.svelte";
	import ExclamationSquare from "$lib/components/icons/ExclamationSquare.svelte";
	import Smartphone from "$lib/components/icons/Smartphone.svelte";
	import Tablet from "$lib/components/icons/Tablet.svelte";
	import Mirror from "$lib/components/icons/Mirror.svelte";
	import Picture from "$lib/components/icons/Picture.svelte";
	import Parking from "$lib/components/icons/Parking.svelte";
	import Book from "$lib/components/icons/Book.svelte";
	import Brush from "$lib/components/icons/Brush.svelte";
	import Island from "$lib/components/icons/Island.svelte";
	import Swimmer from "$lib/components/icons/Swimmer.svelte";
	import FootbalPitch from "$lib/components/icons/FootbalPitch.svelte";
	import City from "$lib/components/icons/City.svelte";
	import Pentagon from "$lib/components/icons/Pentagon.svelte";

	export let state = { cleanedArea: 0, numbOfItems: 0 };

	const averageScreenArea = 0.12;
	const sqMetresToFt = 10.764;
	const animationDuration = 2000;
	let isAnimating = false;
	let dynamicIcon = ExclamationSquare;

	const areaData = {
		// square metres
		1: {
			size: 0.01,
			value: "iPhone 11 Pro",
			icon: Smartphone,
		},
		2: {
			size: 0.04,
			value: "iPad Pro",
			icon: Tablet,
		},
		3: {
			size: 0.18,
			value: "a small bathroom mirror",
			icon: Mirror,
		},
		4: {
			size: 0.41,
			value: "the Mona Lisa",
			icon: Picture,
		},
		5: {
			size: 2.6,
			value: "an average double bed",
			icon: Bed,
		},
		6: {
			size: 11.5,
			value: "an average parking space",
			icon: Parking,
		},
		7: {
			size: 40,
			value: "the largest book in the world",
			icon: Book,
		},
		8: {
			size: 67,
			value: "the largest painting at the Louvre Museum, “The Wedding Feast at Cana”",
			icon: Brush,
		},
		9: {
			size: 125,
			value: "Boeing 737 wing area",
			icon: Plane,
		},
		10: {
			size: 307,
			value: "the world's smallest inhabited island",
			icon: Island,
		},
		11: {
			size: 1250,
			value: "an olympic-size swimming pool",
			icon: Swimmer,
		},
		12: {
			size: 10625,
			value: "a football pitch (soccer field)",
			icon: FootbalPitch,
		},
		13: {
			size: 116000,
			value: "the Pentagon building",
			icon: Pentagon,
		},
		14: {
			size: 490000,
			value: "holy Vatican City",
			icon: City,
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
			const { size, value, icon } = areaData[numb];
			const text = getText(val, size);
			dynamicIcon = icon;
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

			However I’m alone on this journey, and a small $1 donation just once per month would make a whole difference in the world for this little app. I’d be able to hire a dedicated tester to find and fix bugs on your favorite websites, which would give me more opportunities to focus on improvements and new features which you would like even more.`
		);
		/* eslint-enable max-len */
	});
</script>

<section
	class="min-h-screen py-28 px-8 bg-bright text-dark dark:bg-dark dark:text-bright flex justify-center items-center"
>
	<main>
		<h1
			class="text-green-900 dark:text-green-600 text-center mb-8 -mt-20 text-4xl font-bold"
		>
			Your Distraction-<br />Free Stats
		</h1>
		<ul
			class="text-lg max-w-md"
			class:max-w-7xl={!getArea(areaInMetres).includes("largest painting")}
			class:max-w-5xl={getArea(areaInMetres).includes("largest painting")}
		>
			<li class="my-6 flex items-center gap-4">
				<RemovedScreen className="shrink-0 text-accent" />
				<div>
					<AnimatedText
						text={state.numbOfItems}
						shouldAnimate={true}
						{animationDuration}
					/>
					<p>popups and overlays removed</p>
				</div>
			</li>
			<li class="my-6 flex items-center gap-4">
				<Display className="shrink-0 text-accent" />
				<div>
					<AnimatedText
						text={state.cleanedArea}
						shouldAnimate={true}
						{animationDuration}
					/>
					<p>total area of your screen sizes</p>
				</div>
			</li>
			<li class="my-6 border-accent border-t-2 border-b-2 px-6 pb-4 pt-2">
				which is
				<AnimatedText
					text={areaInMetres.toFixed(1)}
					shouldAnimate={true}
					{animationDuration}
				/> square metres or
				<AnimatedText
					text={areaInFt.toFixed(1)}
					shouldAnimate={true}
					{animationDuration}
				/> square feet
			</li>
			<li class="my-6 flex items-center gap-4">
				<svelte:component
					this={dynamicIcon}
					className="shrink-0 text-green-900 dark:text-green-600"
				/>
				<AnimatedText
					textColorClassName="text-green-900 dark:text-green-600"
					text={getArea(areaInMetres)}
				/>
			</li>
			<li class="my-6 flex items-center gap-4">
				<Watch className="shrink-0 text-green-900 dark:text-green-600" />
				<div>
					<AnimatedText
						textColorClassName="text-green-900 dark:text-green-600"
						text={time ? time : "0 seconds"}
					/>
					<p>estimated time save</p>
				</div>
			</li>
		</ul>

		<div class="absolute bottom-8 inset-x-0 text-center px-8">
			<div class="border border-accent w-fit mx-auto px-4 py-2">
				<p class="italic opacity-80">
					These stats are just for you — stored locally, and never shared.
				</p>
				<span class="opacity-80 italic">If you enjoy the peace and quiet, consider</span>
				<a
					class="underline mt-1 italic transition-colors
					dark:hover:bg-bright dark:hover:text-dark hover:bg-dark hover:no-underline hover:text-bright"
					href="/#donate"
				>
					donating
				</a>
				<span class="opacity-80 italic">to keep it going!</span>
			</div>
		</div>
	</main>

	<div
		class="fixed inset-0 bg-dark opacity-0 pointer-events-none transition-opacity duration-1000"
		data-popupoff="notification"
		class:opacity-100={isAnimating}
	/>
</section>
