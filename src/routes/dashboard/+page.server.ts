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

	// get the image groups for this profile
	const imageResult = await _supabase
		.from('image_group')
		.select()
		.eq('owner_id', session.user.id);
	
	let image_groups = imageResult.data;
	
	return {
		profile: profile,
		groups: image_groups
	};
};
