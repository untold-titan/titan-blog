<script>
    import Kirbo from '../Kirbo.png';
    import Header from'../components/Header.svelte';
    import {fly,fade} from 'svelte/transition'
</script>

<div class="bg-light-blue h-screen" in:fly="{{x:2000, duration:1500}}" out:fade>
    <Header></Header>
    <!-- Kirbo -->
    <div class="xl:flex bg-medium-blue">
        <div class="self-center text-white xs:text-xl xl:text-4xl p-3 text-center">
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
    <div class="xl:flex bg-light-blue">
        <div class="w-full h-full">
            <img class="rounded-md"src={Kirbo} alt="Kirby"/>
        </div>
        <div class="self-center text-white xs:text-xl xl:text-4xl p-3 text-center">
            Kirbo, the discord bot built for Army Gang. 
            I made this discord bot to 
            help the Army Gang with their daily tasks,
             and to help with some of the 
            things that the server needed, such as a
             Role store, custom roles, and an
            economy feature.
        </div>
    </div>
    <div class="xl:flex bg-lighter-blue">
        <div class="self-center text-black xs:text-xl xl:text-4xl p-3 text-center">
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