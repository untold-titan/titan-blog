<script lang="ts">
	import { goto } from '$app/navigation';

//TODO: Write props to update this components values

export let projectName = "Project Title";
export let projectDescription = "Project description. This is where my projects and stuff is going to go, so I'm just writing this description to be a place holder for some information that should probably go here once I finish this part of the website";
export let projectRating = 0;
export let projectLocation = "the-lab/profile";
export let projectImg = "https://via.placeholder.com/150"

function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
}
</script>

<div class="rounded-md overflow-hidden bg-secondary flex w-128 h-full mx-2 shrink-0 flex-none">
    <div class="text-center w-max">
        <img src={projectImg} alt="Project"/>
        <h1 class="text-accent text-xl mt-2">{projectName}</h1>
        <h1 class="text-accent mt-2">Average Rating:</h1>
        <!-- TODO: Make a rating display system -->
    </div>
    <div class=" w-96 text-center p-4">
        <p class="text-accent">{projectDescription}</p>
        <button
        on:click={()=>routeToPage(projectLocation,false)}
        class="text-accent w-32 bg-tertiary rounded-md h-8 mt-10 hover:bg-accent hover:text-tertiary"
        >Go to Project
        </button>
    </div>
</div>