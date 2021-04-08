import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Suggestion({videoList,changeSelection,selectedVideoId}) {

  const changeSelectedVideo=(data)=>{
    changeSelection(data)
  }
    return (
        <>
        {
          videoList.length > 0 && videoList.map(data=>{
            if(data.id!==selectedVideoId){
              return(
                <ListGroup.Item onClick={()=>{changeSelectedVideo(data)}} style={{cursor:'pointer'}} key={data.id}>
                  <div style={{marginBottom:10,padding:10,display:'flex'}}>
                    <div>
                      <img src={data.thumbnails.medium.url} height='80px'/>
                    </div>
                    <div style={{paddingLeft:5}}>
                      <div className="sugg-title">{data.title}</div>
                      <div className="sugg-channel text-info" >{data.channel.title}</div>
                    </div>
                  </div>
                </ListGroup.Item>
              )
            }
           
          })
        }
        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        {
          // videoList.length>0 && videoList.map(data=><p onClick={()=>{changeSelectedVideo(data)}}>{data.title}</p>)
        }
      </>
    )
}
