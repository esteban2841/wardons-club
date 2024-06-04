import Image from 'next/image'
import { createClient } from "@/utils/supabase/server";
import { Home } from "@/components/molecules/HomeView"
import { MapScenarios } from '@/components/molecules/MapScenarios'
import { Suspense } from 'react';
import MapLoader from '@/components/atoms/MapLoader';

export default async function Index() {

  const supabase = createClient();
	console.log("TCL: Index -> supabase", supabase)

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center text-[#fff]">
      <Home/>
      <h2>Localiza tu sede mas cercana y visitanos!</h2>
      <Suspense fallback={<MapLoader/>}>
        <MapScenarios/>
      </Suspense>
    </div>
  );
}
