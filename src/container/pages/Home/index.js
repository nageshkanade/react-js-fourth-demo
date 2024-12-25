import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.scss";
import "./Home.module.scss"
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import { redirectpageDetails } from "../../../component/Helper";


const Home = () => {
  // This is state value
  const[name,setName]=useState()
  const[name1,setname1]=useState()
  const Name='true';

  const navigate = useNavigate();

  // This is the Json Data

  const Student=[
    { 'student_Id':'91','name':'raj','Mob':7709458130,'Email':'raj121@gmail.com'},
    { 'student_Id':'92','name':'Dharm','Mob':7709458030,'Email':'raj121@gmail.com'},
    { 'student_Id':'93','name':'Gani','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
  //   {'name':'raj','Mob':7709458030,'Email':'raj121@gmail.com'},
   ];

 // This is state console
  console.log(name)
//This is useEffect
 useEffect(()=>{
  console.log('Hello I am useEffect')
  setName('Hello Developer Guru......');
  setname1(Student)
 },[]);
// This is condition methods
 useEffect(()=>{
if(name?.length>0){
  console.log('Hello I am true value ...')

}  
else{
  console.log('Hey I am false value')
}
 },[]);

 // This is userdefine methods 
 const fillterData=()=>{
  console.log('Hello I am userdefine methods...')
 };

/******************************* Navigate **********************************/ 

  const Navigate=(student_Id,name,Mob,Email)=>{
  // console.log(student_Id,name,Mob,Email,'????????>>>>>??????') 
    
   navigate("/NavigateChild")
  //  localStorage.setItem('Student',91);
   const obj=[
    {
      'student_Id':student_Id,
      'name':name,
      'Mob':Mob,
      'Email':Email,
    }
  ]
  
  //  localStorage.setItem('Student',JSON.stringify(name1));
   localStorage.setItem('Student',JSON.stringify(obj));
  }
  /**************************************************************/


 //This is business logic code 

  return (
    <>
      <div>
        <Header />
      </div>
      {/* inline +bootstrap */}
      <div className={`${style.Home}`} >  
      {/* bootstrap */}
        {/* <h1 className="text-primary">This is Home Page</h1>  */}
        { name1?.length>0? name1?.map((item,index)=>{
          return(<div key={index}>
            <p>Name:<span>{item.name}</span></p>
            <p>Mobile:<span>{item.Mob}</span></p>
            <p>Email:<span>{item.Email}</span></p>
            {/* <button className="btn btn-primary" onClick={()=>{Navigate(item.student_Id,item.name,item.Mob,item.Email)}}>Navigate Button</button> */}
            <button className="btn btn-primary" onClick={()=>{redirectpageDetails('Student',[item],navigate,'/NavigateChild')}}>Navigate Button</button>
          </div>) 
        }):
        <h1>Recorde Not Founde</h1>
      }      
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
