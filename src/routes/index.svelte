<script lang="ts">
	import Header from '../components/Header.svelte';
	import Project from '../components/Project.svelte';
	import KirboLogo from '../KirboLogo.jpg'
	import { fly, fade } from 'svelte/transition';

	let visible = true;
	function projectsVisibility() {
		visible = !visible;
	}

	import { goto } from '$app/navigation';
	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
	
</script>

<!--Content -->
<div class="bg-medium-blue"in:fly="{{x:2000,duration:1500}}" out:fade>
	<Header />
	<div class="container mx-auto w-fit">
		<h1 class="text-center text-white text-6xl pt-4">Titan, Software Intern</h1>
		<h1 class="text-center text-white text-xl pt-1">
			C#, HTML, JS, React, JS, CSS, Java, C, Python, Svelte
		</h1>
		<h1 class="text-center text-white text-3xl pt-5">My 3 Favorite Projects</h1>
	</div>
	<div class="mx-auto w-fit pt-0.5">
		<button class="mx-auto text-white" on:click={projectsVisibility}>
			{#if visible}
				Hide Projects
			{:else}
				Show Projects
			{/if}
		</button>
	</div>

	<div class="flex w-fit mx-auto pt-5 flex-wtrap">
		{#if visible}
			<Project src="{KirboLogo}"content="Kirbo Bot. Built for Army Gang, by Army Gang" />
			<Project content="Army Gang, A discord community." />
			<Project content="Another project" />
		{/if}
	</div>
	<div class="mx-auto w-fit">
		<button
			class="bg-lighter-blue h-8 w-48 text-black rounded-md mt-5 hover:bg-light-blue hover:text-white"
			on:click={() => routeToPage('projects', false)}>See more projects -></button
		>
	</div>
</div>
