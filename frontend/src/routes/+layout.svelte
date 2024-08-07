<script lang="ts">
  import { onMount } from "svelte";
  import { dev } from "$app/environment";
  import { currentUser, removeUser, pollUser, pfp, pollPFP } from "$lib";

  import "../app.sass";

  // Your selected Skeleton theme:
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";

  // This contains the bulk of Skeletons required styles:
  import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Toasts!
  import {
    Drawer,
    Modal,
    Toast,
    drawerStore,
    modalStore,
    popup,
    type PopupSettings,
    ProgressRadial,
  } from "@skeletonlabs/skeleton";

  import { toastStore, storePopup } from "@skeletonlabs/skeleton";
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import "../app.postcss";

  import { AppShell, AppBar, Avatar } from "@skeletonlabs/skeleton";

  import { goto } from "$app/navigation";

  const openHamburger = () => {
    drawerStore.open();
  };

  const closeHamburger = () => {
    drawerStore.close();
  };

  const popupFeatured: PopupSettings = {
    // Represents the type of event that opens/closed the popup
    event: "click",
    // Matches the data-popup value on your popup element
    target: "popupFeatured",
    // Defines which side of your trigger the popup will appear
    placement: "bottom",
  };
</script>

<Toast />

<Drawer width="w-5/6 sm:w-2/3">
  <div class="flex flex-col">
    <button
      class="btn variant-filled bg-primary-500 btn-sm my-4 mx-16"
      on:click={closeHamburger}
    >
      <span>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path
            d="M 10,10 L 30,30 M 30,10 L 10,30"
            stroke="black"
            stroke-width="4"
          />
        </svg>
      </span>
    </button>

    <nav class="list-nav">
      <ul class="flex flex-col items-center">
        <li style="display: inline-block">
          <a href="/" on:click={closeHamburger}>
            <span class="badge bg-primary-500 h-16 w-16"
              ><img
                width="25px"
                height="25px"
                src="/assets/home.svg"
                alt=""
              /></span
            >
            <span class="flex-auto text-xl">Home</span>
          </a>
        </li>
        <li style="display: inline-block">
          <a href="/products" on:click={closeHamburger}>
            <span class="badge bg-primary-500 h-16 w-16"
              ><img
                width="25px"
                height="25px"
                src="/assets/services-icon.svg"
                alt=""
              /></span
            >
            <span class="flex-auto text-xl">Services</span>
          </a>
        </li>
        <li style="display: inline-block">
          <a href="/about" on:click={closeHamburger}>
            <span class="badge bg-primary-500 h-16 w-16"
              ><img
                width="25px"
                height="25px"
                src="/assets/about-icon.svg"
                alt=""
              /></span
            >
            <span class="flex-auto text-xl">About Us</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div
    class="block absolute text-center bottom-4 sm:text-lg px-4"
    style="width: inherit"
  >
    <hr class="hr mb-4" />
    &copy; 2023 Fieldz App, Los Angeles, California
  </div>
</Drawer>

<Modal />

<AppShell class="h-full">
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <button class="md:hidden btn btn-sm mr-4" on:click={openHamburger}>
          <span>
            <svg viewBox="0 0 100 80" class="fill-token w-6 h-6">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </span>
        </button>

        <nav class="list-nav hidden sm:inline">
          <ul class="flex flex-row items-center">
            <li class="inline-block mx-4">
              <a href="/">
                <span class="flex-auto text-3xl btn">Fieldz</span>
              </a>
            </li>
            <li class="inline-block">
              <a href="/products">
                <span class="badge bg-primary-500 h-10 w-10"
                  ><img
                    width="25px"
                    height="25px"
                    src="/assets/services-icon.svg"
                    alt=""
                  /></span
                >
                <span class="flex-auto">Services</span>
              </a>
            </li>
            <li class="inline-block">
              <a href="/about">
                <span class="badge bg-primary-500 h-10 w-10"
                  ><img
                    width="25px"
                    height="25px"
                    src="/assets/about-icon.svg"
                    alt=""
                  /></span
                >
                <span class="flex-auto">About Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <slot />
</AppShell>
