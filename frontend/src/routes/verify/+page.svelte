<script lang="ts">
	import { page } from '$app/stores';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { Auth } from 'aws-amplify';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { throttle } from 'lodash'
    
    const email = window.atob($page.url.searchParams.get('u'));

	let isDisabled = false;

	const resendCode = throttle(async () => {
		try {
			await Auth.resendSignUp(email);
			toastStore.trigger({
				message: `Sent a new code to ${email}`,
				background: 'variant-filled-success',
			});
		} catch (error) {
			toastStore.trigger({
				message: `${error}`,
				background: 'variant-filled-error',
			});
		}
	}, 60_000);
	
	async function verifySubmit(event: SubmitEvent) {
		event.preventDefault();
		isDisabled = true;

		const data = new FormData(event.target! as HTMLFormElement);
		const code: string = data.get("code")!;

		if (code.length === 0) {
			isDisabled = false;
			toastStore.trigger({
				message: `Please enter your code before continuing`,
				background: 'variant-filled-error',
			});
			return;
		}

		let response;
		try {
			response = await Auth.confirmSignUp(email, code);
		} catch (error) {
			isDisabled = false;
			toastStore.trigger({
				message: `Could not verify: ${error}`,
				background: 'variant-filled-error',
			});
			return;
		}

		if (response === "SUCCESS") {

		}

		isDisabled = false;
	}
</script>

<div class="flex h-full align-center justify-center">
	<div class="card my-auto min-h-1/2 w-3/4 md:w-1/2 p-4">
		<h1 class="h1 text-center">Please Verify Your Email</h1>
		<p class="text-center my-4">
			We sent you an email at <b>{email}</b> containing a verification code.
			<br/>
			Please enter that code so that we can verify your account!
		</p>

		<form on:submit|preventDefault={verifySubmit}>
			<div class="flex justify-center card card-hover variant-ghost-primary sm:p-4 md:p-10">
				<label for="code-input" class="hidden sm:inline label mr-4">
					Code:
				</label>
				<input disabled={isDisabled} id="code-input" name="code" class="input w-full sm:w-1/6 variant-form-material" type="text" placeholder="******" />
			</div>

			{#if isDisabled}
				<ProgressRadial width="w-12" />
			{:else}
				<input class="input mt-5 variant-filled-surface btn" disabled={isDisabled} type="submit" value="Submit">
			{/if}
		</form>

		<button class="btn w-full mt-5 variant-ghost-surface" on:click={resendCode}>Re-send verification code</button>
	</div>
</div>