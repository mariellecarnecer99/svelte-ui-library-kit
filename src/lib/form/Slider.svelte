<script>
	let range = 25;
	// export let rangeValues = [20, 50];
	// export let disabledRangeValues = [20, 50];

    export { range };

	let dragging = false;

	function handleDragStart() {
		dragging = true;
	}

	function handleDragEnd() {
		dragging = false;
	}

	function handleSliderMove(event) {
		if (dragging) {
			const rect = event.target.getBoundingClientRect();
			const percentage = ((event.clientX - rect.left) / rect.width) * 100;

			range = Math.round(percentage);
		}
	}
</script>

<div class="slider" on:mouseup={handleDragEnd}>
	<input
		type="range"
		bind:value={range}
		on:mousedown={handleDragStart}
		on:mousemove={handleSliderMove}
	/>
</div>

<!-- <div class="slider">
	<input type="range" bind:value={rangeValues[0]} />
	<input type="range" bind:value={rangeValues[1]} />
</div>

<div class="slider" disabled>
	<input type="range" bind:value={disabledRangeValues[0]} disabled />
	<input type="range" bind:value={disabledRangeValues[1]} disabled />
</div> -->

<style lang="postcss">
	.slider {
		@apply w-full mt-4;
	}

	.slider input[type='range'] {
		transition: opacity 0.2s;
		@apply w-full appearance-none h-2 bg-gray-300 rounded outline-none opacity-70;
	}

	.slider input[type='range']:hover {
		@apply opacity-100;
	}

	.slider input[type='range']::-webkit-slider-thumb {
		transition: background 0.2s;
		@apply appearance-none w-4 h-4 rounded-full bg-blue-500 cursor-pointer;
	}

	.slider input[type='range']::-webkit-slider-thumb:hover {
        @apply bg-blue-800
	}
</style>
