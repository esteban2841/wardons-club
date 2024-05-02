import { getRecordingsNormalized, classifyCalls } from '../../app/lib/data'
import axios from 'axios';
import { recordingsObject } from '@/utils/types/index'
import CallLogsTable from '@/components/atoms/CallLogsTable'
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLogs() {
    
    const recordings : Array<recordingsObject> = await getRecordingsNormalized(createClient)
    const fetchingContent = await Promise.all(recordings.map(async recording => {
        const data = await axios.get(recording.transcript!)
        recording.transcript = await data.data
        return {
            ...recording
        }
    }))
    const clasifiedCalls = classifyCalls(fetchingContent)
    return (
        <div>
            <CallLogsTable recordings={clasifiedCalls} />
        </div>
    )
}
