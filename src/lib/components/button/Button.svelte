<script>
	let color;

	export { color };
</script>

{#if color === 'primary'}
	<button class="btn primary">
		<slot />
	</button>
{:else if color === 'secondary'}
	<button class="btn secondary">
		<slot />
	</button>
{:else}
	<button class="btn">
		<slot />
	</button>
{/if}

<style>
	.btn {
    background-color: white;
		border: 1px solid #dadfe5;
    border-radius: 4px;
		color: black;
		padding: 15px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 14px;
    cursor: pointer;
	}

  .btn:hover {
    border: 1px solid #000;
  }

	.primary {
		background-color: #206BC4;
    color: white
	}

  .primary:hover {
    border: none;
    background-color: rgb(32, 107, 196, .8);
  }

	.secondary {
		background-color: #667382;
    color: white
	}

  .secondary:hover {
    border: none;
    background-color: rgb(102, 115, 130, .8);
  }
</style>
