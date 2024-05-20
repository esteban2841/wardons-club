import React, { ReactElement } from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  route: string,
  children: ReactElement
}

const WrapperRowRouterRedirect = ({children, dynamicClasses, route}: RowRedirectProps) => {
  return (
   <Link
    href={`/dashboard/${route}`}
    className={`no-underline text-inherit hover:no-underline ${dynamicClasses}`}
   >{children}</Link>
  )
}

export default WrapperRowRouterRedirect