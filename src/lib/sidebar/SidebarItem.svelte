<script>
    let link;

    export { link };
</script>

<div class="sidebar-items">
    <a href={link}><slot /></a>
</div>

<style>
    .sidebar-items a {
        color: red;
    }
</style>