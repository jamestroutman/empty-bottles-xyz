<script lang="ts">
	import placeholder_user from '$lib/assets/placeholder-user.jpg';
	import "../app.pcss";
    import "../app.pcss";
    import { goto, invalidate } from '$app/navigation';
    import { onMount } from 'svelte';
	import { Button } from "$lib/components/ui/button";
	import { Toaster } from "$lib/components/ui/sonner";
	import { ModeWatcher } from "mode-watcher";
	import { toggleMode } from "mode-watcher";
	import { Sun, Moon, PanelLeft, Package2, Home, ShoppingCart, Package, UsersRound, LineChart, Search } from 'lucide-svelte';
	import { Separator } from "$lib/components/ui/separator";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	
    export let data;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});

    async function logout() {
		await supabase.auth.signOut();
		goto('/');
	}
</script>

<svelte:head>
	<title>Empty Bottles.wtf</title>
	<meta name="description" content="wtf is up with these empty bottles">
</svelte:head>

<div class="font-mono min-h-screen flex flex-col">
	<header class="flex justify-between items-center py-6 px-12">
			
		<a class="text-4xl font-bold tracking-wide" href="/">
			<h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Empty Bottles (wtf)
			</h2>
		</a>

		<div class="flex h-5 items-center space-x-4 text-sm">
			{#if !session}
				<div>
					<a href="/auth/login">Login</a>
				</div>
				<Separator orientation="vertical" />
			{:else}
				<div>
					<a href="/work">Get to Work</a>
				</div>
				<Separator orientation="vertical" />
			{/if}

			<div>
				{#if session}
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
						<Button
							variant="outline"
							size="icon"
							class="overflow-hidden rounded-full"
							builders={[builder]}
						>
							<img
							src="{placeholder_user}"
							width={36}
							height={36}
							alt="Avatar"
							class="overflow-hidden"
							/>
						</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Settings</DropdownMenu.Item>
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item on:click="{logout}">Logout</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{:else}
					<Button href="/auth/signup">Sign-up</Button>
				{/if}
			</div>
			<Separator orientation="vertical" />
			<div>
				<Button on:click={toggleMode} variant="outline" size="icon">
					<Sun
					  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
					  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				  </Button>
			</div>
		  </div>
	
	</header>

	<div class="flex justify-between items-center py-6 px-12">
		<section class="container flex flex-col gap-16">		
			<slot></slot>
		</section>
	</div>

	<Toaster />
	<ModeWatcher />
</div>