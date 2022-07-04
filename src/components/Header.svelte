<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let sidebarVisible = false;

	let width = 1224;
	let pages = [
		{ route: '', name: 'Home' },
		{ route: 'about-me', name: 'About Me' },
		{ route: 'projects', name: 'Projects' },
		{ route: 'the-lab', name: 'The Lab' }
	];

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	onMount(() => {
		width = screen.width;
		console.log(screen.width);
	});
</script>

<div class="bg-dark-blue h-12 flex justify-between static">
	<div class="w-fit self-center">
		<h1 class="text-white text-3xl ml-5">Titan's Blog</h1>
	</div>
	<!-- Mobile Version of the Header -->
	{#if width < 1223}
		<button class="text-white pr-3 absolute inset-y-0 right-0 h-fit pt-3 z-10" on:click={toggleSidebar}
			>☰</button
		>
	{/if}
	{#if width > 1225}
		<!-- Buttons -->
		<div class="w-fit self-center">
			{#each pages as { route, name }}
				<button
					class="bg-lighter-blue rounded-md h-8  w-24 text-black hover:bg-light-blue hover:text-white mx-1.5"
					on:click={() => routeToPage(route, false)}>{name}</button>
			{/each}
		</div>
	{/if}
	<!-- Navigation Bar -->
	{#if sidebarVisible == true}
	<div class="bg-dark-blue h-screen w-80 fixed right-0 flex flex-wrap" transition:fly="{{x:500, duration: 500}}" >
		<ul class="pt-9 mx-auto">
			{#each pages as page}
			<li class="pt-5">
				<button class="bg-light-blue rounded-md text-white h-8 w-24" on:click={() => routeToPage(page.route, false)}>{page.name}</button>
			</li>
			{/each}
		</ul>
	</div>
	{/if}
</div>

<!-- Navigation Menu -->
