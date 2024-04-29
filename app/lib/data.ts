import { unstable_noStore as noStore } from 'next/cache';
import { NextResponse } from 'next/server';
import { createClient } from "@/utils/supabase/server";

export const fetchRecordings = async () => {

    noStore()
    const supabase = createClient()
    const { data, error } = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .list()

    return data
}