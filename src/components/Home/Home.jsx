import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css"

const Home = () => {
  const img1=require("../../Images/37Z_2105.w007.n001.16B.p12.16.jpg");
  const golf=require("../../Images/landscape-view-golf-course-tournament-map-vector-flat-illustration.jpg");
  const read=require("../../Images/vecteezy_outdoor-activity-illustration-1_dy0421_generated.jpg");

  return (
    <>
      <Navbar/>  
	  <div className="container-home">
		<div className="showcase">
			<div className="left-showcase">
				<img src={img1} alt="" />
			</div>
			<div className="right-showcase">
				<h1>Need A Break</h1>
				<p>A stage to unwind and to enjoy some time off.
				Pushed by work? Nearly burnout?
				Dont stress, we got you covered.
				Investigate different exercises to alleviate pressure and enjoy some time off.</p>
			</div>
		</div> 

		<div className="works">
			<div className="center">
					<h1>Know How it works....</h1>
			</div>	
			<div className="top-works">
				<div className="right-top-works">
					<p>Worked for extended periods?
						Enjoyed some time off?
						Yet, you are ignorant regarding what to do?
						Explore to exercises pages and track down an irregular movement to do.</p>
				</div>
				<div className="left-top-works">
					<img src={golf} alt="" />
				</div>
			</div>

			<div className="mid-works">
				<div className="right-mid-works">
					<img src={read} alt="" />
				</div>
				<div className="left-mid-works">
					<p>Goodness!! So you like to peruse books in your break time??
					All things considered, we have a book segment for you.
					Simply click on the book segment and track down an irregular book to peruse.
					Snatch some espresso and read the suggested book.</p>
				</div>
			</div>
		</div>    

	  </div>
    </>
  )
}

export default Home