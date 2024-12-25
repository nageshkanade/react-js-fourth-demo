import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom" // This is Navigate react roudter
import style from'./About.module.scss';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';
import AboutChild from "../../../component/AboutChild";
import {childDetails} from '../../../component/Constant';



const About = () => {
  /******************** Use state***************************************/ 
  const [details,setDetails]=useState()
  const [message,setmeassage]=useState()
  const [update,setUpdate]=useState()
  const [abc,setabc]=useState()

  const navigate = useNavigate(); // Navigate function
  /************************ Consola log*************************************/ 

  console.log('This is childDetails from constant =>',childDetails);
  console.log('This is abc json formate',abc)

/******************** useEffect*************************************************/

  useEffect(()=>{
    setDetails(childDetails);            
  },[]);
  /************************** Function*******************************************/

  const changeValue=(message)=>{
    console.log('funtion is calling change value ...!', message)    // This is a function
    setmeassage(message)
  }

  const updateValue = (msg) =>{
    console.log(msg)      
    setUpdate(msg)
    // navigate("/NavigateChild");
  }

/***************************** This is main function******************************************/
    return (
      <>
        <Header />
        <div className={style.About}>
          {/* <h1>This is About Page</h1> */}
           <div className="row">
            <div className={`col-md-8 bg-success ${style.left}`}>
              <h3>This is About Page</h3>
              <h3>{update}</h3>
              <button className="btn btn-danger" onClick={()=>{changeValue('Hey how are you ')}}>change Value</button>
            </div>
            <div className={`col-md-4 bg-warning ${style.right}`}>
              <h3>This About Child </h3>

              <AboutChild             // This is About child funtion 
              childDetails={details}    // This is constant json format
              message={message} // This is changeValue funtions it is go to About child 
              updateValue={updateValue} // This is About child function
              setabc={setabc}  // This is About child json format
              
              />
              
        


            </div>
          </div> 
          {/* <Box >
            <Box></Box>
            <Box></Box>
          </Box> */}
        </div>
        <Footer />
      </>
    );
  };
  
  export default About;