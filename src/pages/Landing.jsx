

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {

  // function definition

  // redirect from one page to another page we can use useNavigate hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    navigate('/home')

  }
  return (
    <div>
      <Row className='align-items-center'>

        <Col></Col>

        <Col lg={6}>

          <h1>Welcome to video.com</h1>
          <p style={{textAlign:'justify'}}>Where user can use their favourite videos,user can upload any youtube</p>

          <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>
        </Col>

        <Col lg={5}>

          <img className='img-fluid' width={'300px'} height={'300px'} src="https://i.pinimg.com/1200x/19/6c/0e/196c0eccf709ab14e6af766d96e85600.jpg"></img>
        </Col>

      </Row>
    </div>
  )
}

export default Landing