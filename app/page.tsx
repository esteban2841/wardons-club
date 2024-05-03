import { LeapingImage } from "@/components/atoms/LeapingAiImage";
import { RecordingImage } from "@/components/atoms/RecordingImage";
import AuthButton from "../components/AuthButton";
import Image from 'next/image'
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Index() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center text-[#fff] bg-[#141617]">
      <nav className="flex flex-col w-full sm:justify-between justify-center gap-6 align-center border-b-2 border-[#1F2122] sm:max-w-7xl sm:flex-row sm:h-max">
        <div className="flex flex-col w-full gap-4 justify-center sm:justify-between items-center p-3 sm:max-w-7xl text-sm sm:flex-row">
          <div className="flex w-full sm:w-max items-center sm:justify-between justify-center hover:bg-cyan-950 bg-btn-background py-2 px-3 rounded-md">
            <Image
              src='/assets/images/leaping-ai-logo.png'
              className='hover:scale-[1.15] pointer'
              width={140}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-col w-full sm:flex-row-reverse sm:w-max gap-4 justify-end items-center w-full sm:max-w-6/12">
            { user ?
              <Link 
                href='dashboard'
                className="py-2 w-full items-center justify-center sm:w-max px-3 flex rounded-md no-underline bg-cyan-950 hover:text-sky-600 hover:bg-btn-background">
                <p>Calls Dashboard</p>
              </Link>
              :<></>
            }
            { <AuthButton />}

          </div>
        </div>
      </nav>

      <div className="animate-in w-full flex-1 flex flex-col gap-20 opacity-0 sm:max-w-7xl px-3">
        <RecordingImage/>
      </div>
      <div className="animate-in w-full flex-1 flex flex-col gap-20 opacity-0 sm:max-w-7xl px-3">
        <LeapingImage/>
      </div>
    </div>
  );
}
