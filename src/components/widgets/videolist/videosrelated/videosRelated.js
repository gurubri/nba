import React from 'react';
import styles from '../videoslist.module.css';

import VideoListTemplate from '../videolisttemplate';

const videosRelated = (props) => {
    return (
        <div className={styles.relatedWrapper}>
            <VideoListTemplate 
                data={props.data}
                teams={props.teams}
            /> 
        </div>

    )
}

    
export default videosRelated;