import React from 'react';


//components
import NewsSlider from '../widgets/news_slider/slider';

const Home = () =>{
    return(
        <div>
            <NewsSlider
                type="featured"
                start={3}
                amount={10}
                settings={{
                    dots:false
                }}
            />
        </div>
    )
}

export default Home;