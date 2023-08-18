<svelte:head>
	<title>Sign In To Continue</title>
</svelte:head>

<div id="login-page" class="flex-1">
	<div id="logo-desktop">
		<div id="logo-desktop-pill"></div>
		<h2 class="h2">Fieldz</h2>
		<img src="/assets/logo.svg" width="110px" height="110px" alt=""/>
	</div>
	<div class="card p-4 mr-10">
		<img id="logo-mobile" src="/assets/logo.svg" width="100px" height="100px" alt=""/>
		<h1 class="h1">Sign In <span id="logo-mobile">To Fieldz</span></h1>

		<hr class="!border-t-4 my-5" />

		<label class="label">
			<span>Username &mdash;</span>
			<input class="input variant-form-material  w-1/3" type="text" placeholder="Start typing a username here" />
		</label>

		<label class="label">
			<span>Password &mdash;</span>
			<input class="input variant-form-material  w-1/3" type="text" placeholder="Start typing your password here" />
		</label>
	</div>
</div>

<style lang="sass">
	$yellow: #e3c21e
	$yellow-transparent: #e3c21e88
	#login-page
		background-color: #fff
		box-sizing: border-box
		height: 100%
		display: grid

		padding: 50px 0

		// we don't need a fallback because this image is cosmetic
		// background-image: url($lib/images/grass.jpg) 
		background-image: linear-gradient(to right, rgba(255,255,255,.2) 0%, rgba(255,255,255,.7) 20%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%), url(/assets/grass.jpg)

		// padding-top: 50px
		// padding-bottom: 50px
		// padding-right: 15%

		grid-template-columns: 30% 70%

	#logo-desktop-pill
		background-color: $yellow
		opacity: .3
		width: 100%
		height: 100%

		box-sizing: border-box

		border-radius: 100vmax
		position: absolute
		top: 0
		left: 0 

		animation: pill-pulse infinite 5s

	#logo-desktop
		position: relative
		margin: auto
		text-align: center
		box-sizing: unset
		padding: 35px
		// padding: 50px 50px 7.5% 50px
		max-width: 100px

		& > img
			margin: 25px 0px

		& > *:not(#logo-desktop-pill)
			position: relative
			z-index: 2

	h2
		font-size: 24pt

	h1
		margin: 0
		color: $yellow

	#logo-mobile
		display: none

	
	@keyframes pill-pulse
		0%
			scale: 1
		50%
			scale: 1.25
		100%
			scale: 1

	@media screen and (max-width: 900px)
		#login-page
			grid-template-columns: 1fr
		#logo-desktop
			display: none
		#logo-mobile
			display: unset
			width: 100%
		#logo-mobile,h1
			text-align: center
</style>
