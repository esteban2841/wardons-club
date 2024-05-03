import { LeapingImage } from "@/components/atoms/LeapingAiImage";
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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="flex-col w-full justify-center gap-6 align-center border-b border-b-foreground/10 sm:max-w-6xl sm:flex-row sm:h-max">
        <div className="flex flex-col-reverse gap-4 sm:justify-between items-center p-3 sm:max-w-6xl text-sm sm:flex-row">
          <div className="pointer">
            <Image
              src='/assets/images/leaping-ai-logo.png'
              className='hover:scale-[1.15]'
              width={140}
              height={60}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-row max-w-max gap-4 justify-end align-center sm:max-w-6/12">
            { <AuthButton />}
            { user ?
              <Link 
                href='dashboard'
                className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-cyan-950">
                <p>Calls Dashboard</p>
              </Link>
              :<></>
            }

          </div>
        </div>
      </nav>

      <div className="animate-in w-full flex-1 flex flex-col gap-20 opacity-0 sm:max-w-6xl px-3">
        <LeapingImage/>
      </div>
    </div>
  );
}
