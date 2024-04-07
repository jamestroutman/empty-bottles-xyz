<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";

	import placeholder from '$lib/assets/placeholder.svg';
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
			goto('/dashboard');
		}
	}
  </script>
  
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="flex items-center justify-center py-12">
	  <div class="mx-auto grid w-[350px] gap-6">
		<div class="grid gap-2 text-center">
		  <h1 class="text-3xl font-bold">Login</h1>
		  <p class="text-balance text-muted-foreground">
			Enter your email below to login to your account
		  </p>
		</div>
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
	  </div>
	</div>
	<div class="hidden bg-muted lg:block">
	  <img
		src="{placeholder}"
		alt="placeholder"
		width="1920"
		height="600"
		class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
	  />
	</div>
  </div>
  