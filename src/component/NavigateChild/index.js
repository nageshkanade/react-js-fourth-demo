import React, { useEffect, useState } from "react";
import style from "./NavigateChild.module.scss";
import Footer from "../Footer";
import Header from "../Header";
import  {childDetails} from "../Constant"

const Navigatechild = () => {

    const[detail,setDetail]=useState([]);
    const[constant,setConstant]=useState([]);
    const[merge,setMerge]=useState([]);

    console.log('This student_id detail????',detail);

    // console.log(updataValue)
    console.log(merge,'this is merge data ')

    // const StudentDetails = JSON.parse(localStorage.getItem('Student')); This is rajesh solution 
    const StudentDetails = localStorage.getItem('Student'); // and This is sir solution

    
    useEffect(()=>{
      
      if(StudentDetails.length>0){
        // setDatailValue(StudentDetails); // rajesh
        setDetail(JSON.parse(StudentDetails))
        setConstant(childDetails);
      }
    },[]);
    
    useEffect(()=>{
    const updataValue=[{...detail[0],...constant[0]}]
      setMerge(updataValue)
    },[merge])

    // if(!merge) return null;

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={style.Navigate}>
        <h1>This is NavigateChild Page</h1>
        {merge?.map((item,index)=>{
         return( <div key={index}>
            <p><span>{item.student_Id}</span></p>
            <p><span>{item.name}</span></p>
            <p><span>{item.Mob}</span></p>
            <p><span>{item.Email}</span></p>
            <p><span>{item.N}</span></p>
            <p><span>{item.M}</span></p>
            <p><span>{item.E}</span></p>
          </div>)
        })};
      </div> 
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Navigatechild;
