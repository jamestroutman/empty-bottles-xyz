<script lang="ts">
</script>

<div class="mx-auto grid w-full max-w-6xl gap-2">
	<h1 class="text-3xl font-semibold">Settings</h1>
  </div>
  
  <div
	class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
  >
	<nav class="grid gap-4 text-sm text-muted-foreground">
	  <a href="/work/settings/locations" class="font-semibold text-primary"> Locations </a>
	  <a href="/work/settings/integrations" class=""> Integrations </a>
	  <a href="/work/settings/subscription" class=""> Subscription </a>
	  <a href="/work/settings/support" class=""> Support </a>
	  <a href="/work/settings/advanced" class=""> Advanced </a>
	</nav>

	<div class="grid gap-6">
	  <slot></slot>
	</div>
  </div>
