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
  const bucketNameMobile = 'videos-home-mobile'

  const videoListDesktop = [
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
  const videoListMobile = [
    {
      name: 'wardons_grito.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'wardons_grito.mp4'),
    },
    {
      name: 'saludo-partido.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'saludo-partido.mp4'),
    },
    {
      name: 'jump-ball.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'jump-ball.mp4'),
    },
    {
      name: 'cesta_partido_dobleritmo.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'cesta_partido_dobleritmo.mp4'),
    },
    {
      name: 'doble-ritmo-obstaculos.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'doble-ritmo-obstaculos.mp4'),
    },
    {
      name: 'direccion-drible.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'direccion-drible.mp4'),
    },
    {
      name: 'drible-ocho.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'drible-ocho.mp4'),
    },
    {
      name: 'cambio-direccion.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'cambio-direccion.mp4'),
    },
  ]

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center relative text-[#fff]">
      <Home data={videoListDesktop} dataMobile={videoListMobile}/>
      <h2>Localiza tu sede mas cercana y visitanos!</h2>
      <Suspense fallback={<MapLoader/>}>
        <MapScenarios/>
      </Suspense>
    </div>
  );
}
