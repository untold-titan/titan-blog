<script lang="ts">
	import Header from '../components/Header.svelte';
	import Project from '../components/Project.svelte';
	import KirboLogo from '../Kirby.png'
	import catAPI from '../CataclysmAPI.png'
	import { fly, fade } from 'svelte/transition';

	let visible = true;
	function projectsVisibility() {
		visible = !visible;
	}

	import { goto } from '$app/navigation';
	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
	
	let projects = [
		{
			"content":"Kirbo Bot. Built for Army Gang",
			"src":KirboLogo,
			"buttonVisible":false
		},
		{
			"content":"Cataclysm API. A RESTful API for Kirbo",
			"src":catAPI,
			"buttonVisible":false
		}
	]

</script>

<head>
	<title>Titan's Blog - Home</title>
</head>

<!--Content -->
<div class="bg-main"in:fly="{{x:2000,duration:1500}}" out:fade>
	<Header />
	<div class="container mx-auto w-fit border-b-2 border-solid border-accent">
		<h1 class="text-center text-accent text-6xl my-4">Titan</h1>
		<h2 class="text-center text-accent text-4xl my-3">Software Intern</h2>
	</div>
	{#if visible}
	<h1 class="text-center text-accent text-2xl pt-7">My Favorite Projects</h1>
	{/if}

	<div class="flex w-fit mx-auto pt-5 flex-wrap">
		{#if visible}
		{#each projects as project}
			<Project {...project}></Project>
		{/each}
	
		{/if}
	</div>
	<div class="mx-auto w-fit">
		<button
			class="bg-tertiary h-8 w-48 text-accent rounded-md mt-5 hover:bg-accent hover:text-accent"
			on:click={() => routeToPage('projects', false)}>
			{#if visible}
			{"View more projects ->"}
			{:else}
			{"View Projects =>"}
			{/if}
			
			</button
		>
	</div>
	<div class="mx-auto w-fit pt-2">
		<button class="underline mx-auto text-accent" on:click={projectsVisibility}>
			{#if visible}
				Hide Projects
			{:else}
				Show Projects
			{/if}
		</button>
	</div>

</div>
