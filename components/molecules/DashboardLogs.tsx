import { getRecordingsNormalized } from '../../app/lib/data.ts'
import { Table } from 'antd';

const columns = [
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
    },
    {
      title: 'Direction',
      dataIndex: 'direction',
      key: 'direction',
    },
    {
      title: 'To',
      dataIndex: 'toPhoneNumber',
      key: 'toPhoneNumber',
    },
    {
      title: 'From',
      dataIndex: 'fromPhoneNumber',
      key: 'fromPhoneNumber',
    },
    {
      title: 'Recording',
      dataIndex: 'recordingUrl',
      key: 'recordingUrl',
    },
    {
      title: 'Call Length',
      dataIndex: 'callLength',
      key: 'callLength',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
    {
      title: 'Pathway Logs',
      dataIndex: 'pathWayLogs',
      key: 'pathWayLogs',
    },
    {
      title: 'Transcript',
      dataIndex: 'transcript',
      key: 'transcript',
    },
    {
      title: 'Variables',
      dataIndex: 'variables',
      key: 'variables',
    },
    {
      title: 'Call ID',
      dataIndex: 'callId',
      key: 'callId',
    },
  ];

export default async function DashboardLogs() {
    const recordings = await getRecordingsNormalized()
    // const fetchingContent = recordings.map(recording => {
    //     const data =
    // })
    return (
        <div>
            <Table columns={columns} dataSource={recordings} />
        </div>
    )
}
