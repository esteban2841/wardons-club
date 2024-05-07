'use client'
import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components'

const CustomButton = styled.button`
  position: absolute;
  bottom: 140px;
`

export default function NotFound() {
 return (
    <div className='relative flex flex-col w-full min-h-screen justify-center items-center bg-[#fff]'>
      <div className="relative w-full flex items-center justify-center">
          <Link  href="/" >
            <Image width={'1200'} height={'600'} src="/assets/images/not-found.png" alt="Not found page" />

          </Link>

      </div>
    </div>
 );
}