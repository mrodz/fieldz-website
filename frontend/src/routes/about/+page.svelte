<script>
  import { slide } from "svelte/transition";
</script>

<article in:slide out:slide class="mx-10 mt-10">
  <h1 class="h1">What Do We Do?</h1>

  <div class="card my-4 p-4">
    <h2 class="h2 mb-2">
      I want to simplify the process of reserving field space for youth sports
    </h2>

    <p>
      In my community, this is mostly done via one massive spreadsheet that is
      updated by hand. This creates a plethora of logistical issues and is not
      scalable&hellip; so I came up with this solution to help youth sports
      managers!
    </p>

    <p>
      Fieldz will help district managers of youth sports organize and deal out
      field space for coaches. Coaches will be able to request field space at a
      time slot, and administrators can heed these requests or deal out space on
      their own.
    </p>

    <h2 class="h2 mb-2">Breakdown for the Congressional App Challenge</h2>

    <p>
      Here is a video breakdown that shares a bit of the technical detailing
      behind the app, as well as a quick software demo and talk about Fieldz's
      purpose.
    </p>

    <iframe
	  class="hidden md:block mx-auto my-5"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/LkMUalbn0EM?si=SDJkDvFRWHZBpbQe"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

	<a href="https://youtu.be/LkMUalbn0EM" target="_blank" rel="noopener noreferrer" class="block btn variant-filled-primary md:hidden">Watch Video</a>
  </div>
</article>

<style lang="sass">
	p
		margin-top: 1rem
		margin-bottom: 1rem
</style>
