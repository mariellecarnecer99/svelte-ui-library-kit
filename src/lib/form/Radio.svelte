<script>
	let id;
	let name;

	export { id, name };
</script>

<input type="radio" {id} {name} />
<label for={id}><slot /></label>
