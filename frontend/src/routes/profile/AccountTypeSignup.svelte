<script lang="ts">
  import { goto } from "$app/navigation";
  import type { User } from "$lib";
  import { popup } from "@skeletonlabs/skeleton";

  export let user: User;

  let _x = user;

  let newCoachCodeEl: HTMLInputElement;

  function newCoach() {}

  function newRegion() {
    goto("/profile/region");
  }
</script>

<div id="account-chooser">
  <h3 class="h3">Choose An Account Type</h3>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
    <div class="account-option bg-rose-400 transition-all hover:bg-rose-500">
      <div class="option-title">Coach</div>
      <img
        src="/assets/soccer-ball.png"
        alt=""
        class="select-none pointer-events-none"
      />
      <div class="account-option-description">
        <label class="label">
          <span>Enter a 4 digit region code</span>
          <span
            use:popup={{
              event: "hover",
              target: "regionCodeInfo",
              placement: "top",
            }}>&#x24D8;</span
          >
          <input
            bind:this={newCoachCodeEl}
            inputmode="numeric"
            class="input variant-form-material w-1/3 text-center block mx-auto"
            placeholder="----"
          />

          <div
            class="card p-4 variant-filled-primary w-96"
            data-popup="regionCodeInfo"
          >
            <p>
              A unique identifier for your region. Ask your region
              administrator!
            </p>
            <div class="arrow variant-filled-primary" />
          </div>
        </label>
        <button class="btn variant-filled mt-4" disabled on:click={newCoach}
          >Join</button
        >
      </div>
    </div>

    <div class="account-option bg-amber-200 transition-all hover:bg-amber-300">
      <div class="option-title">Region Administrator</div>
      <img
        src="/assets/clipboard.svg"
        class="select-none pointer-events-none"
        alt=""
      />
      <div class="account-option-description">
        <label class="label">
          <span class="block mb-4">Register a new Region</span>
          <input
            on:click={newRegion}
            type="button"
            class="btn variant-filled"
            value="Create"
          />
        </label>
        <!-- <button class="btn variant-filled">Next</button> -->
      </div>
    </div>
  </div>
</div>

<style lang="sass">

    .account-option
        height: 330px

        position: relative

        margin-left: 6rem
        margin-right: 6rem
        margin-top: 2rem
        margin-bottom: 2rem

        padding: 2rem
        
        border-radius: 25px

        text-align: center

        & > div
            font-size: 14pt

        & > img
            text-align: center
            position: absolute

            margin: 5px auto 	
            height: 30%
            width: auto
            transition: height .2s

            top: 40%
            left: 50%
            transform: translate(-50%, -50%)
            // transform: translateX(50%)

        & > .account-option-description
            position: absolute
            bottom: 10px
            width: 70%
            left: 50%
            transform: translateX(-50%)


        &:hover
            & img
                height: 32.5%
            & .option-title
                font-weight: bold 

    @media screen and (max-width: 1100px)
        .account-option
            margin-left: 3rem
            margin-right: 3rem
    
    @media screen and (max-width: 575px)
        .account-option
            height: 375px

            & > img
                top: 35%
                height: 35%
            &:hover img
                height: 37.5%
    
    @media screen and (max-width: 400px)
        .account-option
            margin-left: 1rem
            margin-right: 1rem

            & > img
                top: 32.5%
                height: 25%

            &:nth-child(2) > img
                top: 45%

            &:hover img
                height: 26.5%
</style>
