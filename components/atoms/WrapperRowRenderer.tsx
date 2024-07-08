'use client'
import React, { ReactElement } from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  route: string,
  children: ReactElement,
  onClose?: () => void,
  baseUrl: string, 
}


const WrapperRowRouterRedirect = ({children, dynamicClasses, route, onClose, baseUrl}: RowRedirectProps) => {
  return (
   <Link
    href={`${baseUrl}${route}`}
    className={`no-underline text-inherit ${dynamicClasses}`}
    onClick={
      onClose
    }
   >{children}</Link>
  )
}

export default WrapperRowRouterRedirect