import React from 'react';
import {Link} from 'react-router-dom';


import FontAwesome from 'react-fontawesome';
import style from './header.module.css';

const SideNavItems = () => {

    const items = [
        {
            type : style.option,
            icon:'home',
            text: 'Home',
            link: '/'
        },
        {
            type : style.option,
            icon:'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type : style.option,
            icon:'play',
            text: 'Videos',
            link: '/Videos'
        },
        {
            type : style.option,
            icon:'sign-in',
            text: 'sign-in',
            link: '/sign-in'
        },
        {
            type : style.option,
            icon:'sign-out',
            text: 'sign-out',
            link: '/sign-out'
        }
    ]
    const showItems = () => {
        return items.map((item,i) =>{
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                       {item.text}
                    </Link>
                </div>
            )
        })
    }

    return(
        <div>
            {showItems()}
        </div>
        
    )
}

export default SideNavItems;
   