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
		goto('/auth/email-sent?email='+email);
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
  