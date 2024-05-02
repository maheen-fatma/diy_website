import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Github()
{
    let {userParam}= useParams()
    
    const [data,setData]=useState([])
    let a= 'https://api.github.com/users/'+userParam.toString()
    
    useEffect(()=>{
        fetch(a)
        .then(res=>res.json())
        .then(res=>{setData(res)})
    }, [])
   
    
    
    return(
        <>
        <div className="text-center bg-orange-400 text-white  p-4 m-1 text-3xl" > This page collects data from the API. The data is dynamic. <br /> Github Followers: {data.followers} 
        <br />
        <div className="flex justify-center items-center mt-5">
         <img className="border border-solid border-white" width={300} src={data.avatar_url} alt="No Profile" />
        </div>
        
        </div>
        
        </>
        
    );
}
export default Github;