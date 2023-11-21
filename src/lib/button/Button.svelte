<script>
	let color = "primary";
	let shape = "tile";

	export { color, shape };
</script>

<!-- onClick="window.open('{link}');" -->
<button class="btn btn-{color} btn-{shape}">
	<slot />
</button>

<style lang="postcss">
	.btn {
		@apply py-2 px-4 border border-inherit;
	}
	.btn-primary {
		@apply bg-blue-700 text-white;
	}
	.btn-primary:hover {
		@apply bg-blue-900;
	}
	.btn-secondary {
		@apply bg-gray-500 text-white;
	}
	.btn-secondary:hover {
		@apply bg-gray-700;
	}
	.btn-success {
		@apply bg-green-600 text-white;
	}
	.btn-success:hover {
		@apply bg-green-800;
	}
	.btn-warning {
		@apply bg-orange-600 text-white;
	}
	.btn-warning:hover {
		@apply bg-orange-800;
	}
	.btn-danger {
		@apply bg-red-600 text-white;
	}
	.btn-danger:hover {
		@apply bg-red-800;
	}
	.btn-info {
		@apply bg-sky-400 text-white;
	}
	.btn-info:hover {
		@apply bg-sky-600;
	}
	.btn-light {
		@apply bg-white text-black;
	}
	.btn-dark {
		@apply bg-black text-white;
	}
	
	.btn-pill {
		@apply rounded-full
	}

	.btn-round {
		@apply rounded
	}

	.btn-tile {
		@apply rounded-none
	}

	/* .btn-sm {
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
	} */
</style>
