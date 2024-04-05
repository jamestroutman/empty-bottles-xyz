import { db } from '$lib/server/db.js';
import { imageGroupTable, profileTable } from '$lib/server/schema.js';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const load = async (event) => {
	const session = await event.locals.getSession();
	const _supabase = event.locals.supabase;
	if (!session) {
		throw redirect(301, '/login');
	}

	// check for profile
	const profile = await db
		.select()
		.from(profileTable)
		.where(eq(profileTable.user_id, session.user.id));
		
	if (profile.length === 0) {
		throw redirect(301, '/profile');
	}

	// get the image groups for this profile

	// Drizzle
	const groups = await db
		.select()
		.from(imageGroupTable)
		.where(eq(imageGroupTable.owner_id, profile[0].id));

	// Supabase REST API
	var response = await _supabase.from('sales_contact_submissions').select();
	
	return {
		profile: profile[0],
		contact_count: response.data?.length,
		groups
	};
};
