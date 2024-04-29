import { fetchRecordings } from '../../app/lib/data.ts'

export default async function DashboardLogs() {
    const recordings = await fetchRecordings()
	console.log("TCL: DashboardLogs -> recordings", recordings)
    return (
        <div>
            <p>HOLIS</p>
        </div>
    )
}
