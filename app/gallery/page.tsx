import { Banner } from "@/components/atoms/Banner"
import { GalleryVeticalPhotoTrio } from "@/components/atoms/GalleryVeticalPhotoTrio";
import { GalleryView } from "@/components/molecules/GalleryView"
import { fetchStorageUrl } from "@/helpers/handleStorageData";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import { CardSkeleton } from '@/components/loaders/ImageSckeleton'

const Page = async () => {
  const triPackVerticalPhotos = [

    {
      type: 'verticalRatio',
      name: 'WARDON_5_F_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_5_F_V.avif'),
      line: 0
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_1_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_1_V.avif'),
      line: 0
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_5_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_5_V.avif'),
      line: 0
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_7_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_7_V.avif'),
      line: 1
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_8_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_8_V.avif'),
      line: 1
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_13_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_13_V.avif'),
      line: 1
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_15_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_15_V.avif'),
      line: 2
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_20_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_20_V.avif'),
      line: 2
    },
    {
      type: 'verticalRatio',
      name: 'WARDON_23_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'WARDON_23_V.avif'),
      line: 2
    },
    {
      type: 'verticalRatio',
      name: 'FREDY_COACH_META_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_COACH_META_V.avif'),
      line: 3
    },
    {
      type: 'verticalRatio',
      name: 'JOTA_PETO_ESPALDA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'JOTA_PETO_ESPALDA_V.avif'),
      line: 3
    },
    {
      type: 'verticalRatio',
      name: 'GARDEO_NINO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GARDEO_NINO_V.avif'),
      line: 3
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_FUERZA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_FUERZA_V.avif'),
      line: 4
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_V.avif'),
      line: 4
    },
    {
      type: 'verticalRatio',
      name: 'DISPUTA_BALON_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'DISPUTA_BALON_V.avif'),
      line: 4
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_CONOS_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_CONOS_V.avif'),
      line: 5
    },
    {
      type: 'verticalRatio',
      name: 'EQUIPO_PEQUES_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_PEQUES_V.avif'),
      line: 5
    },
    {
      type: 'verticalRatio',
      name: 'NI_AS_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'NI_AS_DEFENSA_V.avif'),
      line: 5
    },
    {
      type: 'verticalRatio',
      name: 'FLACA_PREMIO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FLACA_PREMIO_V.avif'),
      line: 6
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.avif'),
      line: 6
    },
    {
      type: 'verticalRatio',
      name: 'GRANDES_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRANDES_DEFENSA_V.avif'),
      line: 6
    },
    {
      type: 'verticalRatio',
      name: 'PARTIDO_PASE_CARGA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_PASE_CARGA_V.avif'),
      line: 7
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_V.avif'),
      line: 7
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_TIRON_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_TIRON_V.avif'),
      line: 7
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN_V.avif'),
      line: 8
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA2_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA2_V.avif'),
      line: 8
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENADORES_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENADORES_V.avif'),
      line: 8
    },
    {
      type: 'verticalRatio',
      name: 'POSICIONES_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'POSICIONES_DEFENSA_V.avif'),
      line: 9
    },
    {
      type: 'verticalRatio',
      name: 'FREDY_EXPLICACION_POSICION_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_EXPLICACION_POSICION_V.avif'),
      line: 9
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA_V.avif'),
      line: 9
    },
  ]
  
  const duoHorizontalPhotos = [
    {
      type: 'horizontalRatio',
      name: 'GRUPO_MEDIANOS_PARTIDO_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRUPO_MEDIANOS_PARTIDO_H.avif'),
      line: 10
    },
    {
      type: 'horizontalRatio',
      name: 'LANZAMIENTO_SALTO_PEQUES_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'LANZAMIENTO_SALTO_PEQUES_H.avif'),
      line: 10
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPOS_PARTIDO_COFREM_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPOS_PARTIDO_COFREM_H.avif'),
      line: 10
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_H.avif'),
      line: 11
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_DRIBLE_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_DRIBLE_H.avif'),
      line: 11
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_CHARLA_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_CHARLA_H.avif'),
      line: 11
    },
    {
      type: 'horizontalRatio',
      name: 'NI_OS_DRIBLE_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'NI_OS_DRIBLE_H.avif'),
      line: 12
    },
    {
      type: 'horizontalRatio',
      name: 'JUMP_BALL_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'JUMP_BALL_H.avif'),
      line: 12
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPO_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_H.avif'),
      line: 12
    },
  ]
  return (
    <GalleryView>
        <Banner buttonTitle="CONTACTENOS" 
          bannerPositionY={0} 
          size={300} 
          title="GALERIA" 
          image="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/gallery/NI_OS_DRIBLE_H.avif" 
          figCaptDescr="wardons baloncesto juvenil villavicencio">

        </Banner>
        <div className="w-full flex flex-col items-center justify-center p-10">

          <Suspense fallback={CardSkeleton()}>
            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(0,3)}>

            </GalleryVeticalPhotoTrio>

          </Suspense>
          <Suspense fallback={CardSkeleton()}>
            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(3,6)}>

            </GalleryVeticalPhotoTrio>

          </Suspense>

          <Suspense fallback={CardSkeleton()}>
            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(6,9)}>

            </GalleryVeticalPhotoTrio>

          </Suspense>
          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(0,3)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>


          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(3,6)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>

          <Suspense fallback={CardSkeleton()}>
            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(9,12)}>

            </GalleryVeticalPhotoTrio>

          </Suspense>

          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(6,9)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>

          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(12,15)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>
          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(15,18)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>
          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(18,21)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>
          <Suspense fallback={CardSkeleton()}>

            <GalleryVeticalPhotoTrio maximumWidth={''} radius={true} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(21,24)}>

            </GalleryVeticalPhotoTrio>
          </Suspense>


        </div>

    </GalleryView>
  )
}

export default Page