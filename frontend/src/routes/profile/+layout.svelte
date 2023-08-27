<script lang="ts">
	import { Auth } from 'aws-amplify';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { setContext} from 'svelte';

	const getCurrentUserProcess = async () => {
		try {
			const user = await Auth.currentAuthenticatedUser();;
			console.log(user);
			return user;
		} catch (error) {
			toastStore.trigger({
				message: `${error}`,
				background: 'variant-filled-error',
			});
			goto("/login");
			return;
		}
	}

	let user = getCurrentUserProcess();

</script>

{#await user}
	Loading
{:then user}
	{#if user === undefined}
		❌ You don't have access, redirecting...
	{:else}
		<slot />
	{/if}
{:catch error}
	<p>{error.message}</p>
{/await}