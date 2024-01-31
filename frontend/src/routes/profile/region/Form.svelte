<script lang="ts">
  import { Step, Stepper } from "@skeletonlabs/skeleton";
  import { countries, getEmojiFlag, getCountryCode } from "countries-list";

  let regionName: string | undefined;
  $: regionHint = ((): string | null | undefined => {
    if (regionName === undefined) return undefined;
    if (regionName.length < 4)
      return "A region's name must be at least 4 characters long";
    if (regionName.length > 32)
      return "A region's name can't be longer than 32 characters";
    return null;
  })();

  const SPECIAL_COUNTRIES = ["United States", "Mexico"];

  let address: string | undefined;
  let city: string | undefined;
  let zip: string | undefined;
  let country: string;
</script>

<Stepper class="w-5/6 xs:w-2/3 md:w-1/2 mx-auto my-12">
  <Step locked={regionHint !== null}>
    <svelte:fragment slot="header">Enter a name for the region</svelte:fragment>

    <input
      bind:value={regionName}
      class={`input variant-form-material ${
        typeof regionHint === "string" ? "input-error" : ""
      }`}
    />

    {#if regionHint !== null && regionHint !== undefined}
      {regionHint}
    {/if}
  </Step>
  <Step>
    <svelte:fragment slot="header">
      Location Details for "{regionName}"
    </svelte:fragment>

    <form
      class="card p-4 my-4"
      on:submit={(event) => {
        console.log(event);
      }}
    >
      <label class="label my-4">
        <span>Address</span>
        <input
          bind:value={address}
          class="input variant-form-material"
          title="Address"
          type="text"
          placeholder="eg. '1 Field Way'"
        />
      </label>
      <label class="label my-4">
        <span>City</span>
        <input
          bind:value={city}
          class="input variant-form-material"
          title="City"
          type="text"
          placeholder="eg. 'Soccer City'"
        />
      </label>
      <label class="label my-4">
        <span>Country</span>
        <select class="select" bind:value={country}>
          <option value="United States">United States</option>
          <option value="Mexico">Mexico</option>
          {#each Object.values(countries)
            .filter((c) => !(c.name in ["United States", "Mexico"]))
            .sort((x, y) => x.name.localeCompare(y.name)) as country}
            <option value={country.name}>{country.name}</option>
          {/each}
        </select>
      </label>
      <label class="label my-4">
        <span>Zip Code</span>
        <input
          bind:value={zip}
          class="input variant-form-material"
          title="Zip Code"
          type="text"
          inputmode="numeric"
          placeholder="eg. '20500'"
        />
      </label>
    </form>
  </Step>
  <Step locked>
    <svelte:fragment slot="header">Review</svelte:fragment>

    <div>
      You are about to create a new region, <b>{regionName}</b>.
    </div>
    <div>
      Address: <span
        class={`chip variant-ghost-${!!address ? "primary" : "error"}`}
        >{address ?? "unspecified"}</span
      >
    </div>
    <div>
      City: <span
        class={`chip variant-ghost-${!!address ? "primary" : "error"}`}
        >{city ?? "unspecified"}</span
      >
    </div>
    <div>
      Zip: <span class={`chip variant-ghost-${!!address ? "primary" : "error"}`}
        >{zip ?? "unspecified"}</span
      >
    </div>
    <div>
      Country: <span class={`chip variant-ghost-primary`}
        >{country} {getEmojiFlag(getCountryCode(country))}</span
      >
    </div>

    <br />
    <i>
      We're still building this functionality. Please be patient and check back
      soon! Thanks for testing our app :&rpar;
    </i>
  </Step>
</Stepper>
