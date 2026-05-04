import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Movie() {
let [movie,setMovie]=useState([])

 async function MovieTrend() {
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`)
  console.log(data.results);
  setMovie(data.results)
  }
  useEffect(()=>{
    MovieTrend()
  },[])
  return <>
  <div className="container">
    <h1 className='text-center auth text-white mt-5 mb-5'>Trend Movie</h1>
    <div className="row">
      {movie.map((item)=><div className="col-md-3">
<Link to={`/moviesdetails/${item.id}`} className='text-decoration-none text-white'>
        <div className="position-relative">
<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 trend rounded rounded-5' alt="" />
<div className="imglay">
  <div className="imginfo">
    <h4>{item.title}</h4>
</div>
  </div>
  {item.vote_average?<div className='vote'>{item.vote_average?.toFixed(1)}</div>:""}
</div>
<h3 className='heading text-center '>{item.title}</h3>
</Link>
      </div>
      
)}
    </div>
  </div>
  
  </>
}
