import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4 w-full flex-col-reverse sm:flex-row sm:w-max">
      Hey, {user.email}!
      <form action={signOut} className="w-full sm:w-max flex items-center justify-center">
        <button className="py-2 w-full flex-col sm:w-max justify-center items-center px-4 rounded-md hover:text-sky-600 text-[#fff] no-underline bg-cyan-950 hover:bg-btn-background">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-3 w-full flex-col items-center sm:w-max px-8 text-xl flex rounded-md hover:text-sky-600 no-underline bg-cyan-950 hover:bg-btn-background"
    >
      Login
    </Link>
  );
}
