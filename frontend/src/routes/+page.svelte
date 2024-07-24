<script lang="ts">
  import { onMount } from "svelte";
  import { blur, fade, slide } from "svelte/transition";
  import markdownit from "markdown-it";

  const md = markdownit();

  let ready = false;

  let releaseData: Promise<any> | undefined = undefined;

  onMount(() => {
    ready = true;

    releaseData = fetch(
      "https://api.github.com/repos/mrodz/fieldz-desktop/releases/latest"
    )
      .then((response) => {
        return response.json().then((response) => {
          if (
            response !== null &&
            typeof response === "object" &&
            "message" in response &&
            typeof response.message === "string" &&
            response.message.includes("API rate limit")
          ) {
            return Promise.reject(
              "You've loaded the release data too many times, please come back later"
            );
          }

          return response;
        });
      })
      .catch((e) => {
        console.error(e);
      });
  });

  const screenshots = [
    {
      url: "assets/app-home.jpeg",
      alt: "Desktop App home view",
    },
    {
      url: "assets/field-editor.jpeg",
      alt: "Field Editor view",
    },
    {
      url: "assets/scheduler-screenshot.jpeg",
      alt: "Scheduler view",
    },
  ] as const;
</script>

<svelte:head>
  <title>Fieldz</title>
</svelte:head>

<main>
  <section id="landing-graphic">
    <div class="my-auto flex flex-col items-center box-border">
      {#if ready}
        <h1 in:blur={{ duration: 1000 }} class="h1">Fieldz</h1>
      {/if}
      <span class="typewriter">Youth Sports' Best Friend</span>
    </div>
  </section>

  <section in:fade={{}}>
    <div id="screenshots" class="grid grid-cols-11 grid-rows-11 my-8">
      {#each screenshots as screenshot, i (screenshot.url)}
        {#if ready}
          <img
            in:fade={{ delay: i * 750, duration: 750 }}
            class="app-screenshot"
            src={screenshot.url}
            alt={screenshot.alt}
          />
        {/if}
      {/each}

      {#if ready}
        <div class="p-8" in:slide={{ axis: "y" }}>
          <section class="card h-full p-8">
            <h2 class="h2 text-center md:text-left">
              Welcome to a New Era of Sports Management
            </h2>
            <p class="my-4 xl:text-2xl text-center md:text-left">
              Fieldz is a web app that aims to help managers of youth sports
              leagues efficiently manage their coaches, referee bookings, and
              team drafting.
            </p>
            <p
              id="expected-release-text"
              class="my-4 xl:text-2xl text-center md:text-left"
            >
              While this app is still in its early stages of development, it is
              scheduled for use by real coaches in August 2024.
            </p>
          </section>
        </div>
      {/if}
    </div>
  </section>

  <hr class="max-[400px]:!hidden" />

  <section class="mx-10 flex flex-col md:block">
    <h2 class="h2 mb-5 text-center md:text-left">Free & Open</h2>
    <p class="xl:text-2xl text-center md:text-left">
      Fieldz is an open-source application, which means that you can find all of
      the app's source code online! Everything, which includes the desktop
      application, backend code, database schema, and cloud functions are
      available under an MPL-2.0 license. In fact, you can view all of the app's
      code

      <a
        class="link underline hover:text-primary-500"
        href="https://github.com/mrodz/fieldz-desktop"
        target="blank"
        rel="noopener noreferrer">here</a
      >.

      <br />
      <br />

      I intend to keep this app free for as long as possible, relying entirely
      on donations to fund deployment costs, hosting, and cloud charges.
    </p>
  </section>

  <section class="mx-10 flex flex-col md:block pb-10">
    <h2 class="h2 mb-5 text-center md:text-left">General Progress</h2>
    {#if releaseData !== undefined}
      {#await releaseData}
        Loading release data...
      {:then releaseData}
        {#if releaseData === undefined || "message" in releaseData}
          <a
            class="mx-4 link underline hover:text-primary-500"
            href="https://github.com/mrodz/fieldz-desktop/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            See latest release here
          </a>
        {:else}
          <a
            class="mx-4"
            href="https://github.com/mrodz/fieldz-desktop/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="chip variant-filled">Latest Release</span>
            {releaseData.name}
          </a>

          <div class="card m-4 p-4">
            {@html md.render(releaseData.body)}
          </div>
        {/if}
      {:catch err}
        {JSON.stringify(err)}
      {/await}
    {/if}
  </section>
</main>

<style lang="sass">

  @mixin grid-setup($col-start, $col-span, $row-start, $row-span)
    grid-row: span $row-span / span $row-span
    grid-row-start: $row-start
    grid-column: span $col-span / span $col-span
    grid-column-start: $col-start

  .app-screenshot
    border-radius: 10px
    width: 100%
    height: auto

    &:nth-child(1)
      @include grid-setup(2, 3, 1, 2)
    &:nth-child(2)
      @include grid-setup(8, 3, 2, 2)
    &:nth-child(3)
      @include grid-setup(4, 3, 4, 2)
    
  #screenshots div
    @include grid-setup(5, 3, 2, 2)

  #landing-graphic
    // Required attribution: "Background courtesy of SVGBackgrounds.com"
    // (seriously, they have cool stuff: check them out!!)
    background-image: url("/assets/landing.svg")
    background-position: center
    background-size: cover
    background-repeat: no-repeat

    height: min(max(60vh, 300px), 500px)

    display: flex
    justify-content: center

  h1
    font-family: 'Rubik Doodle Triangles'
    font-size: 82pt
    color: #fff

  h2
    margin-top: 1em

  .typewriter
    max-width: fit-content
    height: 100%

    padding: .3em

    color: #fff
    font-size: 24pt

    overflow: hidden
    animation: typing 3.5s steps(28, end) forwards, blink-caret .5s step-end infinite
    border-right: .15em solid #fcc603
    white-space: nowrap
    letter-spacing: .1em
    margin: 0 auto

  @keyframes typing
    from, 20%
      width: 0
      padding: 0
    21%
      padding: inherit

    to
      width: 100%

  @keyframes blink-caret
    from, to
      border-color: transparent
    50%
      border-color: #fcc603

  @media screen and (max-width: 1500px)
    h1
      font-size: 56pt

    .app-screenshot
      &:nth-child(1)
        @include grid-setup(2, 3, 1, 2)
      &:nth-child(2)
        @include grid-setup(8, 3, 2, 2)
      &:nth-child(3)
        @include grid-setup(2, 3, 3, 2)
    
    #screenshots div
      @include grid-setup(5, 3, 2, 2)

  @media screen and (max-width: 1100px)
    #landing-graphic
      height: min(max(60vh, 200px), 350px)

    .app-screenshot
      &:nth-child(1)
        @include grid-setup(2, 3, 2, 2)
      &:nth-child(2)
        @include grid-setup(8, 3, 1, 2)
      &:nth-child(3)
        margin-top: 2rem
        @include grid-setup(4, 3, 4, 2)
    
    #screenshots div
      @include grid-setup(6, 6, 3, 1)


  @media screen and (max-width: 800px)
    #landing-graphic
      height: min(max(60vh, 125px), 250px)
    h1
      font-size: 42pt
    .typewriter
      font-size: 18pt
    .app-screenshot
      &:nth-child(1)
        @include grid-setup(4, 3, 1, 2)
      &:nth-child(2)
        margin-top: 0
        @include grid-setup(4, 3, 5, 2)        
      &:nth-child(3)
        @include grid-setup(2, 3, 3, 2)
        margin: auto
        transform: scale(1.3)

  @media screen and (max-width: 600px)
    .typewriter
      font-size: 14pt

    .app-screenshot
      &:nth-child(1)
        @include grid-setup(2, 7, 1, 1)
      &:nth-child(2)
        @include grid-setup(4, 7, 2, 1)
        margin: 1rem 0
      &:nth-child(3)
        @include grid-setup(2, 7, 3, 1)
        transform: unset

    #screenshots div
      padding: 0
      margin-top: 1rem
      @include grid-setup(3, 7, 4, 1)

      & section
        padding: 1rem

    #expected-release-text
      display: none

  @media screen and (max-width: 400px)
    .typewriter
      white-space: nowrap
    .app-screenshot
      &:nth-child(1)
        @include grid-setup(2, 7, 2, 1)
      &:nth-child(2)
        @include grid-setup(4, 7, 3, 1)
        margin: 1rem 0
      &:nth-child(3)
        @include grid-setup(2, 7, 4, 1)
        transform: unset

    #screenshots div
      padding: 0
      margin-bottom: 2rem
      @include grid-setup(2, 9, 1, 1)

</style>
