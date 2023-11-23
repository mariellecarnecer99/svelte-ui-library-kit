<script>
	let value = false;

    export { value }
</script>

<label class="switch">
	<input type="checkbox" bind:checked={value} />
	<span class="slider round" />
</label>

<style lang="postcss">
	.switch {
		@apply relative inline-block w-14 h-8;
	}

	.switch input {
		@apply opacity-0 w-0 h-0;
	}

	.slider {
		@apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-300;
	}

	.slider:before {
        content: '';
		@apply absolute h-6 w-6 left-1 bottom-1 bg-white transition duration-300;
	}

	input:checked + .slider {
		@apply bg-blue-500;
	}

	input:focus + .slider {
		@apply focus:ring-blue-500;
	}

    input:checked + .slider:before {
		transform: translateX(26px);
	}

	.slider.round {
		@apply rounded-full;
	}

	.slider.round:before {
		@apply rounded-full;
	}
</style>
