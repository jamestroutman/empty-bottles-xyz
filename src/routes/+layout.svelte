<script lang="ts">
	import "../app.pcss";
    import "../app.pcss";
    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';
	import { Button } from "$lib/components/ui/button";
	import { Toaster } from "$lib/components/ui/sonner";
	import { ModeWatcher } from "mode-watcher";
	import { toggleMode } from "mode-watcher";
	import { Sun, Moon } from 'lucide-svelte';

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

		
		{#if session}
			<div>
				<a href="/dashboard" class="text-lg tracking-tighter border-2 border-black p-1">Dashboard</a>
				<button on:click="{logout}" class="text-lg tracking-tighter border-2 border-black p-1">Sign Out</button>
			</div>
		{:else}
			<Button href="/auth/login">Login or Sign-up</Button>
		{/if}
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
			  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
			  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		  </Button>
	</header>

	<div class="flex justify-between items-center py-6 px-12">
		<section class="container flex flex-col gap-16">		
			<slot></slot>
		</section>
	</div>

	<Toaster />
	<ModeWatcher />
</div>