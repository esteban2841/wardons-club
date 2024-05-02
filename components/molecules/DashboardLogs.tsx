import { getRecordingsNormalized, classifyCalls } from '../../app/lib/data.ts'
import axios from 'axios';
import { recordingsObject, fileResponseObject } from '@utils/types/index.ts'
import CallLogsTable from '@/components/atoms/CallLogsTable.tsx'
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLogs() {
    
    const recordings : Array<recordingsObject> = await getRecordingsNormalized(createClient)
    const fetchingContent = await Promise.all(recordings.map(async recording => {
        const data = await axios.get(recording.transcript)
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
