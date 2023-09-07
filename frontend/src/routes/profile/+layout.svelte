<script lang="ts">
	import { Auth } from 'aws-amplify';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib';
	import { setContext} from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	/*
	async function getUser() {
		if ($currentUser === undefined)
		toastStore.trigger({
			message: "You're not signed in!",
			background: 'variant-filled-error',
		});
		goto("/login");
	}
	*/

	const getCurrentUserProcess = async () => {
		try {
			await new Promise(r => setTimeout(r, 1_000));
			
			const user = await Auth.currentAuthenticatedUser();
			
			console.log(user);
			currentUser.set(user);
			
			return user;
		} catch (error) {
			toastStore.trigger({
				message: `${error}`,
				background: 'variant-filled-error',
			});

			console.error(error);

			goto("/login");
			return;
		}
	}
</script>

{#await getCurrentUserProcess()}
	<ProgressRadial />
{:then user}
	{#if user === undefined}
		You're not signed in! Redirecting...
	{:else}
		<slot />
	{/if}
{:catch error}
	<p>{error.message}</p>
{/await}