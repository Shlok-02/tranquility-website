import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState ,useEffect} from 'react'
import "./Activites.css"

const Activites = () => {
  const img1=require('../../Images/6517.jpg');
  const [activity,setActivity]=useState([]);

	useEffect(()=>{
		fetchData();
	},[])

	const fetchData=async()=>{
		const response = await fetch('http://www.boredapi.com/api/activity?type=recreational')
		const data = await response.json()
		console.log(data)
		setActivity(data)
	}


  const handleClick=(e)=>{
	window.location.reload();
  }

  return (
    <>
        <Navbar/>
        <div className='activites'>
			<div className="wrap">
				<div className="left-activites">
					<div className="card">
						<div className="card-title">
							Activity
						</div>
						<div className="underline"></div>
						<div className="card-activity">
							<p>{activity.activity}</p>
						</div>
					</div>
					<button onClick={handleClick}>Click Me For Fun</button>
				</div>  
				<div className="right-activites">
						<img src={img1} alt="" />
				</div>
		  </div>
        </div>  
    </>
  )
}

export default Activites