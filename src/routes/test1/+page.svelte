<script>
	import { base } from '$app/paths';
    import { page } from '$app/state';
</script>

<div>{page.url.pathname}</div>


<a href="{base}/">click</a>