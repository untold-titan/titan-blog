<script>
	import '../app.css';
	// Import the functions you need from the SDKs you need
	import { initializeApp} from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { getPerformance } from 'firebase/performance';
	import { onMount, setContext } from 'svelte';

	onMount(() => {});

	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyCa185q7-I3xkLQZkOAJ5x9C04lV2wKRKk',
		authDomain: 'titan-blog.firebaseapp.com',
		projectId: 'titan-blog',
		storageBucket: 'titan-blog.appspot.com',
		messagingSenderId: '1053067013296',
		appId: '1:1053067013296:web:15ba2003bbad5489ca9f75',
		measurementId: 'G-6HGXF8KLBZ'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	setContext('app', app);
</script>

<slot />
