import { WallperBackground } from '@/components/atoms/WallperBackground'
import MapLoader from '@/components/loaders/MapLoader'
import { ContactForm } from '@/components/molecules/ContactForm'
import { MapScenarios } from '@/components/molecules/MapScenarios'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <article className="flex-1 relative w-full flex flex-col gap-4 items-center relative text-[#fff] pb-6">
        <WallperBackground/>
        <h2 className='text-xl'>Que esperas para ser un wardon, escribenos!</h2>
        <ContactForm/>
        <h2 className='text-xl'>Localiza tu sede mas cercana y visitanos!</h2>
        <Suspense fallback={<MapLoader/>}>
            <MapScenarios/>
        </Suspense>
    </article>
  )
}

export default Page