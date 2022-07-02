<script lang="ts">
    import {fade} from 'svelte/transition';
    export let content = "Blah blah blah blah blah blah blah blah blah blah blah"
    export let src="https://via.placeholder.com/320"
</script>

<div class="mx-2 shadow-md rounded-md bg-dark-blue text-white text-xl w-80 overflow-hidden" transition:fade>
    <img {src} alt="Not important"/>
    <p class="p-1">{content}</p>
</div>


