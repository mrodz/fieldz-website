<script>
	import { Amplify, Auth } from 'aws-amplify';
	import awsconfig from '../aws-exports.js';
	Amplify.configure(awsconfig);

	import "../app.sass";

	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Toasts!
	import { Toast } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';

	import { goto } from '$app/navigation';

	const logOut = async () => {
		try {
			await Auth.signOut();
			toastStore.trigger({
				message: "You signed out! See you later",
				background: 'variant-filled-success',
			});
			goto("/")
		} catch (error) {
			toastStore.trigger({
				message: `Error signing out: ${error}`,
				background: 'variant-filled-error',
			})
		}
	}
</script>

<Toast />

<AppShell class="h-full">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<nav class="list-nav">
					<ul class="flex flex-row items-center">
						<li style="display: inline-block">
							<a href="/products">
								<span class="badge bg-primary-500 h-10 w-10"><img width="25px" height="25px" src="/assets/services-icon.svg" alt=""></span>
								<span class="flex-auto">Services</span>
							</a>
						</li>
						<li style="display: inline-block">
							<a href="/about">
								<span class="badge bg-primary-500 h-10 w-10"><img width="25px" height="25px" src="/assets/about-icon.svg" alt=""></span>
								<span class="flex-auto">About Us</span>
							</a>
						</li>
					</ul>
				</nav>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn variant-filled" on:click={logOut}>
					Log Out
				</button>
				<Avatar src="/assets/pfpdefault.png" border="border-4 border-primary-500" cursor="cursor-pointer" background="bg-primary-500" width="w-16" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>