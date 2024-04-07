<script lang="ts">
	import placeholder_user from '$lib/assets/placeholder-user.jpg';
    import { invalidate } from '$app/navigation';
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

</script>

<svelte:head>
	<title>Empty Bottles.wtf</title>
	<meta name="description" content="wtf is up with these empty bottles">
</svelte:head>

<div class="">

	<slot></slot>

	<Toaster />
	<ModeWatcher />
</div>