import { Banner } from "@/components/atoms/Banner"
import { GalleryVeticalPhotoTrio } from "@/components/atoms/GalleryVeticalPhotoTrio";
import { GalleryView } from "@/components/molecules/GalleryView"
import { fetchStorageUrl } from "@/helpers/handleStorageData";
import { createClient } from "@/utils/supabase/server";

const Page = async () => {
  const triPackVerticalPhotos = [
    {
      type: 'verticalRatio',
      name: 'FREDY_COACH_META_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_COACH_META_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'JOTA_PETO_ESPALDA.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'JOTA_PETO_ESPALDA.png')
    },
    {
      type: 'verticalRatio',
      name: 'GARDEO_NINO_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'GARDEO_NINO_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_FUERZA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_FUERZA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'DISPUTA_BALON_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'DISPUTA_BALON_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_CONOS_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_CONOS_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'EQUIPO_PEQUES_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_PEQUES_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'NIÑAS_DEFENSA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'NIÑAS_DEFENSA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'FLACA_PREMIO_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'FLACA_PREMIO_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN2_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'GRANDES_DEFENSA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRANDES_DEFENSA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'PARTIDO_PASE_CARGA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_PASE_CARGA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_TIRON_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_TIRON_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'CHARLA_ENTRETIEMPO_CRISTIAN_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'CHARLA_ENTRETIEMPO_CRISTIAN_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA2-V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA2-V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENADORES_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENADORES_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'POSICIONES_DEFENSA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'POSICIONES_DEFENSA_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'FREDY_EXPLICACION_POSICION_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'FREDY_EXPLICACION_POSICION_V.png')
    },
    {
      type: 'verticalRatio',
      name: 'ENTRENO_DEFENSA_V.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'ENTRENO_DEFENSA_V.png')
    },
  ]
  
  const duoHorizontalPhotos = [
    {
      type: 'horizontalRatio',
      name: 'GRUPO_MEDIANOS_PARTIDO_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'GRUPO_MEDIANOS_PARTIDO_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'LANZAMIENTO_SALTO_PEQUES_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'LANZAMIENTO_SALTO_PEQUES_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPOS_PARTIDO_COFREM_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPOS_PARTIDO_COFREM_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_COFREM_DRIBLE_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_COFREM_DRIBLE_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'PARTIDO_CHARLA_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'PARTIDO_CHARLA_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'NIÑOS_DRIBLE_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'NIÑOS_DRIBLE_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'JUMP_BALL_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'JUMP_BALL_H.png')
    },
    {
      type: 'horizontalRatio',
      name: 'EQUIPO_H.png',
      url: await fetchStorageUrl(createClient, 'gallery', 'EQUIPO_H.png')
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
        <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(0,3)}>

        </GalleryVeticalPhotoTrio>
        <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(3,7)}>

        </GalleryVeticalPhotoTrio>
        <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(6,9)}>

        </GalleryVeticalPhotoTrio>
        <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(9,12)}>

        </GalleryVeticalPhotoTrio>
        <GalleryVeticalPhotoTrio defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} photosTriPack={triPackVerticalPhotos.slice(12,15)}>

        </GalleryVeticalPhotoTrio>
    </GalleryView>
  )
}

export default Page