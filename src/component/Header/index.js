import React from 'react';
import style from'./Header.module.scss';
import { Link } from 'react-router-dom';

const Header=()=>{
    return <div className={style.HeaderNav}>
        <div className={style.HeaderFirst}>
            <h1>Developer Guru</h1>
        </div>
        <div className={style.HeaderSecond}>
            <ul className={style.Nav}>
                <li><Link to='/' className={`link ${style.link}`}>HOME</Link></li>
                <li><Link to='/About' className={`link ${style.link}`}>ABOUT</Link></li>
                <li><Link to='/Service' className={`link ${style.link}`}>SERIVCE</Link></li>
                <li><Link to='/Probuct' className={`link ${style.link}`}>PROBUCT</Link></li>
               
            </ul>
        </div>
    </div>
}

export default Header;