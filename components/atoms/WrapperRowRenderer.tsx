'use client'
import React, { ReactElement } from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  route: string,
  children: ReactElement,
  onClose?: () => void,
}

const baseUrl = process.env.VERCEL_URL
? `https://${process.env.VERCEL_URL}`
: "http://localhost:3000";

const WrapperRowRouterRedirect = ({children, dynamicClasses, route, onClose}: RowRedirectProps) => {
  return (
   <Link
    href={`${baseUrl}/${route}`}
    className={`no-underline text-inherit ${dynamicClasses}`}
    onClick={
      onClose
    }
   >{children}</Link>
  )
}

export default WrapperRowRouterRedirect