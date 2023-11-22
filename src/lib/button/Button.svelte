<script>
	let color = 'primary';
	let shape = 'tile';
	let size = 'md';

	export { color, shape, size };
</script>

<!-- onClick="window.open('{link}');" -->
<button class="btn btn-{color} btn-{shape} btn-{size}">
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
		@apply rounded-full;
	}

	.btn-round {
		@apply rounded;
	}

	.btn-tile {
		@apply rounded-none;
	}

	.btn-sm {
		@apply text-sm;
	}

	.btn-md {
		@apply text-base;
	}

	.btn-lg {
		@apply text-lg;
	}
	.btn-xl {
		@apply text-xl;
	}
	.btn-2xl {
		@apply text-2xl;
	}
</style>
