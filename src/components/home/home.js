import React from 'react';


//components
import NewsSlider from '../widgets/news_slider/slider';
import NewsList from '../widgets/Newslist/newslist';
import VideoList from '../widgets/videolist/videoslist';

const Home = () =>{
    return(
        <div>
            <NewsSlider
                type="featured"
                start={10}
                amount={15}
                settings={{
                    dots:false
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={1}
                amount={3}
            />
            <VideoList
                type="card"
                title={true}
                loadmore={true}
                start={1}
                amount={3}
            />
        </div>
    )
}

export default Home;