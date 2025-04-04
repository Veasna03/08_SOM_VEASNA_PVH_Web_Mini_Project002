import { redirect } from "next/navigation";
import { auth } from "../../../../auth"
import { getAllWorkSpace, getCategory } from "../../../../service/category-workspace";
import Slidebarpage from "@/components/SildeBar";
import CardComponent from "@/components/card";
import NavBarPage from "@/components/ui/navbar";
// import "../globals.css";

export default async function Dashboardpages(){
               const workspace=await getAllWorkSpace();
               console.log("workspace=",workspace)
    return (
      <>
        <div className="grid grid-cols-12 ">
           <aside className="col-span-3 bg-amber-300">Slide bar
            <Slidebarpage/>
           </aside>
           <section className="col-span-9 bg-blue-400">
           <div className="flex flex-col">
           <NavBarPage/>
           <div className="flex flex-row justify-between p-8">
                 <h1>hello</h1>
                 <h2>jiji</h2>
           </div>
           </div>           

           </section>

        </div>
      </>
    )
}