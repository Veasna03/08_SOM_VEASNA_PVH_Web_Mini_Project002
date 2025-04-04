export default async function registerService({username,email,password}){
const res=await fetch("http://96.9.81.187:8080/api/v1/auth/register",{
    method: "POST",
    headers: {
        "content-Type": "application/json",
         
    },
    body: JSON.stringify({
        username: username,
        email: email,
        password
    })

})
const data=res.json();
return data;


}