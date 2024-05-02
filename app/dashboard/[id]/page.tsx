import { recordingsObject, fileResponseObject } from '@utils/types/index.ts'
import { getRecordingsNormalized, classifyCalls, getCallById } from '../../lib/data.ts'
import axios from 'axios';
import { createClient } from "@/utils/supabase/server";
import AudioPlayer from '@/components/atoms/AudioPlayer.tsx';

const page = async ({params}: {params : {id: string}}) => {
    const {id} = params

    const recordings : Array<recordingsObject> = await getRecordingsNormalized(createClient)
    const fetchingContent = await Promise.all(recordings.map(async recording => {
        const data = await axios.get(recording.transcript)
        recording.transcript = await data.data
        return {
            ...recording
        }
    }))
    const clasifiedCalls = classifyCalls(fetchingContent)
    const callDetail = getCallById(clasifiedCalls, id)

    return (
        <div className='bg-neutral-900 w-full h-screen box-border text-white'>
            <div className='max-w-4xl flex flex-row items-center justify-center gap-6'>
                <div className='w-3/4 p-4'>
                    <AudioPlayer callDetail={callDetail}/>
                </div>
                <div className='w-1/4 p-4'>
                    HOla
                </div>
            </div>
        </div>
    )
}

export default page