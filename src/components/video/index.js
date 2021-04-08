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
    const [error,seterror]=useState(false)
    
    useEffect(() => {
        callApi();
    }, [searchString]) 

    const callApi = async () => {
        console.log(searchString);
        const results = await youtube.searchVideos(searchString,10);
        if(results.length===0){
            seterror(true)
        }else {
            seterror(false)
        }
        setselectedVideo(results[0]);
        setvideoList(results)
    } 

    const selectedVideoCallback=(videoDetail)=>{
         setselectedVideo(videoDetail)
    }
    
    return(

        <>
        
           <Col xs={12} lg={8} > {error ? <h1> No result found please try looking for something else </h1> : <SingleVideo details={selectedVideo}/>}</Col>
           <Col xs={12} lg={4} >
               { !error && 
               <ListGroup>
                   <p>Suggestions </p>
               <Suggestion videoList={videoList} changeSelection={selectedVideoCallback} selectedVideoId={selectedVideo.id}/>
               </ListGroup>
                     }
               </Col>
        </>
    )
}

export default Video;