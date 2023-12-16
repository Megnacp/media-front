import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideo } from '../service/allapi'




function View({serverRes}) {

  const[allVideos,setallVideos]=useState([])

  const[deleteStatus,setdeleteStatus]=useState(false)

  // const[allCategory,setallCategory]=useState([])

  //  use effect

  useEffect(() => {
    getallVideos()

   
    
}, [serverRes,deleteStatus])

  // useEffect(()=>{
  //   getallCategory()
  // },[serverRes])

  const handleDeleteStatus=(res)=>{
    setdeleteStatus(res)
  }
  

  // define a function for api call

  const getallVideos=async()=>{
    // api call
    const response=await getVideo()
    // console.log(response.data);
    setallVideos(response.data)
  }

  console.log(allVideos);

  // const getallCategory=async()=>{
  //   // api call
  //   const response=await getCategory()
  //   // console.log(response.data);
  //   setallCategory(response.data)
  // }

  // console.log(allCategory);
  

  return (
    <>
    <div className='border p-3 rounded m-4'>

        <Row>
          {
            allVideos.map(video=>(
             
              <Col sm={12} md={6}>

              <VideoCard card={video} handleDeleteStatus={handleDeleteStatus}/>

              
          </Col>
            ))
              
          }
            
        </Row>

    </div>
    </>
  )
}

export default View