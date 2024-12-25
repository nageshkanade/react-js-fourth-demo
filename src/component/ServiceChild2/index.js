import React from "react";
import style from './ServiceChild2.module.scss';
import ServiceChild3 from "../ServiceChild3";


const ServiceChild2=({setPqr,data,Click_Me})=>{
return(
<>

<ServiceChild3 setPqr={setPqr} data={data} Click_Me={Click_Me}/>
</>
)
}

export default ServiceChild2;