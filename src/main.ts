import App from './App.svelte';

let test:User = {
	firstName: "Aria",
	lastName: "Stark"
}

const app = new App({
	target: document.body,
	props: {
		user: test
	}
});

export default app;