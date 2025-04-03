import { redirect } from "next/navigation";
import { auth } from "../../../../auth"
import CardComponent from "@/components/card";

export default async function Dashboardpage(){

const session =await auth();
if(!session?.token){
    redirect("/login")
}
    return (
        <>
          <CardComponent/>
        </>
    )
}