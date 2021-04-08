import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Suggestion({videoList,changeSelection}) {

  const changeSelectedVideo=(data)=>{
    changeSelection(data)
  }
    return (
        <>
        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        {
          videoList.length>0 && videoList.map(data=><p onClick={()=>{changeSelectedVideo(data)}}>{data.title}</p>)
        }
      </>
    )
}
