import { goto } from '$app/navigation';

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');

	console.log(url.searchParams.getAll('error'));

	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}

	goto('/work');
	return;
};
