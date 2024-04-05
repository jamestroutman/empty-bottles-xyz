import { error, redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.getSession();
	const _supabase = event.locals.supabase;
	const submission_id = event.params.id;

	if (!session) {
		throw redirect(301, '/auth/login');
	}

	// Load the Submission
	const profile_result = await _supabase
		.from('sales_contact_submissions')
		.select()
		.eq('id', submission_id);
		
	if (profile_result.count == 0) {
		throw redirect(301, '/profile');
	}

	let profile = profile_result.data[0];

	return {
		profile: profile
	};	
};