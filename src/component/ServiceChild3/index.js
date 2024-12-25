import React, { useEffect } from "react";
import style from './ServiceChild3.module.scss';


const ServiceChild3=({setPqr,data,Click_Me})=>{


    const pqr=[{'Name':'Ranjit shinde','Mob':'123456','Email':'Ranjit@gmail.com'}]
    
    useEffect(()=>{
                setPqr(pqr)  
    },[])
    

return(
<>
{data?.map((item,index)=>{
  return(  <div key={index}>
     <p><span>{item.n}</span></p>
     <p><span>{item.m}</span></p>
     <p><span>{item.e}</span></p>
     <button className="btn btn-success" onClick={()=>{Click_Me()}}>Click Me</button>
     </div>)

})}
</>)

}

export default ServiceChild3;