import React, { useEffect, useState } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import SingleVideo from './SingleVideo';
import Suggestion from './Suggestion';
import YouTube from 'simple-youtube-api'
import config from '../../config'
const youtube = new YouTube(config.apiKey);


const Video = ({searchString})=>{
    
    const [videoList,setvideoList]=useState([])
    const [selectedVideo,setselectedVideo]=useState({})
    
    useEffect(() => {
        callApi();
    }, [searchString]) 

    const callApi = async () => {
        console.log(searchString);
        const results = await youtube.searchVideos(searchString,5);
        console.log(videoList);
        setselectedVideo(results[0]);
        setvideoList(results)
    } 

    const selectedVideoCallback=(videoDetail)=>{
         setselectedVideo(videoDetail)
    }
    
    return(

        <>
        {searchString}
           <Col xs={12} lg={8} style={{border:'2px solid red'}}><SingleVideo details={selectedVideo}/></Col>
           <Col xs={12} lg={4} style={{border:'2px solid red'}}>
               <ListGroup>
               <Suggestion videoList={videoList} changeSelection={selectedVideoCallback}/>
               </ListGroup>
               </Col>
        </>
    )
}

export default Video;