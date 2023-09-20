<script lang="ts">
	import { currentUser, type User } from "$lib";
	import {
		Avatar,
		FileDropzone,
		ProgressRadial,
		modalStore,
		toastStore,
	} from "@skeletonlabs/skeleton";
	import { Storage } from "aws-amplify";

	let welcomeMessage: string;

	let hours = new Date().getHours();

	if (hours >= 19 || hours < 6) {
		welcomeMessage = "Good Evening";
	} else if (hours >= 12) {
		welcomeMessage = "Good Afternoon";
	} else {
		welcomeMessage = "Good Morning";
	}

	const MAX_IMG_DIM = 256;
	const MIME = "image/jpeg";

	let user: User | undefined;

	if ($currentUser !== undefined) {
		$currentUser.then((u) => (user = u)).catch((e) => console.error(e));
	}

	let customProfileURL: string | undefined;
	let uploadPercent: number | undefined;

	function onChangeHandler(e: Event) {
		const files: FileList = (e.target! as HTMLInputElement).files!;

		const pfp = files.item(0);

		if (pfp === null) {
			console.error("NULL pfp");
			return;
		}

		const blobURL = URL.createObjectURL(pfp);
		const img = new Image();
		img.src = blobURL;
		img.onerror = function () {
			URL.revokeObjectURL(this.src);
			console.error("Cannot load image");
		};
		img.onload = function () {
			URL.revokeObjectURL(img.src);

			// const [newWidth, newHeight] = calculateSize(img, MAX_IMG_DIM, MAX_IMG_DIM);

			const canvas = document.createElement("canvas");
			canvas.width = MAX_IMG_DIM;
			canvas.height = MAX_IMG_DIM;

			const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

			// alert(newWidth);
			// alert(newHeight);

			ctx.drawImage(img, 0, 0, MAX_IMG_DIM, MAX_IMG_DIM);

			const blob = new Promise<Blob>((resolve) => {
				canvas.toBlob((blob) => resolve(blob!), MIME, 0.7);
			});

			blob.then((blob) => {
				const finalImage = URL.createObjectURL(blob);
				modalStore.trigger({
					type: "confirm",
					title: "Upload Image?",
					body: "This cropped photo will be set as your profile picture:",
					image: finalImage,
					response(r) {
						if (!!r) {
							if (user === undefined) {
								throw new Error(
									"user is undefined, cannot upload pfp"
								);
							}

							try {
								Storage.put(
									`pfp-${user.attributes.sub}`,
									blob!,
									{
										resumable: true,
										level: "protected",
										contentType: MIME,
										progressCallback(progress) {
											uploadPercent =
												(progress.loaded /
													progress.total) *
												100;

											if (uploadPercent >= 100) {
												toastStore.trigger({
													message: "You've updated your profile picture!",
													background: "variant-filled-success",
												})
											}
										},
									}
								);

								user.attributes.picture = finalImage;
								customProfileURL = finalImage;
							} catch (error) {
								toastStore.trigger({
									message: `Could not upload profile picture: ${error}`,
									background: "variant-error",
								});
							}
						}
					},
				});
			});

			// canvas.toBlob(
			// 	(blob) => {
			// 		// const finalImage = URL.createObjectURL(blob!);
			// 		// modalStore.trigger({
			// 		// 	type: "confirm",
			// 		// 	title: "Upload Image?",
			// 		// 	body: "This cropped photo will be set as your profile picture:",
			// 		// 	image: finalImage,
			// 		// 	response(r) {
			// 		// 		if (!!r) {
			// 		// 			if (user === undefined) {
			// 		// 				throw new Error(
			// 		// 					"user is undefined, cannot upload pfp"
			// 		// 				);
			// 		// 			}

			// 		// 			try {
			// 		// 				Storage.put(
			// 		// 					`pfp-${user.attributes.sub}`,
			// 		// 					blob!,
			// 		// 					{
			// 		// 						resumable: true,
			// 		// 						level: "protected",
			// 		// 						contentType: MIME,
			// 		// 						progressCallback(progress) {
			// 		// 							uploadPercent =
			// 		// 								(progress.loaded /
			// 		// 									progress.total) *
			// 		// 								100;
			// 		// 						},
			// 		// 					}
			// 		// 				);

			// 		// 				user.attributes.picture = finalImage;
			// 		// 				customProfileURL = finalImage;
			// 		// 			} catch (error) {
			// 		// 				toastStore.trigger({
			// 		// 					message: `Could not upload profile picture: ${error}`,
			// 		// 					background: "variant-error",
			// 		// 				});
			// 		// 			}
			// 		// 		}
			// 		// 	},
			// 		// });
			// 	},
			// 	MIME,
			// 	0.7
			// );
		};
	}
</script>

{#await $currentUser}
	<ProgressRadial />
{:then user}
	<div class="w-11/12 mx-auto">
		<h1 class="h1 my-10">{welcomeMessage}, {user?.attributes.name}</h1>

		<div class="card p-4">
			<h2 class="h2">Account Information</h2>

			<p class="my-8">
				You're using <span class="chip variant-filled bg-primary-500">
					{user?.attributes.email}
				</span> as your email for Fieldz.
			</p>

			<div class="py-4 my-8">
				<div class="grid grid-cols-[200px_1fr_3fr]">
					<Avatar
						class="m-auto grow "
						width="w-16"
						rounded="rounded"
						src={customProfileURL ?? user?.attributes.picture}
					/>
					<div class="grow">
						<p>... is your current profile picture.</p>
						<br />
						<p>You can upload a new profile picture here!</p>
					</div>
					<FileDropzone
						name="pfp-input"
						accept="image/png, image/jpeg, image/jpg"
						on:change={onChangeHandler}
					>
						<svelte:fragment slot="message"
							><b>Upload a photo</b> or drag and drop</svelte:fragment
						>
						<svelte:fragment slot="meta"
							>PNG and JPG Only</svelte:fragment
						>
					</FileDropzone>
				</div>
				{#if uploadPercent !== undefined}
					<div>
						Upload Status:
						<span class="text-green-500">{uploadPercent}%</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
{:catch}
	<ProgressRadial />
{/await}
