import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState,useEffect } from 'react'
import "./Lofi.css"

const Lofi = () => {

  return (
    <>
        <Navbar/>
        <div className="meditations">
        <div className="meditation">
             <div id="meditation-results" className='iframeVideo'>
                <iframe id='video' title='video' width="860" height="450" src="https://www.youtube.com/embed/DWcJFNfaw9c"  ></iframe>
            </div> 
        </div>
       
        </div>
    </>
  )
}

export default Lofi