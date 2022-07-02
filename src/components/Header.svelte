<script lang="ts">
    import { goto } from '$app/navigation';
	let pages = [
		{ route: '', name: 'Home' },
		{ route: 'about-me', name: 'About Me' },
		{ route: 'projects', name: 'Projects' },
		{ route: 'the-lab', name: 'The Lab' }
	];

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
</script>

<div class="bg-dark-blue h-12 flex justify-between">
	<div class="w-fit self-center">
		<h1 class="text-white text-3xl ml-5">Titan's Blog</h1>
	</div>
	<!-- Buttons -->
	<div class="w-fit self-center">
		{#each pages as { route, name }}
			<button
				class="bg-lighter-blue rounded-md h-8  w-24 text-black hover:bg-light-blue hover:text-white mx-1.5"
				on:click={() => routeToPage(route, false)}>{name}</button
			>
		{/each}
	</div>
</div>
