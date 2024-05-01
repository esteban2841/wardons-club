import { getRecordingsNormalized } from '../../app/lib/data.ts'
import axios from 'axios';
import { recordingsObject, fileResponseObject } from '@utils/types/index.ts'
import CallLogsTable from '@/components/atoms/CallLogsTable.tsx'

export default async function DashboardLogs() {
    const recordings : Array<recordingsObject> = await getRecordingsNormalized()
    const fetchingContent = await Promise.all(recordings.map(async recording => {
        const data = await axios.get(recording.transcript)
        recording.transcript = await data.data
        return {
            ...recording
        }
    }))
    return (
        <div>
            <CallLogsTable recordings={fetchingContent} />
        </div>
    )
}
