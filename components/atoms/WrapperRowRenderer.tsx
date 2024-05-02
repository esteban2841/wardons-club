import React from 'react'
import Link from "next/link";
import { recordingsObject } from '@utils/types/index.ts'

export interface RowRedirectProps {
  dynamicClasses?: string,
  clickRedirectHandler?: ()=> void,
  route: string,
  recordings: Array<recordingsObject>
}

const WrapperRowRouterRedirect = (props: RowRedirectProps) => {
  return (
   <Link
    href={`/dashboard/${props.route}`}
    className={`no-underline ${props.dinamicClasses}`}
    onClick={props.clickRedirectHandler}
   >View</Link>
  )
}

export default WrapperRowRouterRedirect