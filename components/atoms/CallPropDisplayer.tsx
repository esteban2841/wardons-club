import React from 'react'

export interface CallPropsDisplayer {
    title: string,
    content: string,
    bgColor?: string,
    borderColor?: string
}

const CallPropDisplayer = (props: CallPropsDisplayer) => {
  return (
    <div className={`'text-sm flex gap-3 flex-col p-4 border-t-2 border-solid box-border bg-[${ props.bgColor || '#141617'}] border-[${ props.bgColor || '#1F2122'}]'`}>
        <h1 className='text-lg'>
            {props.title}
        </h1>
        <p className='font-light text-[#747676] text-sm leading-6 text-justify'>
            {props.content}
        </p>
    </div>
  )
}

export default CallPropDisplayer