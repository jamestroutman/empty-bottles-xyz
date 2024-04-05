<script>
	import { goto } from '$app/navigation';
	import placeholder from '$lib/assets/placeholder.svg';
	import { toast } from 'svelte-sonner';
	export let data;
	
	let { supabase } = data;
	let email = '';
	let password = '';
	let errorMessage = '';

	async function handleLogin() {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			errorMessage = error.message;
		} else {
			toast("Signed In Successfully");
			goto('/');
		}
	}
</script>

<div class="grid min-h-[600px] items-center gap-6 p-6 lg:grid-cols-2 xl:min-h-[800px]">
	<div class="space-y-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-bold">Login</h1>
			<p class="text-gray-500 dark:text-gray-400">
				Enter your email below to login to your account
			</p>
			<a class="ml-auto inline-block text-sm underline" href="/auth/signup"> Need an Account? </a>
		</div>
		<div class="space-y-4">
			<div class="space-y-2">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="email">Email</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="email"
					placeholder="Email"
					required
					type="email"
					bind:value={email}
				/>
			</div>
			<div class="space-y-2">
				<div class="flex items-center">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="password">Password</label
					><a class="ml-auto inline-block text-sm underline" href="/auth/forgot-password"> Forgot your password? </a>
				</div>
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="password"
					placeholder="Password"
					type="password"
					bind:value={password}
				/>
			</div>
			{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
			<button
				class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
				on:click={handleLogin}
			>
				Login
			</button>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<img
			src={placeholder}
			alt="Empty Bottles Logo"
			width="500"
			height="300"
			class="w-full max-w-[500px] aspect-[4/3] object-cover"
		/>
	</div>
</div>
