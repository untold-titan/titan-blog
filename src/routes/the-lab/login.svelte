<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { getContext} from 'svelte';
	import { signInWithEmailAndPassword, type Auth } from 'firebase/auth';

	let email = '';
	let password = '';
	let errorText = '';

	const auth:Auth = getContext("auth")

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}

	function login() {

        if (email == '') {
			errorText = 'Please enter an email!';
			return;
		}

        if (!email.includes('@')) {
			errorText = 'Invalid email!';
			return;
		}

		if (password == '') {
			errorText = 'Please enter a password!';
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				//Just redirect to the profile page that will get the user.
				routeToPage('the-lab/profile', false);
				// ...
			})
			.catch((error) => {
				const errorMessage = error.message;
				errorText = "An error occured";
				console.log('Error occured with login!');
				console.log(errorMessage);
			});
	}
</script>

<div in:fly={{ x: 2000, duration: 1500 }} out:fade>
	<Header />
	<div class="bg-main table absolute top-12 left-0 h-full w-full">
		<div class="table-cell align-middle">
			<div class="w-fit mx-auto">
				<h1 class="text-4xl text-accent text-center">Login</h1>
				<ul>
					<li>
						<p class="mt-5">Email</p>
						<input bind:value={email} class="bg-secondary m1-5 rounded-md w-48 h-6" />
					</li>
					<li>
						<p class="mt-5">Password</p>
						<input
							bind:value={password}
							class="bg-secondary m1-5 rounded-md w-48"
							type="password"
						/>
					</li>
					<li class="text-center">
						<p>{errorText}</p>
						<button on:click={()=>login()} class="h-6 w-24 bg-secondary rounded-md mt-4 text-accent">Log me IN!</button>
					</li>
					<li class="text-center">
						<button
							class="text-accent pt-2 underline"
							on:click={() => routeToPage('the-lab/register', false)}>Register</button
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
