import React, { Component} from 'react';
import styles from './videoslist.module.css';
import axios from 'axios';

import {URL} from '../../../config';
import Button from '../buttons';
import videosListTemplate from './videolisttemplate';

class videoslist extends Component {
    state ={
        teams:[],
        videos:[],
        start:this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
 
    }
    componentWillMount (){
        this.request(this.state.start, this.state.end)
    }
    request = (start,end) =>{
        if(this.state.length < 1){
            axios.get(`${URL}/teams`)
            .then( response =>{
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                videos:[...this.state.videos, ...response.data]
            })
        })
    }
    renderVideos = () =>{
        let template = null;
        switch(this.props.type){
            case('card'):
                template = <videosListTemplate data={this.state.videos} teams={this.state.teams}/>
                break;
        default:
            template=null;
        }
        return template;
    }

    loadmore = () => {

    }
    renderButton = () => {
        return this.props.loadmore ?
        <Button
            type="loadmore"
            loadmore={()=>this.loadmore()}
            cta="Load More Videos"
        /> 
        : 
        <Button type ="linkto" cta="More videos" linkTo='/videos/'/>
    }

    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>NBA</strong>Videos</h3>
        : null
    }
    render(){ 
        console.log(this.state.videos)
        return(
            <div className={styles.videolist_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default videoslist;