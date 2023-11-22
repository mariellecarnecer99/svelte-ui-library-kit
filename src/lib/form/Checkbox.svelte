<script>
	let id;
	let name;

	export { id, name };
</script>

<input type="checkbox" {id} {name} />
<label for={id}><slot /></label>
