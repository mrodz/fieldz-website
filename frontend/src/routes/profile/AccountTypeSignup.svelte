<div class="my-4">
  <h3 class="h3">Choose An Account Type</h3>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
    <div
      class="account-option bg-rose-400 transition-all hover:bg-rose-500"
    >
      <div class="option-title">Coach</div>
      <img src="/assets/soccer-ball.png" alt="" />
	  <div class="account-option-description">
		<label class="label">
			<span>Enter a 4 digit region code</span>
			<input class="input variant-form-material" />
		</label>
		<button class="btn variant-filled mt-4">Continue</button>
	  </div>
    </div>

    <div
      class="account-option bg-amber-200 transition-all hover:bg-amber-300"
    >
      <div class="option-title">Region Administrator</div>
      <img src="/assets/clipboard.svg" alt="" />
	  <div class="account-option-description">
		<button class="btn variant-filled">Click to register a new region</button>
	  </div>
    </div>
  </div>
</div>

<style lang="sass">

	.account-option
		height: 500px

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
			height: 50%
			width: auto
			transition: height .2s

			top: 45%
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
				height: 55%
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
</style>

