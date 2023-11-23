<script>
	import 'iconify-icon';

	let type;
	let name;

	export { type, name };
</script>

<iconify-icon icon="fa6-{type}:{name}" class="icon" />

<style lang="postcss">
	.icon {
		@apply mr-3;
	}
</style>
