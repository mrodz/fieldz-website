<script lang="ts">
  import { currentUser, pfp, pollPFP, type User } from "$lib";
  import {
    Avatar,
    FileDropzone,
    ProgressRadial,
    modalStore,
    toastStore,
  } from "@skeletonlabs/skeleton";
  import { onDestroy } from "svelte";
  import { API, Storage, graphqlOperation } from "aws-amplify";
  import type { GraphQLResult } from "@aws-amplify/api";
  import { userBySub, listRegions } from "../../graphql/queries";
  import type {
    UserBySubQuery,
    UserBySubQueryVariables,
    ListRegionsQuery,
    User as GQLUser,
    Region,
  } from "../../API";
  import AccountTypeSignup from "./AccountTypeSignup.svelte";
  import { slide } from "svelte/transition";

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
  let graphQLUser: Promise<GQLUser | undefined> | undefined;
  let regions: Region[] = [];

  if ($currentUser !== undefined) {
    $currentUser
      .then(async (u) => {
        user = u;

        graphQLUser = (async () => {
          const variables: UserBySubQueryVariables = {
            sub: u.attributes.sub,
          };

          let resolved;
          try {
            resolved = await (API.graphql<UserBySubQuery>(
              graphqlOperation(userBySub, variables)
            ) as Promise<GraphQLResult<UserBySubQuery>>);
          } catch (error) {
            (error as GraphQLResult).errors!.forEach((e) => {
              toastStore.trigger({
                message: `Error: ${e.message}`,
                background: "variant-filled-error",
              });
            });

            return Promise.reject(error);
          }

          if (
            resolved.errors !== undefined ||
            resolved.data === undefined ||
            !resolved.data.userBySub
          ) {
            toastStore.trigger({
              message: `Error: ${resolved.errors}`,
              background: "variant-filled-error",
            });
            return Promise.reject(resolved.errors);
          }

          if (resolved.data.userBySub.items.length === 0) {
            toastStore.trigger({
              message: `This is really bad! User not found!`,
              background: "variant-filled-error",
            });
            return Promise.reject(resolved);
          }

          return resolved.data!.userBySub.items[0]! as GQLUser;
        })();
        return graphQLUser;
      })
      .then((graphQLUser) => {
        if (graphQLUser === undefined) {
          regions = [];
          return regions;
        }

        const tryRegionsFetch = API.graphql<ListRegionsQuery>(
          graphqlOperation(listRegions, { userId: graphQLUser.id })
        ) as Promise<GraphQLResult<ListRegionsQuery>>;

        tryRegionsFetch.then((GQL) => {
          if (GQL.errors !== undefined) {
            toastStore.trigger({
              message: `Error: ${GQL.errors}`,
              background: "variant-filled-error",
            });
            throw GQL.errors;
          }

          regions = GQL.data?.listRegions?.items! as Region[];
          return regions;
        });
      })
      .catch((e) => console.error(e));
  }

  // let customProfileURL: string | undefined;
  let uploadPercent: number | undefined;

  let timeout: NodeJS.Timeout | undefined;

  onDestroy(() => {
    clearTimeout(timeout);
  });

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

      const canvas = document.createElement("canvas");
      canvas.width = MAX_IMG_DIM;
      canvas.height = MAX_IMG_DIM;

      const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

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
                throw new Error("user is undefined, cannot upload pfp");
              }

              const FILE_KEY = `pfp-${user.attributes.sub}`;

              try {
                Storage.put(FILE_KEY, blob!, {
                  resumable: true,
                  level: "protected",
                  contentType: MIME,
                  progressCallback(progress) {
                    uploadPercent = (progress.loaded / progress.total) * 100;
                  },
                  completeCallback(event) {
                    uploadPercent = undefined;

                    console.log(`Successfully uploaded ${event.key}`);

                    toastStore.trigger({
                      message: "You've updated your profile picture!",
                      background: "variant-filled-success",
                    });
                  },
                });

                timeout = setTimeout(() => {
                  pollPFP(user!);
                }, 1_000);
              } catch (error) {
                toastStore.trigger({
                  message: `Could not upload profile picture: ${error}`,
                  background: "variant-filled-error",
                });
              }
            }
          }, // END modal response callback
        }); // END modal
      }); // END blob work
    }; // END img.onLoad
  } // END onChangeHandler

  let roleSelectionMenuOpen = false;
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

{#await $currentUser}
  <ProgressRadial />
{:then user}
  <div class="w-11/12 mx-auto">
    <h1 class="text-center sm:text-start text-2xl sm:h1 my-10">
      {welcomeMessage}, {user?.attributes.name}
    </h1>

    <div class="card p-4 mb-4">
      <h2 class="h2 text-center sm:text-start">Account Information</h2>

      <hr class="hr sm:!hidden my-4" />

      {#if graphQLUser !== undefined}
        <section>
          <h3 class="h3 sm:mt-8 text-center sm:text-start">
            Your Regions
            <button
              class="btn variant-outline my-4 mx-auto block sm:inline text-center sm:text-start"
              on:click={() => {
                roleSelectionMenuOpen = !roleSelectionMenuOpen;
                if (roleSelectionMenuOpen) window.scrollBy(0, 1000);
              }}
            >
              {#if roleSelectionMenuOpen}
                Close
              {:else}
                Add Region
              {/if}
            </button>
          </h3>
          <div class="mb-20">
            {#await regions}
              <div class="placeholder" />
            {:then regions}
              {#if regions.length === 0}
                <div
                  class="card w-3/4 sm:w-2/5 md:w-1/2 p-4 lg:w-1/3 md:p-12 lg:p-20 mx-auto text-center bg-gray-400"
                >
                  You aren't a part of any regions &#9888;&#65039;
                </div>
              {:else}
                {#each regions as region}
                  <div>Region: {JSON.stringify(region)}</div>
                {/each}
              {/if}
            {/await}
          </div>

          <hr class="mb-4" />

          {#if roleSelectionMenuOpen && typeof user != "undefined"}
            <div
              class="bg-page my-4"
              in:slide={{ axis: "y", duration: 800 }}
              out:slide={{ axis: "y" }}
            >
              <AccountTypeSignup {user} />

              <hr />
            </div>
          {/if}
        </section>

        <h3 class="h3 sm:mt-8 text-center sm:text-start">
          Raw Data (For Developers)
        </h3>

        {#await graphQLUser}
          <div class="placeholder h-200" />
        {:then graphQLUser}
          <section>
            <div class="my-4 bg-gray-200 p-2">
              {#if typeof graphQLUser !== "undefined"}
                <tt class="break-all">
                  {JSON.stringify(graphQLUser)}
                </tt>
              {:else}
                <p class="my-4">
                  Your account is new and has not been synced yet!
                </p>
              {/if}
            </div>
          </section>
        {:catch error}
          {JSON.stringify(error)}
        {/await}
      {:else}
        <div class="placeholder" />
      {/if}

      <hr class="mb-4" />

      <div
        class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-[1fr_20px_1fr] mb-4 sm:my-4"
      >
        <section>
          <h3 class="h3 sm:mt-8 text-center sm:text-start">Name</h3>
          <p class="my-4">
            When you signed up, you told us your name was <span
              class="chip variant-filled bg-primary-500"
            >
              {user?.attributes.name}
            </span>. If you would like to request a name-change, please email
            <a class="underline" href="mailto:admin@fieldz.app"
              >admin@fieldz.app</a
            >.
          </p>
        </section>
        <span class="hidden sm:inline divider-vertical h-full" />
        <section>
          <h3 class="h3 sm:mt-8 text-center sm:text-start">Email</h3>
          <p class="my-4">
            You're using <span class="chip variant-filled bg-primary-500">
              {user?.attributes.email}
            </span> as your email for Fieldz. This is how we will contact you if
            special circumstances arise.
          </p>
        </section>
      </div>

      <hr class="hr sm:!hidden my-4" />

      <section>
        <h3 class="h3 text-center sm:text-start">Profile Picture</h3>
        <div
          class="grid grid-rows-[1fr_1fr_100px] sm:grid-rows-1 sm:grid-cols-[2fr_2fr_3fr] lg:grid-cols-[1fr_1fr_3fr] my-4"
        >
          <Avatar
            class="m-auto grow"
            width="w-18"
            rounded="rounded-xl"
            src={$pfp}
          />
          <div class="grow my-auto px-2 text-center sm:text-start">
            <p>... is your <b>current</b> profile picture.</p>
            <br />
            <p>You can upload a new profile picture here!</p>
            <br />
            <p>
              <i
                >Note: Please make sure you have the rights to upload the image.
                We are not liable for any misuse.</i
              >
            </p>
          </div>
          <FileDropzone
            name="pfp-input"
            accept="image/png, image/jpeg, image/jpg"
            on:change={onChangeHandler}
          >
            <svelte:fragment slot="message"
              ><b>Upload a photo</b><span class="hidden sm:inline"
                >&nbsp;or drag and drop</span
              ></svelte:fragment
            >
            <svelte:fragment slot="meta">PNG and JPG Only</svelte:fragment>
          </FileDropzone>
        </div>
        {#if uploadPercent !== undefined}
          <div>
            Upload Status:
            <span class="text-green-500">{uploadPercent}%</span>
          </div>
        {/if}
      </section>
    </div>
  </div>
{:catch}
  <ProgressRadial />
{/await}
