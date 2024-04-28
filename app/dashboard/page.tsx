import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from 'next/image'
import { GetServerSideProps } from 'next';

type DashboardProps = {
  files: Array<{ Key: string }>;
};

const ProtectedPage: React.FC<DashboardProps> = async ({files}) => {
  const supabase = createClient();
	console.log("TCL: files", files)

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <Image
              src='/assets/images/leaping-ai-logo.png'
              width={200}
              height={60}
              alt="Picture of the author"
            />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-1">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Calls Dashboard</h2>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/calls');
  const data = await response.json();
 
  return {
     props: {
       files: data,
     },
  };
 };
 
 export default ProtectedPage;