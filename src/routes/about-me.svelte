<script lang="ts">
    import Header from '../components/Header.svelte';
    import {fly,fade} from 'svelte/transition';
</script>

<div class="bg-medium-blue h-screen" in:fly="{{x:2000, duration: 1500}}" out:fade>
    <Header></Header>
    <h1>Who am I?</h1>
    <div>
        I'm Titan, a software intern working at Arcurve Inc. in Calgary, AB. I have been programming for quite a while, and have used a variety of different technologies.
        
    </div>
</div>