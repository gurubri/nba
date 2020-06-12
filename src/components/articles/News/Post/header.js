import React from 'react';

import TeamInfo from '../../Elements/teamInfo';
import PostData from '../../Elements/postdata';

const header = (props) => {

    const teamNfo = (team) => {
        return team ? (
        <TeamInfo team={team}/>
        ) : <div>Hello</div>;
    }
    const postData = (date, author) => {
        return(
        <PostData data={{date, author}}/>
        )
    }

    return (
        <div>
           {teamNfo(props.teamData)}
           { postData(props.date, props.author)}
        </div>
    )
}

export default header;