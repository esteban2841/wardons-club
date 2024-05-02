'use client'
import React from 'react'
import { recordingsObject, fileResponseObject } from '@/utils/types/index'
import { Table } from 'antd';
import styled from "styled-components";
import { redirect } from 'next/navigation';
import WrapperRowRouterRedirect from '../atoms/WrapperRowRenderer'
import { Suspense } from 'react';
import type { ColumnsType } from 'antd/es/table';

export interface CallTableProps {
    recordings: Array<recordingsObject>,
    // redirectCallback: () => void,
}


const StyledTableContainer = styled.div`
    width: 100%;
`;

const columns = () => [
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'callId',
      sorter: (a: any, b: any) =>{
        const dateA = new Date(a.createdOn?.replace(/th/, '').replace(/(\d{2})$/, '20$1'));
        const dateB = new Date(b.createdOn?.replace(/th/, '').replace(/(\d{2})$/, '20$1'))
        return dateA > dateB ? -1 : 1
      },
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
      dataIndex: 'callId',
      key: 'recordingUrl',
      render: (callId: string) => <WrapperRowRouterRedirect />
    },
    {
      title: 'Call Length',
      dataIndex: 'callLength',
      key: 'callLength',
      responsive: ['lg'],
      sorter: (a: any, b: any) => (a.callLength!) - (b.callLength!),
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
      render: (callId: string) => <WrapperRowRouterRedirect />
    },
    {
      title: 'Transcript',
      dataIndex: 'callId',
      key: 'transcript',
      render: (callId: string) => <WrapperRowRouterRedirect />
    },
    {
      title: 'Variables',
      dataIndex: 'variables',
      key: 'variables',
      responsive: ['lg'],
      render: (callId: string) => <WrapperRowRouterRedirect />
    },
    {
      title: 'Call ID',
      dataIndex: 'callId',
      key: 'callId',
      responsive: ['lg'],
    },
  ];


  const columnsDefault = (dynamicClasses?: string, clickRedirectHandler?: ()=> void, route?: string, recordings?: Array<recordingsObject>) => [
    {
      title: 'Created On',
      dataIndex: 'createdOn',
      key: 'callId',
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
      dataIndex: 'callId',
      key: 'recordingUrl',
    },
    {
      title: 'Call Length',
      dataIndex: 'callLength',
      key: 'callLength',
      responsive: ['lg'],
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
      dataIndex: 'callId',
      key: 'transcript',
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

const CallLogsTable = (props : CallTableProps)  => {

    const handleReDirectToCallDetails = () => {
        redirect(`/`)
    }


    return (
        <StyledTableContainer>
          <Suspense fallback={<Table columns={columnsDefault()} bordered loading rowKey="uid" />}>
            <Table columns={columns('wrapper', handleReDirectToCallDetails, '/', props.recordings)} dataSource={props.recordings}  rowKey="uid"/>

          </Suspense>
        </StyledTableContainer>
    )
}



export default CallLogsTable