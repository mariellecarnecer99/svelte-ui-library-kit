<script>
	let gutter = 16;
	let justify = 'center';
	let align = 'center';
	let className = '';
	let rowClasses = `row ${className} justify-${justify} align-${align}`;

	export { gutter, justify, align, className as class };
</script>

<div class="container">
	<div class={rowClasses} style="--gutter: {gutter}px;">
		<slot />
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
	  	margin-left: auto;
	  	margin-right: auto;
	}

	.row {
		width: 100%;
		display: flex;
		margin-top: 25px;
		gap: var(--gutter);
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
