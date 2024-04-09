<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Card from "$lib/components/ui/card/index.js";

	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	export let data;
	
	let { supabase } = data;
	let email = '';
	let password = '';
	let errorMessage = '';

	async function handleGoogleLogin() {
		//TODO: Google Auth
		toast('Google Auth is coming soon');
	}

	async function handleLogin() {
		if(email.length === 0){
			errorMessage = 'Email is required';
			return;
		}

		if(password.length === 0){
			errorMessage = 'Password is required';
			return;
		}

		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			errorMessage = error.message;
		} else {
			console.log(data);
			toast("Signed In Successfully");
			goto('/work');
		}
	}
  </script>
  

  <Card.Root class="mx-auto max-w-sm">
	<Card.Header>
	  <Card.Title class="text-xl">Login</Card.Title>
	  <Card.Description>Enter your information to create an account</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<div class="grid gap-2">
			  <Label for="email">Email</Label>
			  <Input id="email" 
					 type="email" 
					 bind:value={email}  
					 placeholder="m@example.com" 
					 required />
			</div>
			<div class="grid gap-2">
			  <div class="flex items-center">
				<Label for="password">Password</Label>
				<a href="/auth/forgot-password" class="ml-auto inline-block text-sm underline">
				  Forgot your password?
				</a>
			  </div>
			  <Input id="password" 
					 type="password"
					 bind:value={password}
					 required />
			</div>
			{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
			<Button type="submit" class="w-full" on:click={handleLogin}>Login</Button>
			<Button variant="outline" class="w-full" on:click={handleGoogleLogin} >Login with Google</Button>
		  </div>
		  <div class="mt-4 text-center text-sm">
			Don&apos;t have an account?
			<a href="/auth/signup" class="underline"> Sign up </a>
		  </div>
	</Card.Content>
  </Card.Root>


		
	  