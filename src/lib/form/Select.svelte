<script>
	let items = [];
	let model = '';

	export { items, model };
</script>

<select bind:value={model} style="width:200px">
	{#each items as item (item.value)}
		<option value={item.value}>{item.label}</option>
	{/each}
</select>
