import { Session } from "inspector/promises";
import { auth } from "../auth";

export default async function TaskService(){
    const seesion=await auth();
    const res=await fetch(`http://96.9.187.8080/api/v1/task/workspace/2b6398cb-5776-4852-b549-9da67/8aacd?pageNo=0&pageSize=0`,{
           method: "GET",
           headers: {
            Authorization: `Bearer ${seesion?.payload?.token}`,

           }
    })
const getAll= await res.json();
const data =await getAll.payload;
return data;


}