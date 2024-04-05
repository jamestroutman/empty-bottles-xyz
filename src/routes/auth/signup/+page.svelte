<script>
	import { goto } from '$app/navigation';
	import placeholder from '$lib/assets/placeholder.svg';
	import { toast } from 'svelte-sonner';
	export let data;

	let { supabase } = data;

	let email = '';
	let password = '';
	let passwordConfirmation = '';
	let errorMessage = '';

	async function handleSignUp() {
		if (password !== passwordConfirmation) {
			errorMessage = 'Passwords do not match';

			return;
		}

		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
			errorMessage = error.message;
		} else {
			goto('/');
		}
	}
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/AhGl7thfS2A
-->
<div
	class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm"
	data-v0-t="card"
>
	<div class="flex flex-col p-6 space-y-1">
		<h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">Sign up</h3>
		<p class="text-sm text-muted-foreground">Enter your email below to create an account</p>
		<a class="ml-auto inline-block text-sm underline" href="/auth/login"> Already have an Account? </a>
	</div>
	<div class="p-6">
		<div class="space-y-4">
			<div class="space-y-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="email">Email</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="email"
					placeholder="m@example.com"
					bind:value={email}
					required
					type="email"
				/>
			</div>
			<div class="relative space-y-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="password">Password</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="password"
					bind:value={password}
					required
					type="password"
				/>
			</div>
			<div class="space-y-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="passwordConfirmation"
				>
					Confirm Password
				</label><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="passwordConfirmation"
					bind:value={passwordConfirmation}
					required
					type="password"
				/>
			</div>
			{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
			<button
				class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
				type="submit"
				on:click={handleSignUp}
			>
				Sign up
			</button>
		</div>
	</div>
</div>
