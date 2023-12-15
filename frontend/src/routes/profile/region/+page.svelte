<script lang="ts">
  import { currentUser, type User } from "$lib";

  import { modalStore, ProgressRadial, toastStore } from "@skeletonlabs/skeleton";
  import { listRegions, userBySub, /*userRegionsByUserId*/ } from "../../../graphql/queries";
  import { API, graphqlOperation } from "aws-amplify";
  import type {
    // UserRegionsByUserIdQuery,
    UserBySubQuery,
    User as GQLUser,
    Region,
    CreateRegionInput,
    ListRegionsQuery,
  } from "../../../API";
  import type { GraphQLResult } from "@aws-amplify/api";
    import { createRegion } from "../../../graphql/mutations";

  let user: User;
  let graphqlUser: GQLUser | undefined;
  let regions: Region[] = [];

  $currentUser?.then((u) => {
    user = u;

    let queryUser = API.graphql<UserBySubQuery>(
      graphqlOperation(userBySub, { sub: u.attributes.sub })
    ) as Promise<GraphQLResult<UserBySubQuery>>;

    queryUser.then((GQL) => {
      if (GQL.errors !== undefined) {
        toastStore.trigger({
          message: `Error: ${GQL.errors}`,
          background: "variant-filled-error",
        });
        throw GQL.errors;
      }

      const result = GQL.data?.userBySub?.items?.[0] as
        | GQLUser
        | null
        | undefined;

      if (!result) {
        console.info("This user has not been added to the GQL backend.");
        return Promise.reject("no user in GQL query at index 0");
      }

      let queryRegions = API.graphql<ListRegionsQuery>(
        graphqlOperation(listRegions, { userId: result.id })
      ) as Promise<GraphQLResult<ListRegionsQuery>>;

      queryRegions.then((GQL) => {
        if (GQL.errors !== undefined) {
          toastStore.trigger({
            message: `Error: ${GQL.errors}`,
            background: "variant-filled-error",
          });
          throw GQL.errors;
        }

        regions = GQL.data?.listRegions?.items! as Region[];
      });
    }).catch((e) => {
      toastStore.trigger({
        message: `Uh Oh! Could not load regions: ${e}`,
				background: 'variant-filled-error'
      })
      console.info(e);
    });
  });

  const promptNewRegionName = () => {
    modalStore.trigger({
      type: "prompt",
      title: "Region Name",
      body: "Use a descriptive name, 32 Characters Max",
      valueAttr: { type: 'text', class: "variant-form-material w-full", minlength: 4, maxlength: 32, required: true },
      response(input: string | boolean) {
        if (typeof input == "string") {
          promptNewRegionNameConfirm(input)
        }
      },
    })
  }

  const promptNewRegionNameConfirm = (name: string) => {
    const copied = name;
    modalStore.trigger({
      type: "confirm",
      title: `Creating: ${copied}`,
      body: "Are you sure you'd like to proceed?",
      async response(input: boolean) {
        if (input) {
          await newRegion(copied)
        }
      }
    })
  }

  const newRegion = async (regionName: string) => {
    console.debug(regionName);
    const GQL = await API.graphql(graphqlOperation(createRegion, {
      input: {
        name: regionName
      }
    })) as GraphQLResult<Region>

    if (GQL.errors !== undefined) {
      toastStore.trigger({
        message: `Error: ${GQL.errors}`,
          background: "variant-filled-error",
        });
        throw GQL.errors;
    }

    console.log(GQL.data!)

    regions.push(GQL.data!)
  };
</script>

<svelte:head>
  <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.4.3/mapbox-gl-draw.css' type='text/css' />
</svelte:head>

<div class="m-4">
  <h1 class="h1">Regions</h1>

  {#await $currentUser}
    <ProgressRadial />
  {:then user}
    {#if regions.length > 0}
      <dl class="list-dl">
        {#each regions as region}
          <div>
            <span class="badge bg-primary-500">💀</span>
            <span class="flex-auto">
              <dt>Title</dt>
              <dd>{JSON.stringify(region)}</dd>
            </span>
          </div>
        {/each}
      </dl>
    {:else}
      <div class="w-1/2 mx-auto p-8 card text-xl text-center mt-4">
        You are not part of any regions.
        <button
          class="btn block mx-auto mt-4 variant-filled-primary"
          on:click={() => newRegion("idk")}>Register a new region as a manager</button
        >
      </div>
    {/if}

    <hr class="my-8" />

    <h2 class="h2">New Region</h2>
    <form class="card p-4 my-4">
      <label class="label">
        <span>Region Name</span>
        <input
          class="input variant-form-material"
          title="Display Name"
          type="text"
          placeholder="eg. 'Shire Western Fields'"
        />
      </label>
      <label class="label">
        <span />
        <input
          class="input variant-form-material"
          title="Display Name"
          type="text"
          placeholder="eg. 'Shire Western Fields'"
        />
      </label>
      <button class="btn variant-filled">Register</button>
    </form>
  {/await}
</div>

<style lang="sass">
</style>
