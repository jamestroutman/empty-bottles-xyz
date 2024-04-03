<script>
	import { createEventDispatcher } from 'svelte';
	export let data;
	
	let { supabase } = data;
	
	let email = '';
	let errorMessage = '';
	let successMessage = '';
	
	const dispatch = createEventDispatcher();
	
	async function handleSubmit() {
		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email);
			if (error) {
				errorMessage = error.message;
			} else {
				successMessage = 'Password reset email sent. Please check your inbox.';
				email = '';
			}
		} catch (error) {
			errorMessage = 'An error occurred. Please try again.';
		}
	}
	function handleBackToLogin() {
		dispatch('backToLogin');
	}
</script>

<div
	class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm"
	data-v0-t="card"
>
	<div class="flex flex-col p-6 space-y-1">
		<h3 class="whitespace-nowrap tracking-tight text-2xl font-bold">Forgot password</h3>
		<p class="text-sm text-muted-foreground">Enter your email below to reset your password</p>
	</div>
	<div class="p-6">
		<div class="space-y-4">
			<div class="space-y-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="email">Email</label
				>
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="email"
					placeholder="m@example.com"
					required
					type="email"
					bind:value={email}
				/>
			</div>
			{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
			{#if successMessage} <p class="text-green-500">{successMessage}</p> {/if}
			<button
				class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
				type="submit"
				on:click={handleSubmit}
			>
				Submit
			</button>
		</div>
		<div class="mt-4 text-center text-sm">
			<a class="underline" href="/login" on:click|preventDefault={handleBackToLogin}> Back to login </a>
		</div>
	</div>
</div>
