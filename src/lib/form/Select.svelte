<script>
	let items = [];
	let model = '';
	let size = 'medium';
	let disabled = false;

	export { items, model, size, disabled };
</script>

<select bind:value={model} {disabled} class="form-select select-{size}">
	{#each items as item (item.value)}
		{#if item.group}
			<optgroup label={item.label}>
				{#each item.options as option (option.value)}
					<option value={option.value} disabled={option.disabled}>{option.label}</option>
				{/each}
			</optgroup>
		{:else}
			<option value={item.value} disabled={item.disabled}>{item.label}</option>
		{/if}
	{/each}
</select>

<style lang="postcss">
	.form-select {
		@apply border;
	}
	.select-small {
		@apply p-1.5 rounded-md;
	}

	.select-medium {
		@apply p-2.5 rounded-md;
	}

	.select-large {
		@apply p-3.5 rounded-md;
	}
</style>
