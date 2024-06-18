import { CoachesVIew } from "@/components/molecules/CoachesVIew"
import { fetchStorageUrl } from "@/helpers/handleStorageData";
import { createClient } from "@/utils/supabase/server";


const Page = async () => {

  const bucketName = 'coaches'
  const coachesBanner = 'COACHES_BANNER.png'

  const coachesSectionData = [
    {
      type: 'banner',
      image: await fetchStorageUrl(createClient, bucketName, coachesBanner),
      top: '-350px',
      title: 'COACHES',
      buttonTitle: 'CONTACTANOS',
      figCaptDescr: 'club de baloncesto villavicencio',
    },
    {
      type: 'mainCoachImage',
      image: await fetchStorageUrl(createClient, bucketName, 'FREDY_MAIN.png'),
      figCaptDescr: 'fredy entrenador de baloncesto en villavicencio',
    },
    {
      type: 'folderImage',
      image1: await fetchStorageUrl(createClient, bucketName, 'FREDY_FOLDER_1.png'),
      figCaptDescr1: 'fredy entrenador de baloncesto en villavicencio',
      image2: await fetchStorageUrl(createClient, bucketName, 'FREDY_FOLDER_2.png'),
      figCaptDescr2: 'fredy entrenador de baloncesto en villavicencio',
    },
    {
      type: 'mainCoachImage',
      image: await fetchStorageUrl(createClient, bucketName, 'CRISTIAN_MAIN.png'),
      figCaptDescr: 'cristian entrenador de baloncesto en villavicencio',
    },
    {
      type: 'folderImage',
      image1: await fetchStorageUrl(createClient, bucketName, 'CRISTIAN_FOLDER_1.png'),
      figCaptDescr1: 'CRISTIAN entrenador de baloncesto en villavicencio',
      image2: await fetchStorageUrl(createClient, bucketName, 'CRISTIAN_FOLDER_2.png'),
      figCaptDescr2: 'CRISTIAN entrenador de baloncesto en villavicencio',
    },
  ]
  return (
    <CoachesVIew data={coachesSectionData}>

    </CoachesVIew>
  )
}

export default Page