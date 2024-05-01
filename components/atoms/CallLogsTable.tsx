'use client'
import React from 'react'
import PropTypes from 'prop-types'
import { recordingsObject, fileResponseObject } from '@utils/types/index.ts'
import { Table } from 'antd';
import styled from "styled-components";
import { redirect } from 'next/navigation';
import WrapperRowRouterRedirect from '../atoms/WrapperRowRenderer.tsx'

export interface CallTableProps {
    recordings: Array<recordingsObject>,
    // redirectCallback: () => void,
}


const StyledTableContainer = styled.div`
    width: 100%;
`;

const columns = (dynamicClasses: string, clickRedirectHandler: ()=> void, route: string) => [
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'createdOn',
      defaultSortOrder: 'descend',
      sorter: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
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
      responsive: ['md'],
    },
    {
      title: 'From',
      dataIndex: 'fromPhoneNumber',
      key: 'fromPhoneNumber',
      responsive: ['md'],
    },
    {
      title: 'Recording',
      dataIndex: 'recordingUrl',
      key: 'recordingUrl',
      render: () => <WrapperRowRouterRedirect clickRedirectHandler={clickRedirectHandler} dynamicClasses={dynamicClasses} route={route} />
    },
    {
      title: 'Call Length',
      dataIndex: 'callLength',
      key: 'callLength',
      responsive: ['lg'],
      defaultSortOrder: 'descend',
      sorter: (a, b) => (a.callLength) - (b.callLength),
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      responsive: ['lg'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      responsive: ['md'],
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
      responsive: ['md'],
    },
    {
      title: 'Pathway Logs',
      dataIndex: 'pathWayLogs',
      key: 'pathWayLogs',
      responsive: ['lg'],
    },
    {
      title: 'Transcript',
      dataIndex: 'transcript',
      key: 'transcript',
      render: () => <WrapperRowRouterRedirect clickRedirectHandler={clickRedirectHandler} dynamicClasses={dynamicClasses} route={route} />
    },
    {
      title: 'Variables',
      dataIndex: 'variables',
      key: 'variables',
      responsive: ['lg'],
    },
    {
      title: 'Call ID',
      dataIndex: 'callId',
      key: 'callId',
      responsive: ['lg'],
    },
  ];

const CallLogsTable = (props) : CallTableProps => {

    const handleReDirectToCallDetails = () => {
        redirect(`/`)
    }


    return (
        <StyledTableContainer>
            <Table columns={columns('wrapper', handleReDirectToCallDetails, '/')} dataSource={props.recordings} bordered loading={props.recordings.length} />
        </StyledTableContainer>
    )
}



export default CallLogsTable