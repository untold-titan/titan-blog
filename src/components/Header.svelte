<script lang="ts">
	import { goto } from '$app/navigation';
	import { signOut, type Auth } from 'firebase/auth';
	import { getContext, onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const auth:Auth = getContext("auth")
	const user = auth.currentUser

	let sidebarVisible = false;

	let width = 1224;
	let pages = [
		{ route: '', name: 'Home' },
		{ route: 'about-me', name: 'About Me' },
		{ route: 'projects', name: 'Projects' },
		{ route: 'the-lab', name: 'The Lab' },
		
	];

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	function signOutUser(){
		signOut(auth).then(() => {
		  	// Sign-out successful.
			routeToPage("",false)
		}).catch((error) => {
		  	// An error happened.
			console.log(error.message)
		});
	}

	onMount(() => {
		width = screen.width;
		console.log(screen.width);
	});
</script>

<div class="bg-secondary h-12 flex justify-between static">
	<div class="w-fit self-center">
		<h1 class="text-accent text-3xl ml-5">Titan's Blog</h1>
	</div>
	<!-- Mobile Version of the Header -->
	{#if width < 1223}
		<button class="text-accent pr-3 absolute inset-y-0 right-0 h-fit pt-3 z-10" on:click={toggleSidebar}
			>☰</button
		>
	{/if}
	<!-- Navigation Bar -->
	{#if width > 1225}
		<!-- Buttons -->
		<div class="w-fit self-center">
			{#each pages as page}
				<button
					class="bg-tertiary  rounded-md h-8  w-24 text-accent hover:bg-accent hover:text-tertiary mx-1.5"
					on:click={() => routeToPage(page.route, false)}>{page.name}
				</button>
			{/each}
			{#if user}
				<!-- If the user is signed in, show the profile and log out button -->
				<button class="bg-tertiary  rounded-md h-8  w-24 text-accent hover:bg-accent hover:text-tertiary mx-1.5" on:click={()=>routeToPage("the-lab/profile",false)}>{user.displayName}</button>
				<button 
					class="bg-tertiary  rounded-md h-8  w-8 text-black hover:bg-accent hover:text-accent mx-1.5 bg-logout bg-no-repeat bg-center"
					on:click={()=> signOutUser()}>`
				<!-- For some reason, this button wont center unless theres text in it.  -->
				</button>
			{:else}
			<!-- If the user is logged out, show the login button -->
			<button 
				class="bg-tertiary  rounded-md h-8  w-8 text-black hover:bg-accent hover:text-accent mx-1.5 bg-login bg-no-repeat bg-center"
				on:click={()=> routeToPage("the-lab/login",false)}>`
			<!-- For some reason, this button wont center unless theres text in it.  -->
			</button>
			{/if}
		</div>
	{/if}


	<!-- Navigation Side Menu -->
	{#if sidebarVisible == true}
	<div class="bg-secondary h-screen w-60 fixed right-0 flex flex-wrap" transition:fly="{{x:500, duration: 500}}" >
		<ul class="pt-9 mx-auto">
			{#each pages as page}
			<li class="pt-5">
				<button class="bg-tertiary  rounded-md h-8  w-24 text-accent hover:bg-accent hover:text-accent mx-1.5" on:click={() => routeToPage(page.route, false)}>{page.name}</button>
			</li>
			{/each}
		</ul>

	</div>
	{/if}
</div>

<!-- Navigation Menu -->
