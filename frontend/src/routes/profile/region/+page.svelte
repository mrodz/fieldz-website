<script lang="ts">
  import { currentUser, type User } from "$lib";
  import { slide } from "svelte/transition";

  import {
    modalStore,
    ProgressRadial,
    toastStore,
  } from "@skeletonlabs/skeleton";
  import {
    listRegions,
    userBySub /*userRegionsByUserId*/,
  } from "../../../graphql/queries";
  import { createUser, createRegion } from "../../../graphql/mutations";
  import { API, graphqlOperation } from "aws-amplify";
  import type {
    // UserRegionsByUserIdQuery,
    UserBySubQuery,
    CreateUserMutation,
    User as GQLUser,
    Region,
    ListRegionsQuery,
  } from "../../../API";
  import Form from "./Form.svelte";
  import type { GraphQLResult } from "@aws-amplify/api";

  let user: User;
  let graphqlUser: Promise<GQLUser | undefined> | undefined;
  let regions: Promise<Region[]> | undefined;

  $currentUser?.then((u) => {
    user = u;

    let queryUser = API.graphql<UserBySubQuery>(
      graphqlOperation(userBySub, { sub: u.attributes.sub })
    ) as Promise<GraphQLResult<UserBySubQuery>>;

    graphqlUser = queryUser
      .then(async (GQL): Promise<GQLUser> => {
        if (GQL.errors !== undefined) {
          toastStore.trigger({
            message: `Error: ${GQL.errors}`,
            background: "variant-filled-error",
          });
          return Promise.reject(GQL.errors);
        }

        let result = GQL.data?.userBySub?.items?.[0] as
          | GQLUser
          | null
          | undefined;

        if (!result) {
          console.info("This user has not been added to the GQL backend.");

          const mut = {
            input: {
              sub: u.attributes.sub,
              type: "COACH",
            },
          };

          console.log(mut);

          const rawQueryResponse = API.graphql<CreateUserMutation>(
            graphqlOperation(createUser, mut)
          ) as Promise<GraphQLResult<CreateUserMutation>>;

          const triedRawQueryResponse = await rawQueryResponse;

          if (
            triedRawQueryResponse.errors !== undefined ||
            triedRawQueryResponse.data === undefined ||
            !triedRawQueryResponse.data.createUser
          ) {
            toastStore.trigger({
              message: `Could not sync your account, this is bad! (${triedRawQueryResponse.errors})`,
              background: "variant-filled-error",
            });
            return Promise.reject(
              `Could not sync your account, this is bad! (${triedRawQueryResponse.errors})`
            );
          }

          result = triedRawQueryResponse.data!.createUser;

          toastStore.trigger({
            message: "You were added to our backend!",
            background: "variant-filled-success",
          });
        }

        let queryRegions = API.graphql<ListRegionsQuery>(
          graphqlOperation(listRegions, { userId: result.id })
        ) as Promise<GraphQLResult<ListRegionsQuery>>;

        regions = queryRegions.then((GQL) => {
          if (GQL.errors !== undefined) {
            toastStore.trigger({
              message: `Error: ${GQL.errors}`,
              background: "variant-filled-error",
            });
            return Promise.reject(GQL.errors);
          }

          return GQL.data!.listRegions!.items! as Region[];
        });

        return result;
      })
      .catch((e) => {
        toastStore.trigger({
          message: `Uh Oh! Could not load regions: ${JSON.stringify(e)}`,
          background: "variant-filled-error",
        });
        console.error(e);
        return undefined;
      });
  });

  const promptNewRegionName = () => {
    modalStore.trigger({
      type: "prompt",
      title: "Region Name",
      body: "Use a descriptive name, 32 Characters Max",
      valueAttr: {
        type: "text",
        class: "variant-form-material w-full",
        minlength: 4,
        maxlength: 32,
        required: true,
      },
      response(input: string | boolean) {
        if (typeof input == "string") {
          // promptNewRegionNameConfirm(input);
        }
      },
    });
  };

  const promptNewRegionNameConfirm = (
    name: string,
    address: string,
    zip: string
  ) => {
    modalStore.trigger({
      type: "confirm",
      title: `Creating: ${name}`,
      body: "Are you sure you'd like to proceed?",
      async response(input: boolean) {
        if (input) {
          await newRegion(name, address, zip);
        }
      },
    });
  };

  const newRegion = async (
    regionName: string,
    address: string,
    zip: string
  ) => {
    if (graphqlUser === undefined) {
      toastStore.trigger({
        message: `Please wait, your account hasn't been synced to the backend yet`,
        background: "variant-filled-warning",
      });
      return;
    }

    const resolvedUser = await graphqlUser;

    if (resolvedUser === undefined) {
      toastStore.trigger({
        message: `Your account was not synced to the backend`,
        background: "variant-filled-error",
      });
      return;
    }

    const GQL = (await API.graphql(
      graphqlOperation(createRegion, {
        input: {
          name: regionName,
          user: resolvedUser,
        },
      })
    )) as GraphQLResult<Region>;

    if (GQL.errors !== undefined) {
      toastStore.trigger({
        message: `Error: ${GQL.errors}`,
        background: "variant-filled-error",
      });
      throw GQL.errors;
    }

    console.log(GQL.data!);

    (await regions!).push(GQL.data!);
  };

  let formOpen: boolean = false;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.4.3/mapbox-gl-draw.css"
    type="text/css"
  />
</svelte:head>

<div class="m-4">
  <h1 class="h1">Regions</h1>

  {#if regions === undefined}
    <ProgressRadial class="mx-auto" />
  {:else}
    {#await regions}
      <ProgressRadial class="mx-auto" />
    {:then regions}
      {#if regions.length > 0}
        <dl class="list-dl">
          {#each regions as region, i}
            <div>
              <span class="badge bg-primary-500">Region {i}</span>
              <span class="flex-auto">
                <dt>{region.name}</dt>
                <dd>{region.id}</dd>
              </span>
            </div>
          {/each}
        </dl>
      {:else}
        <div
          class="w-5/6 xs:w-2/3 md:w-1/2 p-4 md:p-8 mx-auto card text-xl text-center mt-4"
        >
          You are not part of any regions.
        </div>
      {/if}
    {/await}
  {/if}

  <hr class="my-8" />

  <button
    class={`btn text-lg md:text-3xl mx-auto block ${
      formOpen ? "variant-ghost" : "variant-ghost-primary"
    }`}
    on:click={() => (formOpen = !formOpen)}
    >{formOpen ? "Quit Creation" : "Create New Region"}</button
  >

  {#if formOpen}
    <div
      in:slide={{ axis: "y", duration: 200 }}
      out:slide={{ axis: "y" }}
    >
      <Form />
    </div>
  {/if}
</div>
