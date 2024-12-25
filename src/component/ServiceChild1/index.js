import React from "react";
import style from './ServiceChild1.module.scss';
import ServiceChild2 from "../ServiceChild2";


const ServiceChild1=({setPqr,data,Click_Me})=>{
return(
<>

< ServiceChild2 setPqr={setPqr} data={data} Click_Me={Click_Me}/>
</>)

}

export default ServiceChild1;