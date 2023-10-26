<script lang="ts">
  import { currentUser, type User } from "$lib";

  import { ProgressRadial, toastStore } from "@skeletonlabs/skeleton";
  import { userBySub, userRegionsByUserId } from "../../../graphql/queries";
  import { API, graphqlOperation } from "aws-amplify";
  import type {
    UserRegionsByUserIdQuery,
    UserBySubQuery,
    User as GQLUser,
    UserRegion,
  } from "../../../API";
  import type { GraphQLResult } from "@aws-amplify/api";

  let user: User;
  let graphqlUser: GQLUser | undefined;
  let regions: UserRegion[] | undefined;

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
        throw Promise.reject("no user in GQL query at index 0");
      }

      let queryRegions = API.graphql<UserRegionsByUserIdQuery>(
        graphqlOperation(userRegionsByUserId, { userId: result.id })
      ) as Promise<GraphQLResult<UserRegionsByUserIdQuery>>;

      queryRegions.then((GQL) => {
        if (GQL.errors !== undefined) {
          toastStore.trigger({
            message: `Error: ${GQL.errors}`,
            background: "variant-filled-error",
          });
          throw GQL.errors;
        }

        regions = GQL.data?.userRegionsByUserId?.items! as UserRegion[];
      });
    });
  });

  const newRegion = async () => {
    alert(1);
  };
</script>

<div class="m-4">
  <h1 class="h1">Your Regions:</h1>

  {#await $currentUser}
    <ProgressRadial />
  {:then user}
    {#if typeof regions != "undefined" && regions.length > 0}
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
      <div class="text-xl text-center mt-4">
        You are not part of any regions.
        <button
          class="btn block mx-auto mt-4 variant-filled-primary"
          on:click={newRegion}>Register a new region as a manager</button
        >
      </div>
    {/if}
  {/await}
</div>

<style lang="sass">

</style>
