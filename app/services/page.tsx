import { Banner } from "@/components/atoms/Banner"
import { GalleryVeticalPhotoTrio } from "@/components/atoms/GalleryVeticalPhotoTrio";
import { fetchStorageUrl } from "@/helpers/handleStorageData"
import { createClient } from "@/utils/supabase/server";

const Page = async () => {
  const triPackVerticalPhotos = [

      {
        type: 'verticalRatio',
        name: 'MEDALLAS_H.avif',
        url: await fetchStorageUrl(createClient, 'gallery', 'MEDALLAS_H.avif'),
        line: 0,
        tag: 'Niños'
      },
      {
        type: 'verticalRatio',
        name: 'MEDALLAS_H.avif',
        url: await fetchStorageUrl(createClient, 'info_gallery', 'JUVENILES_TEAM_H.avif'),
        line: 0,
        tag: 'Juvenil'
      },
      {
        type: 'verticalRatio',
        name: 'PERSONALIZADOS_H.avif',
        url: await fetchStorageUrl(createClient, 'info_gallery', 'PERSONALIZADOS_H.avif'),
        line: 0,
        tag: 'Personalizados'
      },
    ]
  return (
    <div className="flex flex-col justify-center items-center w-full">
     
      <Banner 
        image={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')} 
        title="NUESTRA OFERTA"
        buttonTitle="OFRECEMOS"
        figCaptDescr="club de basketball"
        size={300}
        bannerPositionY={40}
      />
      <div className="flex flex-col justify-center items-center w-full p-6">
        <GalleryVeticalPhotoTrio maxWidth={'1000px'} radius={false} photosTriPack={triPackVerticalPhotos} defaultImgUrl={await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')}></GalleryVeticalPhotoTrio>
      </div>
    </div>
  )
}

export default Page