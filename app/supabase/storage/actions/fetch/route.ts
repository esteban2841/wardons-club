import { NextResponse } from 'next/server';
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    const { data, error } = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .list()
        
    return NextResponse.json({data}, {status: 200});
}
