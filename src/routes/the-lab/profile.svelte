<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Auth } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import Header from '../../components/Header.svelte';
	import profile from '../../Images/profile.jpg';
	import { fly, fade } from 'svelte/transition';
    import LabProject from '../../components/LabProject.svelte';
import LabReview from '../../components/LabReview.svelte';

	//
	const auth: Auth = getContext('auth');
	const user = auth.currentUser;

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
	onMount(() => {
		if (user != null) {
			//Signed in properly!
			console.log(user.email + ' is logged in');
			console.log(user.displayName);
		} else {
			//Not signed in >:(
			console.log('User must sign in to see this page!');
			routeToPage('the-lab/login', false);
		}
	});
</script>

<!-- Main profile place -->
{#if user != null}
<Header/>
<div  class="flex h-[92%]">

    <div class="text-center w-1/5 ml-4 border-r border-solid border-gray-300">
        <div class="rounded-full overflow-hidden shadow-lg m-4 ">
            <img src={profile} alt="Profile" />
        </div>
        <h1 class="text-accent text-2xl">{user.displayName}</h1>
        <h1 class="pt-1">{user.email}</h1>
        {#if user.emailVerified}
            <p class="pt-2">Email verified, you can write reviews!</p>
        {:else}
            <p class="pt-2">Email not verified, verify so you can write reviews!</p>
        {/if}
        <!-- TODO: Add profile badges and neat stuff like that -->
    </div>

    <div class="px-3 w-4/5 mt-5">
        Recently viewed projects:
        <div class="text-center h-1/3 flex overflow-x-scroll w-full">
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
            <LabProject></LabProject>
        </div>
        Recently written reviews:
        <div class="text-center h-1/3 flex overflow-x-scroll w-full">
            <LabReview/>
            <LabReview/>
            <LabReview/>
            <LabReview/>
            <LabReview/>
            <LabReview/>
        </div>
    </div>
</div>
{/if}
