import React from 'react';
import styles from './videoslist.module.css';

import {Link} from 'react-router-dom';
import CardInfo from '../cardinfo';

const videosListTemplate = (props ) => {
    return props.data.map((item, i) =>{

        return <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videolistitem_wrapper}
            style={{
                background:`url(/image/videos/${item.image})`
            }}
            >
                <div></div>
            </div>
            <div className={styles.right}>
                <h2>{item.title}</h2>
            </div>
        </Link>
    })

}
export default videosListTemplate;