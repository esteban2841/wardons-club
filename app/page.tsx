import { createClient } from "@/utils/supabase/server";
import { Home } from "@/components/molecules/HomeView"
import { Suspense } from 'react';
import { fetchStorageUrl } from '@/helpers/handleStorageData';
import { HomeLoader } from '@/components/loaders/HomeLoader';
import { AboutWardons } from '@/components/molecules/AboutWardons';
import Image from "next/image";

export default async function Index() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const bucketName = 'videos-home'
  const bucketNameMobile = 'videos-home-mobile'

  const imageLoading = await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER_RESIZED.avif')

  const loadingImage : () => Promise<string> = async ()=> await fetchStorageUrl(createClient, bucketName, 'wardons_grito.mp4')

  const videoListDesktop = [
    {
      name: 'wardons_grito.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'wardons_grito.mp4'),
      turn: 0,
    },
    {
      name: 'partido_cesta.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'partido_cesta.mp4'),
      turn: 1,
    },
    {
      name: 'triple_amenaza.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'triple_amenaza.mp4'),
      turn: 2,
    },
    {
      name: 'defensa_posiciones.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'defensa_posiciones.mp4'),
      turn: 3,
    },
    {
      name: 'entreno_velocidad.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'entreno_velocidad.mp4'),
      turn: 4,
    },
    {
      name: 'pases_trenza.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'pases_trenza.mp4'),
      turn: 5,
    },
    {
      name: 'drible_alto.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'drible_alto.mp4'),
      turn: 6,
    },
    {
      name: 'pases_presion.mp4',
      url: await fetchStorageUrl(createClient, bucketName, 'pases_presion.mp4'),
      turn: 7,
    },
  ]
  const videoListMobile = [
    {
      name: 'wardons-grito.mp4',
      url: await fetchStorageUrl(createClient, bucketNameMobile, 'wardons-grito.mp4'),
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
    <div className="flex-1 w-full flex flex-col items-center relative text-[#fff]">
      <div className="overflow-hidden flex w-full flex-col items-center relative text-[#fff]">

        <div className="box-border overflow-hidden flex w-full h-[90vh] flex-col items-center relative text-[#fff]">
          <Image src={imageLoading} alt="banner" loading="lazy" fill={true} className="object-cover greyscale opacity-70"/>
          <Suspense fallback={<HomeLoader loadingImage={''}/>}>
            <Home data={videoListDesktop} dataMobile={videoListMobile}/>
          </Suspense>
        </div>
      </div>
      <AboutWardons>

      </AboutWardons>
    </div>
  );
}
