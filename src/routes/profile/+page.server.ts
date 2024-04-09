import { error, redirect } from '@sveltejs/kit';
import { toast } from 'svelte-sonner';

export const load = async (event) => {
	const session = await event.locals.getSession();
	const _supabase = event.locals.supabase;

	// Ensure Authenticated
	if (!session) {
		throw redirect(301, '/auth/login');
	}

	// check for profile
	const profile_result = await _supabase
		.from('profile')
		.select()
		.eq('user_id', session.user.id);
		
	if (profile_result.count < 0) {
		return {
			profile: profile_result.data[0]
		};
	}else{
		return {};
	}
};

export const actions = {
	create: async (event) => {
		// get the form body from the event
		const formData = await event.request.formData();
		const firstName = formData.get('first_name');
		const lastName = formData.get('last_name');
		let supabase = event.locals.supabase;

		if (!firstName || !lastName) {
			//throw error(400, 'Must send a valid first name and last name');
		}

		// create the user
		const session = await event.locals.getSession();
		if (!session) {
			//throw error(401, 'Must have be logged in to create an account');
		}

		// save to Supabase
        const { data, error } = await supabase
            .from('profile')
            .insert({
				user_id: session.user.id,
				first_name: firstName.toString(),
				last_name: lastName.toString(),
				email: session.user.email
			})
            .select();

		if(error){
			console.log(error);
		}else{
			toast('Profile Updated');
			throw redirect(301, '/work');
		}
	}
};
