import React from "react";
import style from'./Probuct.module.scss';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';


const Product = () => {
    return (
      <>
        <Header />
        <div className={style.Product}>
          <h1>This is Product Page</h1>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Product;