<script>
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";

  let ready = false;

  onMount(() => (ready = true));
</script>

<svelte:head>
  <title>Fieldz</title>
</svelte:head>

<section id="landing-graphic">
  <div class="my-auto flex flex-col items-center box-border">
    {#if ready}
      <h1 in:blur={{ duration: 1000 }} class="h1">Fieldz</h1>
    {/if}
    <span class="typewriter">Youth Sports' Best Friend</span>
  </div>
</section>

<section class="mx-10">
  <h2 class="h2 text-center md:text-left">
    Welcome to a New Era of Sports Management
  </h2>
  <p class="my-4 xl:text-2xl text-center md:text-left">
    Fieldz is a web app that aims to help managers of youth sports leagues
    efficiently manage their coaches, referee bookings, and team drafting.
  </p>
  <p class="my-4 xl:text-2xl text-center md:text-left">
    While this app is still in its early stages of development, it is scheduled
    for use by real coaches by August 2024.
  </p>
</section>

<section class="mx-10 flex flex-col md:block">
  <h2 class="h2 mb-5 text-center md:text-left">Free & Open</h2>
  <p class="xl:text-2xl text-center md:text-left">
    Fieldz has an open-source user interface. In fact, you can view all of this
    site's code <a class="link underline hover:text-primary-500" href="https://github.com/mrodz/fieldz-app" target="blank" rel="noopener noreferrer">here</a>. I intend to keep
    this app free for as long as possible, relying entirely on donations to fund deployment costs, hosting, and cloud charges.
  </p>
</section>

<section class="mx-10 flex flex-col md:block pb-10">
  <h2 class="h2 mb-5 text-center md:text-left">General Progress</h2>
  <p class="xl:text-2xl text-center md:text-left mb-4">
    You can check out how development is going by checking out the features
    listed below. Think of this like a roadmap!
  </p>
  <a class="btn w-fit my-2 mx-auto variant-filled bg-red-600" href="/login"
    >Login + Signup</a
  >
  <a class="btn w-fit my-2 mx-auto variant-filled bg-yellow-600" href="/about"
    >Mission Statement</a
  >
  <a class="btn w-fit my-2 mx-auto variant-filled bg-blue-600" href="/about"
    >Profile Page</a
  >
</section>

<style lang="sass">
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

    @media screen and (max-width: 1100px)
        #landing-graphic
            height: min(max(60vh, 200px), 350px)


    @media screen and (max-width: 800px)
        #landing-graphic
            height: min(max(60vh, 125px), 250px)
        h1
            font-size: 42pt
        .typewriter
            font-size: 18pt

    @media screen and (max-width: 600px)
        .typewriter
            font-size: 14pt

    @media screen and (max-width: 400px)
        .typewriter
            white-space: nowrap

</style>
