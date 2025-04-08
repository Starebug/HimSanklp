import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { requireUser } from '../utils/hooks';
import { redirect } from 'next/navigation';
export default async function Dashboard() {
    if() redirect('/onBoarding'); 
    return(
        <>
        <h1>Hi</h1>
        </>
    );
}