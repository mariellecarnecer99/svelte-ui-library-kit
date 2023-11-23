<!-- Upload.svelte -->
<script>
	import Icon from '../icon/Icon.svelte';
	export let action;
</script>

<div class="file-upload">
	<label for="fileInput" class="flex items-center space-x-2 cursor-pointer">
		<Icon type="solid" name="cloud-arrow-up" />
		<span>Upload files</span>
	</label>
	<input id="fileInput" type="file" class="hidden" />
</div>

<style lang="postcss">
	.file-upload {
		@apply border border-gray-300 p-2 rounded-md w-36;
	}
</style>
