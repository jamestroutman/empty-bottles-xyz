<!-- <script>
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
</script> -->

<!-- 
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
</div> -->


<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	import { goto } from '$app/navigation';
	import placeholder from '$lib/assets/placeholder.svg';
	import { toast } from 'svelte-sonner';
	export let data;

	let { supabase } = data;

	let first_name = '';
	let last_name = '';
	let email = '';
	let password = '';
	let passwordConfirmation = '';
	let errorMessage = '';

	async function handleSignUp() {
		// Form Validation
		if(first_name.length === 0 || last_name.length === 0){
			errorMessage = 'Name is required';
			return;
		}

		if(email.length === 0){
			errorMessage = 'Email is required';
			return;
		}

		if(password.length === 0){
			errorMessage = 'Password is required';
			return;
		}

		if (password !== passwordConfirmation) {
			errorMessage = 'Passwords do not match';
			return;
		}

		// Sign up account
		const { data: signUpData, error: signUpError } 
			= await supabase.auth.signUp({
			email,
			password
		});

		if (signUpError) {
			errorMessage = signUpError.message;
			return;
		} else {
			console.log(signUpData);
		}

		// Save Profile
		const { data: profileData, error: profileError } 
			= await supabase
			.from('profile')
			.insert({
				'user_id': signUpData.user.id,
				'first_name': first_name,
				'last_name': last_name,
				'email': email,
			})
			.select();

		if (profileError) {
			errorMessage = profileError.message;
			return;
		} else {
			console.log(profileData);
		}

		toast('Confirmation Email Sent');
		goto('/');
	}

	async function handleGoogleSignUp() {
		toast('Google not yet available');
	}
  </script>
  
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="flex items-center justify-center py-12">  
		  <Card.Root class="mx-auto max-w-sm">
			<Card.Header>
			  <Card.Title class="text-xl">Sign Up</Card.Title>
			  <Card.Description>Enter your information to create an account</Card.Description>
			</Card.Header>
			<Card.Content>
			  <div class="grid gap-4">
				<div class="grid grid-cols-2 gap-4">
				  <div class="grid gap-2">
					<Label for="first-name">First name</Label>
					<Input 
						id="first-name" 
						placeholder="Jose" 
						bind:value={first_name}
						required />
				  </div>
				  <div class="grid gap-2">
					<Label for="last-name">Last name</Label>
					<Input 
						id="last-name" 
						placeholder="Cuervo" 
						bind:value={last_name}
						required />
				  </div>
				</div>
				<div class="grid gap-2">
				  <Label for="email">Email</Label>
				  <Input 
				  	id="email" 
					type="email" 
					placeholder="m@example.com" 
					bind:value={email}
					required />
				</div>
				<div class="grid gap-2">
				  <Label for="password">Password</Label>
				  <Input 
				  	id="password" 
					type="password"
					bind:value={password}
					 />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password Confirmation</Label>
					<Input 
						id="password-confirmation" 
					  type="password"
					  bind:value={passwordConfirmation}
					   />
				  </div>
				{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
				<Button 
					type="submit"
					on:click={handleSignUp}
					class="w-full">Create an account</Button>
				<Button 
					variant="outline" 
					on:click={handleGoogleSignUp}
					class="w-full">Sign up with Google</Button>
			  </div>
			  <div class="mt-4 text-center text-sm">
				Already have an account?
				<a href="/auth/login" class="underline"> Sign in </a>
			  </div>
			</Card.Content>
		  </Card.Root>
		  
	</div>
	<div class="hidden bg-muted lg:block">
	  <img
		src="{placeholder}"
		alt="placeholder"
		width="1920"
		height="1080"
		class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
	  />
	</div>
  </div>
  