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
      name: 'FREDY_COACH_META_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_COACH_META_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'JOTA_PETO_ESPALDA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'JOTA_PETO_ESPALDA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'GARDEO_NINO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GARDEO_NINO_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_FUERZA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_FUERZA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'DISPUTA_BALON_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'DISPUTA_BALON_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_CONOS_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_CONOS_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'EQUIPO_PEQUES_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_PEQUES_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'NI_AS_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'NI_AS_DEFENSA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'FLACA_PREMIO_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FLACA_PREMIO_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'GRANDES_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRANDES_DEFENSA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'PARTIDO_PASE_CARGA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_PASE_CARGA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_TIRON_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_TIRON_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA2_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA2_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENADORES_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENADORES_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'POSICIONES_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'POSICIONES_DEFENSA_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'FREDY_EXPLICACION_POSICION_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_EXPLICACION_POSICION_V.avif')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA_V.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA_V.avif')
    },
  ]
  
  const duoHorizontalPhotos = [
    {
      type: 'horizontalRatio',
      name: 'GRUPO_MEDIANOS_PARTIDO_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRUPO_MEDIANOS_PARTIDO_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'LANZAMIENTO_SALTO_PEQUES_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'LANZAMIENTO_SALTO_PEQUES_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPOS_PARTIDO_COFREM_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPOS_PARTIDO_COFREM_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_DRIBLE_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_DRIBLE_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_CHARLA_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_CHARLA_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'NI_OS_DRIBLE_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'NI_OS_DRIBLE_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'JUMP_BALL_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'JUMP_BALL_H.avif')
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPO_H.avif',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_H.avif')
    },
  ]
  return (
    <GalleryView>
        <Banner 
            image={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} 
            title="GALERIA"
            buttonTitle="CONTACTENOS"
            figCaptDescr="club de basketball"
            size={300}
            bannerPositionY={40}
        />
        <Suspense fallback={CardSkeleton()}>

          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(0,3)}>

          </GalleryVeticalPhotoTrio>
        </Suspense>
        <Suspense fallback={CardSkeleton()}>

          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(0,3)}>

          </GalleryVeticalPhotoTrio>
        </Suspense>


        <Suspense fallback={CardSkeleton()}>
          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(3,6)}>

          </GalleryVeticalPhotoTrio>

        </Suspense>
        <Suspense fallback={CardSkeleton()}>

          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(3,6)}>

          </GalleryVeticalPhotoTrio>
        </Suspense>


        <Suspense fallback={CardSkeleton()}>
          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(6,9)}>

          </GalleryVeticalPhotoTrio>

        </Suspense>
        <Suspense fallback={CardSkeleton()}>

          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={duoHorizontalPhotos.slice(6,9)}>

          </GalleryVeticalPhotoTrio>
        </Suspense>


        <Suspense fallback={CardSkeleton()}>
          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(9,12)}>

          </GalleryVeticalPhotoTrio>

        </Suspense>
        <Suspense fallback={CardSkeleton()}>

          <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(12,15)}>

          </GalleryVeticalPhotoTrio>
        </Suspense>



    </GalleryView>
  )
}

export default Page