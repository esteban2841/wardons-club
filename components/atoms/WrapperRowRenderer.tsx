import React from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  clickRedirectHandler?: ()=> void,
  route: string,
}

const WrapperRowRouterRedirect = (props: RowRedirectProps) => {
  return (
   <Link
    href={props.route}
    className={`no-underline ${props.dinamicClasses}`}
    onClick={props.clickRedirectHandler}
   >View</Link>
  )
}

export default WrapperRowRouterRedirect