<script lang="ts">
	import { slide } from "svelte/transition";
	import { Auth, type ISignUpResult } from 'aws-amplify';
	import { goto } from '$app/navigation';
	import { validateSignUpParamsCorrectness } from './api'
	import { toastStore } from '@skeletonlabs/skeleton';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { default as LoginErrorList } from './LoginErrorList.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	// https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#federatedsignin
	// https://aws-amplify.github.io/amplify-js/api/classes/authclass.html

	let isDisabled = false;
	let isCreatingAccount = true; // PROD: set to false
	let canSubmit = true;
	let submitLoading = false;

	// async function signUp({ username, password, email, phoneNumber }) {
	//
	// }

	let titleMessage: string;
	$: titleMessage = isCreatingAccount ? "Sign Up" : "Sign In";
	let buttonSwitchMessage: string;
	$: buttonSwitchMessage = isCreatingAccount ? "signing in" : "creating an account";
	let buttonSwitchLabel: string;
	$: buttonSwitchLabel = isCreatingAccount ? "I already have an account!" : "New around these parts?"

	let firstNameErrors: string[];
	let lastNameErrors: string[];
	let emailErrors: string[];
	let passwordErrors: string[];

	function switchFormType() {
		isCreatingAccount = !isCreatingAccount;
	}

	async function awsApiCallSignUp(email: string, password: string, firstName: string, lastName: string): ISignUpResult {
		const response: ISignUpResult = await Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
				name: firstName + " " + lastName,
				picture: "https://fieldz.app/pfpdefault.png",
			},
			autoSignIn: {
				enabled: true,
			}
		});

		console.log(response);			

		return response;
	}

	async function submitSignUp(event: SubmitEvent) {
		isDisabled = true;
		canSubmit = false;
		event.preventDefault();

		const data = new FormData(event.target! as HTMLFormElement);

		const firstName: string = data.get("first-name")!;
		const lastName: string = data.get("last-name")!;
		const email: string = data.get("email")!;
		const password: string = data.get("password")!;

		const signUpMessages = validateSignUpParamsCorrectness(firstName, lastName, email, password);

		[firstNameErrors, lastNameErrors, emailErrors, passwordErrors] = signUpMessages.messages;

		const c = signUpMessages.errorCount;
		if (c != 0) {
			toastStore.trigger({
				message: `Uh Oh! Please fix ${c === 1 ? "this" : "these"} ${c} error${c === 1 ? "" : "s"}`,
				background: 'variant-filled-error',
			})

			isDisabled = false;

			return;
		}

		submitLoading = true;

		let user;
		let userConfirmed;
		let codeDeliveryDetails;

		try {
			const response = await awsApiCallSignUp(email, password, firstName, lastName);
			user = response.user;
			userConfirmed = response.userConfirmed;
			codeDeliveryDetails = response.codeDeliveryDetails;
		} catch (error) {
			toastStore.trigger({
				message: `Error signing up: ${error}`,
				background: 'variant-filled-error',
				autohide: false,
			})

			console.error(error);

			isDisabled = false;
			submitLoading = false;

			return;
		}

		if (!userConfirmed) {
			console.log(user);
			console.log(userConfirmed);
			console.log(codeDeliveryDetails);

			const username = window.btoa(user.username);

			goto(`/verify?u=${username}`)
		}

		
	}

	async function submitSignIn(event: SubmitEvent) {
		isDisabled = true;
		canSubmit = false;
		event.preventDefault();

		const data = new FormData(event.target! as HTMLFormElement);
		let username: string = data.get("username")!;
		let password: string = data.get("password")!;
		

		alert(`username: ${username}, password: ${password}`);

		isDisabled = false;
	}
</script>

<svelte:head>
	<title>
		{titleMessage} To Continue
	</title>
</svelte:head>

<div out:slide in:slide id="login-page" class="flex-1">
	<div>
	<div id="logo-desktop">
		<div id="logo-desktop-pill"></div>
		<h2 class="h2">Fieldz</h2>
		<img class="pointer-events-none" src="/assets/logo.svg" width="110px" height="110px" alt=""/>
	</div>
	</div>
	<div id="login-card" class="card flex flex-col p-4 mr-10 relative" style="min-height: 300px">
		<h1 class="h1">{titleMessage} <span id="logo-mobile">To Fieldz</span></h1>

		<hr class="!border-t-4 my-5" />

		{#if isCreatingAccount}
			<div in:slide out:slide class="flex flex-col-reverse md:grid md:grid-cols-[1fr_30px_1fr] md:grid-rows-1 grid-rows-[2fr_30px_1fr] grid-cols-1">
				<div class="flex flex-col row-start-2 md:row-start-1">
					<h3 class="mb-5 text-center md:text-left mt-5 md:mt-0"><span class="contents md:hidden">Or,&nbsp;</span>Use a Third Party</h3>
					<button class="btn mx-auto w-10/12 variant-filled-primary" on:click|preventDefault={(e) => alert(e)}>
						<span class="min-w-6"><img class="pointer-events-none" src="/assets/google.svg" alt="Google Logo" width="35px" height="35px" /></span>
						<span>Google</span>
					</button>
					<button disabled class="btn mt-5 mx-auto w-10/12 variant-filled bg-sky-950" on:click|preventDefault={(e) => alert(e)}>
						<span class="min-w-6"><img class="pointer-events-none" src="/assets/facebook.svg" alt="Facebook Logo" width="35px" height="35px" /></span>
						<span>Facebook</span>
					</button>
				</div>

				<span class="hidden md:inline divider-vertical h-full" />
					
				<div class="row-start-1 md:col-start-3">
					<h3 class="mb-5 text-center md:text-left"><span class="hidden md:contents">Or,&nbsp;</span>Register a new Fieldz Account with us today!</h3>
					<form style="min-height: 260px" on:submit|preventDefault={submitSignUp} on:change={() => canSubmit = true}>
						<label for="first-name-input" class="label">
							First Name
						</label>
						<input class:input-error={!!firstNameErrors} disabled={isDisabled} id="first-name-input" name="first-name" class="input variant-form-material" type="text" placeholder="John" />
						<LoginErrorList list={firstNameErrors} />

						<label for="last-name-input" class="label">
							Last Name
						</label>
						<input class:input-error={!!lastNameErrors} disabled={isDisabled} id="last-name-input" name="last-name" class="input variant-form-material" type="text" placeholder="Doe" />
						<LoginErrorList list={lastNameErrors} />

						<label for="email-input" class="label">
							Email
						</label>
						<input class:input-error={!!emailErrors} disabled={isDisabled} id="email-input" name="email" class="input variant-form-material" type="text" placeholder="example@email.com" />
						<LoginErrorList list={emailErrors} />

						<label for="password-input" class="label">
							Password
						</label>
						<input class:input-error={!!passwordErrors} disabled={isDisabled} id="password-input" name="password" class="input variant-form-material" type="password" placeholder="*******" />
						<LoginErrorList list={passwordErrors} />

						{#if submitLoading}
							<ProgressRadial class="mt-5 mx-auto" width="w-12" />
						{:else}
  							<input class="input mt-5" disabled={isDisabled || !canSubmit} type="submit" value="Submit">
						{/if}
					</form>
				</div>
			</div>
			<!-- END Sign Up -->
		{:else}
			<!-- START Sign In -->
			<div in:slide out:slide class="flex flex-col-reverse md:grid md:grid-cols-[1fr_30px_1fr] md:grid-rows-1 grid-rows-[1fr_30px_1fr] grid-cols-1">
				<div class="flex flex-col row-start-2 md:row-start-1">
					<h3 class="mb-5 mt-5 text-center md:text-left md:mt-0"><span class="contents md:hidden">Or,&nbsp;</span>Use a Third Party Account</h3>
					<button class="btn mx-auto w-10/12 variant-filled-primary" on:click|preventDefault={(e) => alert(e)}>
						<span class="min-w-6"><img class="pointer-events-none" src="/assets/google.svg" alt="Google Logo" width="35px" height="35px" /></span>
						<span>Google</span>
					</button>
					<button disabled class="btn mt-5 mx-auto w-10/12 variant-filled bg-sky-950" on:click|preventDefault={(e) => alert(e)}>
						<span class="min-w-6"><img class="pointer-events-none" src="/assets/facebook.svg" alt="Facebook Logo" width="35px" height="35px" /></span>
						<span>Facebook</span>
					</button>
				</div>

				<span class="hidden md:inline divider-vertical h-full" />
					
				<div class="row-start-1 md:col-start-3">
					<h3 class="mb-5 text-center md:text-left">With a Fieldz Account</h3>
					<form on:submit|preventDefault={submitSignIn} on:change={() => canSubmit = true}>
						<label for="username-input" class="label">
							Email
						</label>
						<input disabled={isDisabled} id="username-input" name="username" class="input variant-form-material" type="text" placeholder="your@email.com" />

						<label for="password-input" class="label">
							Password
						</label>
						<input disabled={isDisabled} id="password-input" name="password" class="input variant-form-material" type="password" placeholder="*******" />

						{#if submitLoading}
							<ProgressRadial width="w-12" />
						{:else}
  							<input class="input mt-5" disabled={isDisabled || !canSubmit} type="submit" value="Submit">
						{/if}
					</form>
				</div>
			</div>
			<!-- END SIGN IN -->
		{/if}

		<!-- Login/Signup Switch -->

		<hr class="md:!hidden my-5 hr !border-t-4" />

		<div class="ml-auto mr-auto md:mr-0 mt-auto">
			<span class="hidden md:contents">{buttonSwitchLabel}&nbsp;</span>
			<button on:click|preventDefault={switchFormType} class="btn variant-soft-primary">Switch to {buttonSwitchMessage}</button>
		</div>

		<!-- <div class="relative md:absolute transform left-1/2 md:left-auto md:mt-4 mt-10 -translate-x-1/2 md:-translate-x-0 text-center md:text-right md:right-4 bottom-4">
			<span class="hidden md:contents">{buttonSwitchLabel}&nbsp;</span><button on:click|preventDefault={switchFormType} class="btn variant-soft-primary">Switch to {buttonSwitchMessage}</button>
		</div> -->
	</div>
</div>

<style lang="sass">
	$yellow: #e3c21e
	$yellow-transparent: #e3c21e88

	#login-page
		background-color: #fff
		box-sizing: border-box
		height: 100%
		display: grid

		padding: 50px 0

		// we don't need a fallback because this image is cosmetic
		// background-image: url($lib/images/grass.jpg) 
		background-image: linear-gradient(to right, rgba(255,255,255,.2) 0%, rgba(255,255,255,.7) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%), url(/assets/grass.jpg)

		// padding-top: 50px
		// padding-bottom: 50px
		// padding-right: 15%

		grid-template-columns: 30% 70%

	#logo-desktop-pill
		background-color: $yellow
		opacity: .3
		width: 100%
		height: 100%

		box-sizing: border-box

		border-radius: 100vmax
		position: absolute
		top: 0
		left: 0 

		animation: pill-pulse infinite 5s

	#logo-desktop
		position: fixed
		top: 50%
		left: 7.5%
		transform: translate(-7.5%, -50%)

		margin: auto
		text-align: center
		box-sizing: unset
		padding: 35px
		// padding: 50px 50px 7.5% 50px
		max-width: 100px

		& > img
			margin: 25px 0px

		& > *:not(#logo-desktop-pill)
			position: relative
			z-index: 2

	h2
		font-size: 24pt

	h1
		margin: 0

	#logo-mobile
		display: none

	
	@keyframes pill-pulse
		0%
			scale: 1
		50%
			scale: 1.18
		100%
			scale: 1

	@media screen and (max-width: 900px)
		#login-page
			grid-template-columns: 1fr
			background-image: linear-gradient(to bottom, rgba(255,255,255,.2) 0%, rgba(255,255,255,.7) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%), url(/assets/grass.jpg)
		#logo-desktop
			display: none
		#logo-mobile
			display: unset
			width: 100%
		#logo-mobile,h1
			text-align: center
		#login-card
			margin-left: 2.5rem
</style>
