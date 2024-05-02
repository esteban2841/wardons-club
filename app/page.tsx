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
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Image
            src='/assets/images/leaping-ai-logo.png'
            width={200}
            height={60}
            alt="Picture of the author"
          />
          <div className="flex flex-row w-6/12 gap-4">
            { <AuthButton />}
            { user &&
              <Link 
                href='dashboard'
                className="py-2 px-3 flex rounded-md no-underline bg-cyan-950 hover:border-indigo-900 hover:bg-btn-background-hover">
                Calls Dashboard
              </Link>
            }

          </div>
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-screen-2xl px-3">
        <LeapingImage/>
      </div>
    </div>
  );
}
