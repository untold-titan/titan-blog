<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import { setDoc, doc, type Firestore } from 'firebase/firestore';
	import { fly, fade } from 'svelte/transition';
	import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, type Auth, type User } from 'firebase/auth';
	import { getContext, setContext } from 'svelte';

	const auth:Auth = getContext("auth")
	const db:Firestore = getContext("db")

	let username = '';
	let password = '';
	let password2 = '';
	let email = '';
	let errorText = '';

	async function createAccount() {
        // Checking that the user isn't an idiot
        if(username == ""){
            errorText = "Please enter a username!"
            return;
        }

        if(email == ""){
            errorText = "Please enter an email!"
            return;
        }

        if(!email.includes("@")){
            errorText = "Invalid email!"
            return;
        }

        if(password == "" || password2 == ""){
            errorText = "Please enter a password!"
            return;
        }

		if (password != password2) {
			errorText = "Passwords don't match!";
            return;
		}

		let token = ""

        createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
            //Updating the user's username
            updateProfile(user, {
              displayName:username
            }).then(() => {
                console.log("Username Set!")
            }).catch((error) => {
                errorText = "An error occured!"
                console.log("Error when updating username")
                console.log(error.message)
                return;
            });
            sendEmailVerification(user)
            .then(() => {
                console.log("Sent user verification email!")
            });
			

			//Setting the user's firestore entry
			createFirestoreEntry(user)
            
		})
		.catch((error) => {
            console.log("Error when making account")
            console.log(error.message)
            errorText = error.message
            return;
		});
	}

	async function createFirestoreEntry(user:User){
		let token = await user.getIdToken();
		await setDoc(doc(db, "users", token), {
			recentlyViewed:""
		});
		console.log("Registered User! Redirecting to user page...")
		routeToPage("the-lab/profile",false)
	}

	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
</script>

<div>
	<Header />
	<div class="table absolute top-12 left-0 h-[92%] w-full bg-main">
		<div class="table-cell align-middle">
			<div class="w-fit mx-auto">
				<h1 class="text-4xl text-accent text-center">Register</h1>
				<ul>
					<li>
						<p class="mt-5">Username</p>
						<input bind:value={username} class="bg-secondary m1-5 rounded-md w-48 h-6" />
					</li>
					<li>
						<p class="mt-5">Email</p>
						<input bind:value={email} class="bg-secondary m1-5 rounded-md w-48" />
					</li>
					<li>
						<p class="mt-5">Password</p>
						<input
							bind:value={password}
							class="bg-secondary m1-5 rounded-md w-48"
							type="password"
						/>
					</li>
					<li>
						<p class="mt-5">Confirm Password</p>
						<input
							bind:value={password2}
							class="bg-secondary m1-5 rounded-md w-48"
							type="password"
						/>
					</li>
					<li class="text-center">
						<p>{errorText}</p>
						<button class="h-6 w-24 bg-secondary rounded-md mt-4 text-accent"
                        on:click="{()=>createAccount()}"
                        >Register!</button>
					</li>
					<li class="text-center">
						<button class="text-accent pt-2 underline" on:click="{()=>routeToPage("the-lab/login",false)}">Login instead</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
