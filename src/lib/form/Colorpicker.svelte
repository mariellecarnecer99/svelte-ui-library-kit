<script>
	import Icon from '../icon/Icon.svelte';
	let color;
	let onChange;

	export { color, onChange };

	function handleChange(event) {
		const newColor = event.target.value;
		onChange(newColor);
	}
</script>

<div class="color-picker-container">
	<input type="color" bind:value={color} on:input={handleChange} />
	<Icon type="solid" name="angle-down" />
</div>

<style lang="postcss">
	.color-picker-container {
		@apply flex items-center border-solid border-gray-300 rounded w-16 h-10 pl-2;
	}

	input {
		@apply w-10 h-10 p-1 border-none border-transparent bg-transparent outline-none;
	}
</style>
