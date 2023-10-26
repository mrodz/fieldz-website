<script lang="ts">
  import { currentUser } from "$lib";
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import { userRegionsByUserId } from "../../../graphql/queries";

  

</script>

{#await $currentUser}
  <ProgressRadial />
{:then user}
  
{/await}