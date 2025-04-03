import { redirect } from "next/navigation";
import { auth } from "../../../../auth"
import { getAllWorkSpace, getCategory } from "../../../../service/category-workspace";
import Slidebarpage from "@/components/SildeBar";
import CardComponent from "@/components/card";
// import "../globals.css";

export default async function Dashboardpages(){
               const workspace=await getAllWorkSpace();
               console.log("workspace=",workspace)
    return (
      <>
  <h1 className="text-amber-300">Hello</h1>
          <Slidebarpage/>
  <CardComponent/>
      </>
    )
}