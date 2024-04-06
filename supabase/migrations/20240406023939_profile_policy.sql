create policy "Enable insert for authenticated users only" 
on "public"."profile" 
to authenticated with 
check (true);

create policy "Enable read access for authenticated users" 
on "public"."image" 
to authenticated 
using (true);

create policy "Enable update for users based on user_id" 
on "public"."profile" 
as permissive for update to authenticated using ((auth.uid() = user_id));