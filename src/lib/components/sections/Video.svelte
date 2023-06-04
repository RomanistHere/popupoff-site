<script>
	let isYouTube = false;
</script>

<p id="video" />

<section class="min-h-screen py-16 bg-bright flex justify-center items-center text-dark">
	<div class="max-w-7xl px-8 w-full text-center">
		<h1 class="text-title">See in action</h1>

		<div
			class="relative mx-auto my-8 py-1 px-1 bg-accent rounded-3xl inline-flex justify-center items-center"
		>
			<button
				class="py-2 px-6 rounded-3xl"
				class:bg-dark={!isYouTube}
				class:text-bright={!isYouTube}
				on:click={() => {
					isYouTube = false;
				}}
			>
				Video
			</button>
			<button
				class="py-2 px-6 rounded-3xl"
				class:bg-dark={isYouTube}
				class:text-bright={isYouTube}
				on:click={() => {
					isYouTube = true;
				}}
			>
				YouTube
			</button>
			<span class="absolute text-xs italic -top-10 -right-16 rotate-12">
				YouTube version is separated<br />
				because of <a href="https://deletegoogle.com/" class="underline" target="_blank">privacy concerns</a>
			</span>
		</div>

		<div class="flex justify-center">
			{#if isYouTube}
				<iframe
					width="860"
					height="490"
					src="https://www.youtube-nocookie.com/embed/3jTKRCxLyPE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			{:else}
				<video
					controls
					autoplay
					muted
					width="860"
					height="490"
				>
					<source
						src="PopUpOFF.mp4"
						type="video/mp4"
					/>
					<p>
						Your browser doesn't support HTML video. Here is a
						<a href="https://www.youtube.com/watch?v=3jTKRCxLyPE">
							link to the youtube video
						</a>
						instead.
					</p>
				</video>
			{/if}
		</div>
	</div>
</section>
