<script>
	import Button from '$lib/components/button/Button.svelte';
</script>

<Button color="secondary" shape="pill" size="lg">Button</Button>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
