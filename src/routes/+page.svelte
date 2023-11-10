<script>
	import Button from '$lib/components/button/Button.svelte';
	import Grid from '$lib/components/grid/Grid.svelte';
	import GridItem from '$lib/components/grid/GridItem.svelte';
	import FormInput from '$lib/components/form/FormInput.svelte';
	import Icon from "$lib/components/icon/Icon.svelte";
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

	<FormInput col="6" for="fname" label="First Name" type="text" name="firstname"></FormInput>
	<FormInput col="6" for="lname" label="Last Name" type="text" name="lastname"></FormInput>
	<FormInput col="12" for="username" label="Username" type="text" name="username"></FormInput>

	<Icon type="brands" name="wikipedia-w" />
	<Icon type="solid" name="house" />
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
