<script lang="ts">
	export let list: Array<unknown>;
</script>

{#if list !== undefined}
	<ul class="mb-3">
		{#each list as error}
			<li class="password-error"><img src="/assets/error.svg" alt=""><span>{error}</span></li>
		{/each}
	</ul>
{/if}

<style lang="sass">
	.password-error
		display: grid
		grid-template-columns: 30px 1fr
		align-items: center
		font-style: italic

		& > img
			width: 20px
</style>