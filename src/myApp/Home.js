import React from 'react'
import Mypic from '../logo.svg'
const Home = () => {
  let width = "100px"
  return (
    <div>
        <h1>Home</h1>
    <img 
    src={Mypic}
    width ={width}
    />
    </div>
  )
}

export default Home
