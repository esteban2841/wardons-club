import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from 'next/image'
import DashboardLogs from "@/components/molecules/DashboardLogs"
import Link from "next/link";

const ProtectedPage = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm">
            <Link href='/' className="pointer">
              <Image
                src='/assets/images/leaping-ai-logo.png'
                className='hover:scale-[1.15]'
                width={140}
                height={60}
                alt="Picture of the author"
              />
            </Link>
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-6 opacity-0 w-full px-1">
        <main className="flex-1 flex flex-col gap-6 items-center">
          <h2 className="font-bold text-left text-2xl mb-4">Calls Dashboard</h2>
          <DashboardLogs/>
        </main>
      </div>
    </div>
  );
}
 
 export default ProtectedPage;