<script>
	export let data;
</script>

<div class="grow w-full flex justify-center items-center bg-neutral-100">
	<div class="bg-white p-4">
		<h2>Welcome Back, {data.profile.first_name}!</h2>
		<div class="my-8">
			{#each data.groups as { id, inserted_at }}
				<a href={`/detail/${id}`} class="block my-3 hover:ring ring-neutral-800"
					>Group with id: {id}, created at: {inserted_at}</a
				>
			{/each}
		</div>
	</div>
</div>
