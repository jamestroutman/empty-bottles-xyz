import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.getSession();
	const _supabase = event.locals.supabase;

	if (!session) {
		throw redirect(301, '/auth/login');
	}

	// check for profile
	const profile_result = await _supabase
		.from('profile')
		.select()
		.eq('user_id', session.user.id);
		
	if (profile_result.count == 0) {
		throw redirect(301, '/profile');
	}

	let profile = profile_result.data[0];

	return {
		profile: profile,
	};
};
