import React from 'react'
import PropTypes from 'prop-types'
import AuthButton from '../atoms/AuthButton'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from "@/utils/supabase/server";


const NavBar = async (props) => {

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    return (
    <nav className="flex fixed z-10 flex-col mt-10 rounded-xl overflow-hidden w-full sm:justify-center justify-center gap-6 align-center border-2 bg-[[#1F2122] sm:max-w-7xl text-[#fff] border-[#1F2122] sm:flex-row sm:h-12">
        <div className="flex flex-col w-full gap-3 h-full justify-center sm:justify-between items-center sm:max-w-7xl text-sm sm:flex-row">
            <div className="flex w-full px-6 sm:w-max items-center sm:justify-between justify-center bg-[#1F2122] border-[##1F2122] border-2 rounded-t-md">
                <Image
                    src='/assets/images/leaping-ai-logo.png'
                    className='hover:scale-[1.15] pointer'
                    width={140}
                    height={60}
                    alt="Picture of the author"
                />
            </div>
            <div className="flex flex-col w-full sm:flex-row-reverse sm:h-full sm:w-max justify-center items-center w-full sm:max-w-6/12">
            { user ?
                <Link 
                href='dashboard'
                className="w-full items-center justify-center sm:w-['130px'] flex h-full  hover:text-sky-600 shadow-inner shadow-md rounded-t-sm hover:border-4 hover:border-[#1F2122] hover:text-[#747676]">
                <p>Calls Dashboard</p>
                </Link>
                :<></>
            }
            { <AuthButton />}

            </div>
        </div>
    </nav>
  )
}

export default NavBar