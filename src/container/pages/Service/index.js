import React, { useEffect, useState } from "react";
import style from'./Service.module.scss';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';
import ServiceChild1 from "../../../component/ServiceChild1";


const Service = () => {

const[pqr,setPqr]=useState()
console.log('This is json format from ServiceChild3',pqr)
const[data,setDate]=useState()
const[click,setClick]=useState()

// Date tranfor form prent to mutiple child
  const dataTranfor=[{'n':'Good Boy','m':'00000','e':'Good@gmail.com'}]
  const nagesh=[{'n':'Dharm is Good Boy','m':'120120120','e':'Dharm@gmail.com'}]

  useEffect(()=>{
    setDate(dataTranfor)
  },[])

  useEffect(()=>{
 setClick(nagesh)
  },[])
  const Click_Me=()=>{
    console.log(nagesh)
    
  }
    return (
      <>
        <Header />
        <div className={style.Service}>
          <h1>This is Service Page</h1>
          <ServiceChild1 setPqr={setPqr}   data={data}  Click_Me={Click_Me}/>
          {pqr?.map((item,index)=>{
             return( <div key={index}>
                <p>Name :<span>{item.Name}</span></p>
                <p>Mob :<span>{item.Mob}</span></p>
                <p>Email :<span>{item.Email}</span></p>
              </div>)
          })}
        </div>
        <Footer />
      </>
    );
  };
  
  export default Service;