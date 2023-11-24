<script>
	let columns = [];
	let data = [];

	export { columns, data };
</script>

<table>
	<thead>
		<tr>
			{#each columns as { title, key }}
				<th>{title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each columns as { key }}
					<td>{row[key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	table {
		@apply w-full border-collapse border border-solid border-gray-300;
	}

	th,
	td {
		@apply p-2 border border-solid border-gray-300;
	}

	th {
		@apply bg-gray-200;
	}
</style>
