<script>
    import Logo from '../Logo.svelte'
    import Button from '../../lib/button/Button.svelte';
    import Icon from '../../lib/icon/Icon.svelte'
</script>

<header
	class="container sticky top-0 flex h-[var(--header-height)] items-center bg-surface-1/50 px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-0"
>
	<nav class="flex flex-grow p-5">
        <Logo height="40" />
	</nav>
	<div class="flex items-center gap-3 md:gap-5">
		<Button p="3" size="md" link="https://github.com/mariellecarnecer99/svelte-ui-library-kit">
            <Icon type="brands" name="github" />Github
        </Button>
        <Button p="3" size="md" link="https://www.npmjs.com/package/svelte-ui-library-kit">
            <Icon type="brands" name="npm" />NPM
        </Button>
        <Button p="3" size="md" link="https://svelte.dev/repl/9407ea38e35d493bbf78266bccea3898?version=3.55.1">
            Try on Repl
        </Button>
	</div>
</header>