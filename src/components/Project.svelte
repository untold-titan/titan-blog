<script lang="ts">
    export let content = "Blah blah blah blah blah blah blah blah blah blah blah"
    export let src="https://via.placeholder.com/320"
    export let buttonVisible = true
    export let buttonDestination = "/www.github.com/cataclysm-interactive/Kirbo-Bot" 
    //If you want to redirect to another page, add a "/" in front of the URL, and remove the "https://"
    //If you want to route to another page on the site, just type the name of the page, no "/" in front
    export let buttonText = "I'm a button"
	import { goto } from '$app/navigation';
	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}

</script>


<div class="xs:mx-auto h-fit xl:mx-4 shadow-md rounded-md bg-secondary text-accent text-xl w-80 overflow-hidden mt-2">
    <img {src} alt="Not important"/>
    <p class="p-1">{content}</p>
    {#if buttonVisible}
        <button class="w-full h-8 rounded-md mt-3 bg-tertiary" on:click={()=>routeToPage(buttonDestination,false)}>{buttonText}</button>
    {/if}
</div>


