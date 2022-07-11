<script>
   	import { fly, fade } from 'svelte/transition';
    import Header from '../components/Header.svelte';
    import { getContext } from 'svelte/internal';
import LabProject from '../components/LabProject.svelte';

    const auth = getContext("auth");

    const user = auth.currentUser;

</script>

<head>
	<title>Titan's Blog - The Lab</title>
</head>

<div >
    <Header></Header>

    {#if user == null}
    <div class="mx-auto w-fit text-center bg-main" >
        <h1 class="text-6xl text-accent pt-4">The Lab</h1>
        <h1 class="text-4xl text-accent pt-10 ">What is the Lab?</h1>
        <div class="w-1/2 mx-auto pt-3 text-accent">
            The lab is my public testing place, that allows people to test out a bunch of my experiments, and give feedback and ideas to further my work.
            You will need to be logged into this site to see the experiments so that you can rate them and review them so I can get feedback!
        </div>
        <h1 class="text-4xl text-accent pt-4">What kind of experiments?</h1>
        <div class="w-1/2 mx-auto pt-3 text-accent">
            Currently, there isnt very many experiments, but I am working on more. I plan to add a web3 experiment, and some more svelte experiments.
            All of the code for these experiments is open source, and can be found on <a class="text-accent underline" href="https://github.com/cataclysm-interactive">My Github</a>
        </div>
        <h1 class="text-4xl text-accent pt-4">How do I get started?</h1>
        <div class="w-1/2 mx-auto pt-3 text-accent">
            Login to this site, and then come back to this page to see the experiments that are currently available for testing! 
        </div>
    </div>
    {:else}
    <div class="text-center">
        <h1 class="text-6xl text-accent pt-4">The Lab</h1>
        <h1 class="text-4xl text-accent pt-10 "> Currently open experiments </h1>
        <div class="overflow-auto w-2/3 mx-auto flex mt-4">
            <LabProject/>
            <LabProject/>
            <LabProject/>
            <LabProject/>

        </div>
    </div>
    {/if}



</div>