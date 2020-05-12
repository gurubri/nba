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
                start={4}
                amount={7}
            />
            <VideoList
                type="card"
                title={true}
                loadmore={true}
                start={5}
                amount={9}
            />
        </div>
    )
}

export default Home;