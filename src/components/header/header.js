import React from 'react';
import style from './header.module.css';
import {Link} from 'react-router-dom';



import FontAwesome from 'react-fontawesome';
import SideNav from './sidenav'

const Header = (props) =>{

    const navBars = ()=>(
        <div className={style.bars}>
        <FontAwesome name="bars"
            onClick={props.onOpenNav}
            style={{
                color:'#dfdfdf',
                padding:'20px',
                cursor:'pointer'
            }}
        />
        </div>

    )

    const logo = () =>{
        return(
            <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png"></img>
            </Link>
        )
    }


    return(
        <header className={style.header}>
        <SideNav {...props}/>




            <div className={style.headerOpt}>
            {navBars()}
            { logo()}
            </div>
        </header>
    )
}

export default Header;