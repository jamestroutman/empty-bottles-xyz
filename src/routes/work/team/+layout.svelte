<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Toaster } from "$lib/components/ui/sonner";
	import { ModeWatcher } from "mode-watcher";
  	import { Input } from "$lib/components/ui/input/index.js";
  	import * as Sheet from "$lib/components/ui/sheet/index.js";
  	import { Menu, Package, Package2, Search } from "lucide-svelte";
</script>

<div class="mx-auto grid w-full max-w-6xl gap-2">
	<h1 class="text-3xl font-semibold">My Team</h1>
  </div>
  
  <div
	class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
  >
	<nav class="grid gap-4 text-sm text-muted-foreground">
	  <a href="/work/team/my-team" class="font-semibold text-primary"> My Team </a>
	</nav>

	<div class="grid gap-6">
	  <slot></slot>
	</div>
  </div>
