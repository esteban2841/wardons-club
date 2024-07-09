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
      titleContent: 'Fredy Villota',
      subtitleContent: 'Soy un profesional en educación física y deportes con una experiencia de 10 años en el entrenamiento del baloncesto con una gran vocación vocación y compromiso firme de trabajar por el desarrollo de habilidades físicas, tecnico/tácticas, habilidades sociales y formación de valores.'
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
      titleContent: 'Cristian Villota',
      subtitleContent: 'Soy un profesional con formación en Educación Física y Deportes, direccionado al entrenamiento y la enseñanza del baloncesto. Mi pasión por el deporte se combina con habilidades pedagógicas sólidas, permitiéndome no solo entrenar atletas, sino también educar sobre la importancia de la práctica de la actividad física teniendo como pilares la disciplina, el respeto y trabajo en equipo.'
    },
  ]
  return (
    <CoachesVIew data={coachesSectionData}>

    </CoachesVIew>
  )
}

export default Page