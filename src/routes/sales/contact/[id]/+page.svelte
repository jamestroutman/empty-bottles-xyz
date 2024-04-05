<script lang="ts">
	export let data;
</script>

<div class="grow w-full flex justify-center items-center bg-neutral-100">
	<div>
		<div>
			<h2>{data.profile.company_name}</h2>
			<h2>{data.profile.email_address}</h2>
		</div>
	</div>
</div>
