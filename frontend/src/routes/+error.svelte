<script>
	import { page } from '$app/stores';
</script>

<b>
	Error {$page.status} :(
</b>

<p>
	{$page.error.message}
</p>