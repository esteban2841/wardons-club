import { Banner } from "@/components/atoms/Banner"
import { GalleryView } from "@/components/molecules/GalleryView"
import { fetchStorageUrl } from "@/helpers/handleStorageData";
import { createClient } from "@/utils/supabase/server";

const Page = async () => {
  const triPackVerticalPhotos = [
    {
      type: 'verticalRatio',
      url: await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')
    },
    {
      type: 'verticalRatio',
      url: await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')
    },
    {
      type: 'verticalRatio',
      url: await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')
    },
    {
      type: 'verticalRatio',
      url: await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')
    },
    {
      type: 'verticalRatio',
      url: await fetchStorageUrl(createClient, 'gallery', 'GALLERY_BANNER.png')
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
    </GalleryView>
  )
}

export default Page