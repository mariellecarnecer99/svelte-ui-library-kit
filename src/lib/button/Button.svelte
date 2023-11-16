<script>
	let link;
	let color;
	let shape;
	let size = 'md';

	export { link, color, shape, size };
</script>

<button class="btn btn-{color} btn-{shape} btn-{size}" onClick="window.open('{link}');">
	<slot />
</button>

<style>
	.btn {
		/* background-color: white;
		border: 1px solid #dadfe5;
		border-radius: 6px; */
		color: black;
		padding: auto;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 14px;
		cursor: pointer;
	}

	.btn:hover {
		/* border: 1px solid #000; */
		text-decoration: underline;
	}

	.btn-primary {
		background-color: #206bc4;
		color: white;
	}

	.btn-primary:hover {
		border: none;
		background-color: rgb(32, 107, 196, 0.8);
	}

	.btn-secondary {
		background-color: #667382;
		color: white;
	}

	.btn-secondary:hover {
		border: none;
		background-color: rgb(102, 115, 130, 0.8);
	}

	.btn-white {
		background-color: #fff;
		color: #000;
	}

	.btn-pill {
		border-radius: 50px;
	}

	.btn-round {
		border-radius: 8px;
	}

	.btn-tile {
		border-radius: 0;
	}

	.btn-sm {
		font-size: 0.875rem;
		padding: 0.25rem 0.5rem;
	}

	.btn-md {
		font-size: 0.975rem;
		padding: 0.3rem 1rem;
	}

	.btn-lg {
		font-size: 1.25rem;
		padding: 0.5rem 1rem;
	}
</style>
