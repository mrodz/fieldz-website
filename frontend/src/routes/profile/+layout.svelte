<script lang="ts">
	// import { Auth } from 'aws-amplify';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib';
	// import { setContext} from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	const err = (message: string) => {
		toastStore.trigger({
			message,
			background: 'variant-filled-error',
		});
		goto("/login");
	}

	let toastId: string | undefined;

	$: if ($currentUser !== undefined) {
		$currentUser.then(user => {
			if (user === undefined) {
				err("You're not signed in!");
			}

			if (toastId !== undefined) {
				toastStore.close(toastId);
				toastId = undefined;

				toastStore.trigger({
					message: "Logged in!",
					background: "variant-filled-success",
				})
			}
		}).catch(error => {
			// this message is handled separately
			if (error !== "The user is not authenticated") {
				err(error);
			}

			console.error(error);
		});
	} else {
		/*
		Server Side
		*/
		
		toastId = toastStore.trigger({
			message: "Please sign in to continue",
			background: 'variant-filled-error',
			hideDismiss: true,
			timeout: 7_000,
		});

		console.log(`$currentUser is ${$currentUser} when testing for auth`);
	}
</script>

{#if $currentUser === undefined}
	<div class="flex flex-col place-items-center">
		<h1 class="h1 my-5">Please wait</h1>
		<p class="mb-5">Awaiting a user session to proceed...</p>
	
		<ProgressRadial />

		<p class="mt-5">Stuck? Try <a class="btn variant-filled" href="/login">Signing In</a></p>
	</div>
{:else}
	{#await $currentUser}
		<div class="flex flex-col place-items-center">
			<h1 class="h1 my-5">Please wait</h1>
			<p class="mb-5">Resolving request...</p>
	
			<ProgressRadial />

			<p class="mt-5">Almost there!</p>
		</div>
	{:then user}
		<slot />
	{:catch error}
		<div class="p-4">
			<h1 class="h1 my-5">Sorry! You can't view this page.</h1>

			<p>It looks like you don't have permission to access this route. Try signing in again!</p>

			<p class="my-5">If the problem persists, please email us for support at <a href="mailto:admin@fieldz.app">admin@fieldz.app</a>.</p>

			<p>You will be redirected shortly. If not, click <button class="btn variant-filled">here</button></p>

			<h2>Raw Error:</h2>
			<code>
				{JSON.stringify(error)}
			</code>
		</div>
	{/await}
{/if}
