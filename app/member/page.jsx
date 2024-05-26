import { getServerSession } from "next-auth";
import {options}  from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";


const Member =async () => {
    const session = await getServerSession(options);

   if (!session) {
    redirect("/api/auth/signin?callbackUrl=/member")
   }
 


  return (
    <div>
      <h1>MEMBER SERVER SESSION</h1>
      <p>{session?.user?.email  }</p>
      <p>{session?.user?.role  }</p>
    </div>
  );
};

export default Member;
