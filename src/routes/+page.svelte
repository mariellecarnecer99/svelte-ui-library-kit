<script>
	import Button from '$lib/components/button/Button.svelte';
	import Grid from '$lib/components/grid/Grid.svelte';
	import GridItem from '$lib/components/grid/GridItem.svelte';
</script>

<section>
	<Button color="secondary" shape="pill" size="lg">Button</Button>

	<Grid>
		<GridItem col="3">3</GridItem>
		<GridItem col="3">3</GridItem>
		<GridItem col="3">3</GridItem>
		<GridItem col="3">3</GridItem>
	</Grid>

	<Grid>
		<GridItem col="12">12</GridItem>
	</Grid>

	<Grid>
		<GridItem col="6">6</GridItem>
		<GridItem col="6">6</GridItem>
	</Grid>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
