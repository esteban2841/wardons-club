'use client'

import { HomeBackgroundTexts } from "../atoms/HomeBackgroundTexts"

export const AboutWardons = () => {
  return (
    <div className="w-full relative">
        <HomeBackgroundTexts 
            titleContent="SIMPLEMENTE WARDONS"
            subtitleContent="Ser un Wardon representa a una persona que disfruta su práctica deportiva, es un deportista comprometido, no solo con su desarrollo deportivo, sino tambien con su crecimiento personal y su impacto positivo en la sociedad, fundamentado en principios sólidos de disciplina, respeto y valores." 
            positionText="left"
            customAdjust="0 30"
            loaderPosition={0}
            imageUrl="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/info_gallery/MEDALLAS_H.avif?t=2024-07-09T20%3A27%3A29.885Z">
        </HomeBackgroundTexts>
        <HomeBackgroundTexts 
            titleContent="VISION"
            loaderPosition={2}
            customAdjust="60"
            subtitleContent="Nuestra vision es convertir al club deportivo de baloncesto Wardons en una referencia destacada en el àmbito del baloncesto, reconocido por la calidad de nuestros jugadores y el exito deportivo alcanzado. Buscamos ser un club que brinde oportunidades a jovenes talentos, formandolos desde las etapas de iniciacion hasta el alto rendimiento y contribuir al desarrollo del baloncesto a nivel local y regional." 
            positionText="left" 
            imageUrl="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/gallery/EQUIPO_H.avif">
        </HomeBackgroundTexts>
        <HomeBackgroundTexts 
            titleContent="MISION"
            customAdjust="40"
            subtitleContent="Nuestra misiòn como club deportivo de baloncesto Wardons es fomentar el desarrollo integral de nuestros jugadores, tanto en el àmbito deportivo como personal. Buscamos promover los valores del trabajo en equipo, disciplina, comportamiento y superaciòn personal a traves de la practica del baloncesto. Queremos formar atletas competitivos pero tambien ciudadanos responsables y comprometidps con su comunidad." 
            loaderPosition={1}
            positionText="right" 
            imageUrl="https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/public/gallery/JUMP_BALL_H.avif?t=2024-07-08T20%3A58%3A25.035Z">
        </HomeBackgroundTexts>
    </div>
  )
}
