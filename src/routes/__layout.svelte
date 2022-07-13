<script>
	import '../app.css';
	import { initializeApp} from 'firebase/app';
	import { setContext } from 'svelte';
 	import { getAuth } from 'firebase/auth';
	import { getFirestore } from 'firebase/firestore'

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
	const auth = getAuth(app);
	const db = getFirestore(app);
	setContext('app', app);
	setContext('auth',auth);
	setContext('db',db)
</script>

<slot />


