<script>
	import { onMount } from "svelte";

	const points = [
		"created for people, not for profit",
		"no tracking or analytics",
		// eslint-disable-next-line quotes
		`free & <a href="https://github.com/RomanistHere/PopUpOFF" rel="nofollow" target="_blank" class="underline transition-colors hover:bg-dark hover:no-underline hover:text-bright">open source</a>`,
		"all information stored locally",
		"maintained by individuals, not commerce",
		"plain HTML, CSS and JavaScript, <50 KiB",
	];

	const observeTillElementMet = ({ action, element }) => {
		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			const first = entries[0];
			if (first.isIntersecting) {
				action();

				observer.disconnect();
			}
		});

		observer.observe(element);
	};

	let isVisited = false;
	let ref = null;

	onMount(() => {
		observeTillElementMet({
			action: () => {
				setTimeout(() => {
					isVisited = true;
				}, 200);
			},
			element: ref,
		});
	});
</script>

<p id="about" />

<section
	class="relative min-h-screen bg-bright flex justify-center items-center text-dark"
>
	<div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
		<div class="absolute right-[15%] top-[70vh] w-[36rem] -rotate-12">
			<img
				src="/bg/4.png"
				alt=""
				width="885"
				height="165"
				class="rounded-lg opacity-80"
				class:animation-1={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute right-0 top-[40vh] w-[35rem] rotate-[10deg]">
			<img
				src="/bg/6.png"
				alt=""
				width="633"
				height="103"
				class="rounded-lg opacity-90"
				class:animation-2={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute left-[12%] top-[80vh] rotate-12">
			<img
				src="/bg/1.png"
				alt=""
				width="610"
				height="125"
				class="rounded-lg"
				class:animation-3={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute right-[5%] top-[55vh] -rotate-6">
			<img
				src="/bg/2.png"
				alt=""
				width="374"
				height="67"
				class="rounded-lg"
				class:animation-4={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute left-[10%] top-[5vh] -rotate-1">
			<img
				src="/bg/3.png"
				alt=""
				width="876"
				height="135"
				class="w-[40rem] rounded-lg"
				class:animation-5={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute left-[5%] top-[40vh] rotate-6">
			<img
				src="/bg/5.png"
				alt=""
				width="417"
				height="166"
				class="w-[24rem] rounded-lg opacity-90"
				class:animation-6={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>

		<div class="absolute right-[5%] top-[4vh] rotate-3">
			<img
				src="/bg/7.png"
				alt=""
				width="798"
				height="281"
				class="w-[40rem] rounded-lg"
				class:animation-7={isVisited}
				class:scale-0={!isVisited}
			/>
		</div>
	</div>

	<div class="max-w-7xl px-8 w-full text-center relative">
		<h1 class="text-title leading-[4.2rem]">
			Privacy and performance <br />
			from the beginning
		</h1>
		<ul
			bind:this={ref}
			class="text-basic leading-10 list-disc list-inside"
		>
			{#each points as text}
				<li>
					{@html text}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	@keyframes animate-in {
		0%,
		40% {
			transform: scale(0);
		}
		90% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes animate-in-delayed {
		0%,
		70% {
			transform: scale(0);
		}
		97% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}

	.animation-1 {
		animation: animate-in 2.5s ease-in;
	}

	.animation-2 {
		animation: animate-in-delayed 2.1s ease-in;
	}

	.animation-3 {
		animation: animate-in 1.2s ease;
	}

	.animation-4 {
		animation: animate-in 1.6s ease-in;
	}

	.animation-5 {
		animation: animate-in 2s ease-in;
	}

	.animation-6 {
		animation: animate-in-delayed 2.2s ease-in-out;
	}

	.animation-7 {
		animation: animate-in-delayed 2.5s ease-in;
	}
</style>
