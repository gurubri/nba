import React from 'react';
import {Link} from 'react-router-dom';


import FontAwesome from 'react-fontawesome';
import style from './header.module.css';

const SideNavItems = () => {
    return(
        <div className={style.option}>
            <Link to="/">
                <FontAwesome name="home"/>
                Home
            </Link>
        </div>
    )
}

export default SideNavItems;