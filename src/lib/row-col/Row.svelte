<script>
	let justify;
	let align;

	export { justify, align };
</script>

<div class="container">
	<div class="row justify-{justify} align-{align}">
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

	.align-top {
		vertical-align: top;
	}

	.align-middle {
		vertical-align: middle;
	}

	.align-bottom {
		vertical-align: bottom;
	}

	.justify-start {
		justify-content: start;
	}

	.justify-end {
		justify-content: end;
	}

	.justify-center {
		justify-content: center;
	}

	.justify-space-around {
		justify-content: space-around;
	}

	.justify-space-between {
		justify-content: space-between;
	}
</style>
