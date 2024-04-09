<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { toast } from "svelte-sonner";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	export let data;
	let { supabase } = data;
	const email = $page.url.searchParams.get('email');;

	let code = ''
	let errorMessage = '';

	async function handleAccountRegisterCode() {
		try {
			toast(email + ' ' + code)
			const { data, error } = await supabase.auth.verifyOtp(
				{ 	email: email, 
					token: code,
					type: 'email'
				}
			)

			if (error) {
				errorMessage = error.message;
			} else {
				console.log(data);
				toast('Account Verified');
				goto('/work');
			}
		} catch (error) {
			errorMessage = 'An error occurred. Please try again.';
		}
	}

  </script>
  
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-1 xl:min-h-[700px]">
	<div class="flex items-center justify-center py-12">  
		  <Card.Root class="mx-auto">
			<Card.Header>
			  <Card.Title class="text-xl">Check your Email!</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
					<div class="flex items-center space-x-4">
						<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6"
						>
						<rect width="20" height="16" x="2" y="4" rx="2"></rect>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<div>
							<h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight py-1">Account Registered</h3>
							<p class="text-sm text-muted-foreground">An email confirmation has been sent to your inbox to verify your account.</p>
						</div>
						
					</div>
						<Separator />
						<div class="flex w-full max-w-sm flex-col gap-1.5 py-4">
							<Label for="code">Have a Auth Code?</Label>
							<Input 
								type="code" 
								id="code" 
								bind:value={code}
								placeholder="Code" />
							{#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
							<Button 
								variant="outline" 
								on:click={handleAccountRegisterCode}
								class="w-full">Submit</Button>
					  	</div>
					</div>
					
				</div>
			</Card.Content>
		  </Card.Root>
	</div>
  </div>
  