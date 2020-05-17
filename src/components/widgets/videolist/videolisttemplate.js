import React from 'react';
import styles from './videoslist.module.css';

import {Link} from 'react-router-dom';
import CardInfo from '../cardinfo';

const VideosListTemplate = (props ) => {
    console.log(props)
    return props.data.map((item, i) =>{

        return <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videolistItem_wrapper}>
                <div className={styles.left}
                style={{
                    background:`url(/image/videos/${item.image})`
                }}
                >
                    <div></div>
                </div>
                <div className={styles.right}>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    })

}
export default VideosListTemplate;