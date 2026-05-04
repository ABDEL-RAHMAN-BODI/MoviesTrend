import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const [moviesdetails,setMoviesDetails] = useState({})
 let {id} = useParams();     
async function MoviesDetails(id) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(data);
setMoviesDetails(data)
} 
 
 useEffect(() => {
 MoviesDetails(id)
 }, [])
 
 
 
 
 
 
 return <>
  <div className="container">
<div className="row">
    <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+moviesdetails.poster_path} className='w-100 trend rounded rounded-5' alt="" />
    </div>
     <div className="col-md-9">
            <h1 className='my-2'>{moviesdetails.title}</h1>
            <p className='py-2'>{moviesdetails.tagline}</p>
            <ul className='list-unstyled d-flex'>genres : {moviesdetails.genres?.map(x=> <div key={moviesdetails.id} className='bg-warning p-3 mx-2 rounded-2 text-center'>{x.name}</div>)}</ul>
            <p className='py-2'>vote : {moviesdetails?.vote_average?.toFixed(1)}</p>
            <p className='py-2'>vote count : {moviesdetails?.vote_count?.toFixed(1)}</p>
            <p className='py-2'>popularity : {moviesdetails?.popularity?.toFixed(1)}</p>
            <p className='py-2'>release date : {moviesdetails?.release_date}</p>
            <p className='py-2'>{moviesdetails.overview}</p>
        </div>
</div>
</div>  
  </>
}
