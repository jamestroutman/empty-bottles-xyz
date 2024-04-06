import { goto } from '$app/navigation';
import { toast } from 'svelte-sonner';

export const GET = async ({ locals: { supabase } }) => {
	// logout of supabase
	await supabase.auth.signOut();
	toast('Successfully loged out');
	goto('/')

	return;
};
