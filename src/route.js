import React, {Component } from 'react';
import {Route, Switch} from 'react-router-dom';


//components
import Home from './components/home/home'
import Layout from './hoc/layout/layout';
import NewsArticle from './components/articles/News/Post/index';

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" component={NewsArticle}/>
                </Switch>
            </Layout>
            
        )
    }
}

export default Routes;