import Image from 'next/image'
import { createClient } from "@/utils/supabase/server";
import { Home } from "@/components/molecules/HomeView"
import { MapScenarios } from '@/components/molecules/MapScenarios'
import { Suspense } from 'react';
import MapLoader from '@/components/atoms/MapLoader';
import { fetchStorageUrl, getFilesFromBucket } from '@/helpers/handleStorageData';

export default async function Index() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  const bucketName = 'videos-home'

  const videoList = [
    {
      name: 'wardons_grito.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'wardons_grito.mp4'),
    },
    {
      name: 'partido_cesta.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'partido_cesta.mp4'),
    },
    {
      name: 'triple_amenaza.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'triple_amenaza.mp4'),
    },
    {
      name: 'defensa_posiciones.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'defensa_posiciones.mp4'),
    },
    {
      name: 'entreno_velocidad.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'entreno_velocidad.mp4'),
    },
    {
      name: 'pases_trenza.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'pases_trenza.mp4'),
    },
    {
      name: 'drible_alto.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'drible_alto.mp4'),
    },
    {
      name: 'pases_presion.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'pases_presion.mp4'),
    },
  ]

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center relative text-[#fff]">
      <Home data={videoList} />
      <h2>Localiza tu sede mas cercana y visitanos!</h2>
      <Suspense fallback={<MapLoader/>}>
        <MapScenarios/>
      </Suspense>
    </div>
  );
}
