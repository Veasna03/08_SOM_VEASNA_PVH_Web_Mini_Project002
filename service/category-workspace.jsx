import { auth } from "../auth";

export async function getAllWorkSpace(){

const session=await auth();
console.log("session=",session)
  
const res=await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,{
    method: "GET",
    headers : {
        "Authorization": `Bearer ${session?.payload?.token}`
    },
})
const getAll=await res.json();
return await getAll.payload;

}