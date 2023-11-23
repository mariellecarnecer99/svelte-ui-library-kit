<!-- Upload.svelte -->
<script>
	import Icon from '../icon/Icon.svelte';
	export let action;
</script>

<div class="file-upload">
	<label for="fileInput" class="file-input">
		<Icon type="solid" name="cloud-arrow-up" />
		<span>Upload files</span>
	</label>
	<input id="fileInput" type="file" class="file-input-hidden" />
</div>

<style lang="postcss">
	.file-upload {
		@apply border border-solid border-gray-300 p-2 rounded-md w-32;
	}

	.file-input {
		@apply flex items-center ml-2 cursor-pointer
	}

    .file-input-hidden {
        @apply hidden
    }
</style>
