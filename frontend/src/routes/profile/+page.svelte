<script lang="ts">
	import { currentUser } from '$lib'
	import { ProgressRadial } from '@skeletonlabs/skeleton';

</script>

<h1 class="h1">Your Data:</h1>

<hr class="h3 my-10" />

{#await $currentUser}
	<ProgressRadial />
{:then user}
	{JSON.stringify(user)}
{/await}