import React, { useEffect } from "react";
import style from './AboutChild.module.scss'



const AboutChild=({childDetails,message,updateValue,setabc})=>{
  
  const abc=[{'n':'nagesh','mob':'1234','email':'nagesh@gmail.com'}]
  console.log('This is json format to abc',abc)
  useEffect(()=>{
    setabc(abc)
  },[])

  return<>
  <h2>{message}</h2>

    {childDetails?.map((item,index)=>{
       return( <div key={index}>
            <p>Name :<span>{item.N}</span></p>
            <p>Mob :<span>{item.M}</span></p>
            <p>Email:<span>{item.E}</span></p>
            <button className="btn btn-danger" onClick={()=>{updateValue('Heyyy I am Fine')}}>update Value</button>
        </div>)
    })}

  
  
  </>
}

export default AboutChild;