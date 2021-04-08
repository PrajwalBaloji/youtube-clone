import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import SingleVideo from './SingleVideo';
import Suggestion from './Suggestion';
import YouTube from 'simple-youtube-api'
import config from '../../config'
const youtube = new YouTube(config.apiKey);


const Video = ()=>{
    
    const [videoList,setvideoList]=useState([])
    
    useEffect(() => {
        callApi();
    }, []) 

    const callApi = async () => {
        const results = await youtube.searchVideos('rcb',5);
        console.log(videoList);
        setvideoList(results)
    } 
    
    return(
        <>
           <Col xs={12} lg={8} style={{border:'2px solid red'}}><SingleVideo details={videoList[0]}/></Col>
           <Col xs={12} lg={4} style={{border:'2px solid red'}}><Suggestion/></Col>
        </>
    )
}

export default Video;