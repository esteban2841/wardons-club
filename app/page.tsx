import Image from 'next/image'
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Home } from "@/components/molecules/HomeView"
import { MapScenarios } from '@/components/molecules/MapScenarios'

export default async function Index() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full h-full flex flex-col gap-20 items-center text-[#fff]">
      <Home/>
      <MapScenarios/>
    </div>
  );
}
