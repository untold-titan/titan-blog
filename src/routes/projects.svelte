<script>
    import Kirbo from '../Images/Kirbo.png';
    import Header from'../components/Header.svelte';
    import {fly,fade} from 'svelte/transition'
</script>

<head>
	<title>Titan's Blog - Projects</title>
</head>
<Header/>
<div class="h-screen" >
    <!-- Kirbo -->
    <div class="xl:flex">
        <div class="self-center text-accent xs:text-xl xl:text-4xl p-3 text-center">
            Kirbo, the discord bot built for Army Gang. 
            I made this discord bot to 
            help the Army Gang with their daily tasks,
             and to help with some of the 
            things that the server needed, such as a
             Role store, custom roles, and an
            economy feature.
        </div>
        <div class="w-full h-full">
            <img class="rounded-md"src={Kirbo} alt="Kirby"/>
        </div>
    </div>
    <div class="xl:flex bg-secondary">
        <div class="w-full h-full">
            <img class="rounded-md"src={Kirbo} alt="Kirby"/>
        </div>
        <div class="self-center text-accent xs:text-xl xl:text-4xl p-3 text-center">
            Kirbo, the discord bot built for Army Gang. 
            I made this discord bot to 
            help the Army Gang with their daily tasks,
             and to help with some of the 
            things that the server needed, such as a
             Role store, custom roles, and an
            economy feature.
        </div>
    </div>
    <div class="xl:flex bg-tertiary">
        <div class="self-center text-accent xs:text-xl xl:text-4xl p-3 text-center">
            Kirbo, the discord bot built for Army Gang. 
            I made this discord bot to 
            help the Army Gang with their daily tasks,
             and to help with some of the 
            things that the server needed, such as a
             Role store, custom roles, and an
            economy feature.
        </div>
        <div class="w-full h-full">
            <img class="rounded-md"src={Kirbo} alt="Kirby"/>
        </div>
    </div>
</div>