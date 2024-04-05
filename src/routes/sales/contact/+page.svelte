<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Tables } from '$lib/database/schema.gen.js';
	import { toast } from 'svelte-sonner';

    export let data;
    let { supabase } = data;

    // Form Data
    let new_record: Tables<'sales_contact_submissions'> = {
        company_name: '',
        contact_status: '',
        email_address: '',
        first_name: '',
        id: 0,
        inserted_at: null,
        last_name: '',
        phone_number: '',
        updated_at: null
    };
    
    // Submiit
    let errorMessage = '';

    async function handleSalesContact() {
		if (new_record.email_address == null || new_record.email_address =="") {
			errorMessage = 'Email Address is Required';
			return;
		}
                
		// save to Supabase
        const { data, error } = await supabase
            .from('sales_contact_submissions')
            .insert(new_record)
            .select();

        // handle result
        if(error){
            console.log("failed sales_contact_submissions creation: " + error.code + ": " + errorMessage);
            errorMessage = error.message;
        }else{
            toast("Your Request has been sent.");
            console.log("new sales_contact_submissions created: " + data);
            
            goto("/");
        }
	}
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/J0QFexOiZHo
-->

<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Sales Contact Form</h3>
      <p class="text-sm text-muted-foreground">Please fill in the required fields to contact our sales team.</p>
    </div>
    <div class="p-6 space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="first-name"
          >
            First name
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="first-name"
            bind:value={new_record.first_name}
            placeholder="Enter your first name"
          />
        </div>
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="last-name"
          >
            Last name
          </label>
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="last-name"
            bind:value={new_record.last_name}
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="email"
        >
          Email
        </label>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          bind:value={new_record.email_address}
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="phone"
        >
          Phone
        </label>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="phone"
          bind:value={new_record.phone_number}
          placeholder="Enter your phone number"
        />
      </div>
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="company"
        >
          Company
        </label>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="company"
          bind:value={new_record.company_name}
          placeholder="Enter your company name"
        />
      </div>
      {#if errorMessage} <p class="text-red-500">{errorMessage}</p> {/if}
    </div>
    <div class="flex items-center p-6">
      <button on:click={handleSalesContact} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Submit
      </button>
    </div>
  </div>