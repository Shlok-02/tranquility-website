import React, { useEffect ,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import "./Jokes.css"
import axios from 'axios'

const Jokes = () => {
    const img1=require("../../Images/33369.jpg");
    const[base,setBase]=useState('');
    const[delivery,setDelivery]=useState('');
    useEffect(()=>{
        fetchData();
    },[])



    const fetchData=async()=>{
        const response = await fetch('https://v2.jokeapi.dev/joke/Dark')
		const data = await response.json()
		console.log(data)
        setBase(data.setup);
        setDelivery(data.delivery);
    }

    const handleClick=(e)=>{
        window.location.reload();
        e.preventDefault();
    }
  return (
    <>
        <Navbar/>
        <div className='jokes'>
			<div className="wrap">
				<div className="left-jokes">
					<div className="card">
						<div className="card-title">
							JOKES
						</div>
						<div className="underline"></div>
						<div className="card-joke">
							<p>{base}</p>
                            <p>{delivery}</p>
						</div>
					</div>
					<button onClick={handleClick}>Click Me For Jokes</button>
				</div>  
				<div className="right-jokes">
						<img src={img1} alt="" />
				</div>
		  </div>
        </div>
    </>
  )
}

export default Jokes