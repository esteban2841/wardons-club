import React, { ReactElement } from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  route: string,
  children: ReactElement
}

const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

const WrapperRowRouterRedirect = ({children, dynamicClasses, route}: RowRedirectProps) => {
  return (
   <Link
    href={`${baseUrl}/${route}`}
    className={`no-underline text-inherit hover:no-underline ${dynamicClasses}`}
   >{children}</Link>
  )
}

export default WrapperRowRouterRedirect