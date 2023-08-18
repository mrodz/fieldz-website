<script>
	import "../app.sass";

	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';

	export const prerender = true;
</script>

<AppShell class="h-full">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<nav class="list-nav">
					<ul style="display: inline-block">
						<li style="display: inline-block">
							<a href="/account">
								<span class="badge bg-primary-500">💀</span>
								<span class="flex-auto">Services</span>
							</a>
						</li>
						<li style="display: inline-block">
							<a href="/account">
								<span class="badge bg-primary-500">💀</span>
								<span class="flex-auto">About Us</span>
							</a>
						</li>
					</ul>
				</nav>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Avatar initials="JD" border="border-4 border-surface-300-600-token hover:!border-primary-900" cursor="cursor-pointer" background="bg-primary-500" rounded="rounded-xl" width="w-16" />
			</svelte:fragment>
		</AppBar>
		<!--
			<ul>
				<li>
					
				</li>
				<li>
				</li>
			</ul>
		</nav>-->
	</svelte:fragment>
	<slot />
</AppShell>
<!--
<div id="root">
	<nav>
		<button>Home</button>
		<button>About</button>
		<button>Pricing</button>
		<Avatar initials="JD" />
	</nav>
  	<main>
		<slot />
  </main>
</div>
-->
<style lang="sass">
	// #root
	// 	display: grid
	// 	grid-template-rows: auto 1fr
	// 	min-height: 100vh

	// nav
	// 	display: flex
	// 	flex-direction: row
	// 	background-color: lime
	// 	position: relative

	// 	&>button:last-child
	// 		position: absolute
	// 		right: 0

	// button
	// 	background-color: transparent
	// 	border: none
	// 	padding: 20px
</style>
