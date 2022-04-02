import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Book.css"
import axios from 'axios'

const Books = () => {
    //API Key:- AIzaSyAXnZTH_xYhoExQ5MdJIIyo1RQq4PnOmFI
    const img=require("../../Images/6263.jpg");
    const apiKey="AIzaSyC-YAxWU9NGFLT3ZWDWH0HPP1gIWhUOOgo";

    const[book,setBook]=useState('');
    const[data,setData]=useState([]);
    const handleClick=(e)=>{
        e.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=10")
        .then(data => {
            console.log(data.data.items);
            setData(data.data.items);
        })
        .catch(err => {
            alert("No book found",err)
            console.log(err)
            //window.location.reload();
        })
    }

    const handleChange=(e)=>{
        setBook(e.target.value);
       // console.log(e.target.value);
    }

  return (
    <>
        <Navbar/>
        <div className='books'>
			<div className="wrap">
				<div className="left-books">
					<div className="book-search">
						<div className="book-search-title">
							Search For A Book
						</div>
                        <div className="underline"></div>
                        <div className="search">
                            <button onClick={handleClick}>Click Me</button>
                            <input onChange={handleChange} type="text" name="" id="" />
                        </div>
                        <div className="search-book">
                        {data.map(book => (
                            <div className="each-book">
                                <a target="_blank" href={ book.volumeInfo.previewLink}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                                </a>
                            </div>
                        ))}
                        </div>
					</div>
					
				</div>  
				<div className="right-book">
						<img src={img} alt="" />
				</div>
		  </div>
        </div>  
    </>
  )
}

export default Books