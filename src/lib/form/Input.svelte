<script>
	let type = 'text';
	let name;
	let placeholder;
	let size = 'medium';
	let disabled = false;

	export { type, name, placeholder, size, disabled };
</script>

<input {type} {name} {placeholder} {disabled} class="form-input input-{size}" />

<style lang="postcss">
	.form-input {
		@apply w-full border border-gray-300 rounded-md;
	}
	.input-small {
		@apply p-1.5;
	}
	.input-medium {
		@apply p-2.5;
	}
	.input-large {
		@apply p-3.5;
	}
</style>
