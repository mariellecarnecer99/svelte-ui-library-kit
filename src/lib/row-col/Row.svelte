<div class="container">
	<div class="row">
		<slot />
	</div>
</div>

<style>
	.container {
		width: 100%;
	}

	.row {
		width: 100%;
		display: flex;
		/* flex-wrap: wrap; */
		margin-top: 25px;
	}
</style>
