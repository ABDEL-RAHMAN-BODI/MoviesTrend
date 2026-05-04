import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function TvDetails() {
    const [tvsdetails,setTvsDetails] = useState({});
 let {id} = useParams();     
async function TvsDetails(id) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(data);
setTvsDetails(data)
} 
 
 useEffect(() => {
 TvsDetails(id)
 }, [])
 
 
 
 
 
 
 return <>
  <div className="container">
  <div className="row">
    <div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+tvsdetails.poster_path} className='w-100 trend rounded rounded-5' alt="" />

    </div>
    <div className="col-md-9">
         <h1 className='my-2'>{tvsdetails.name}</h1>
            <p className='py-2'>{tvsdetails.tagline}</p>
            <ul className='list-unstyled d-flex'>genres : {tvsdetails.genres?.map(x=> <div key={tvsdetails.id} className='bg-warning p-3 mx-2 rounded-2 text-center'>{x.name}</div>)}</ul>
            <p className='py-2'>vote : {tvsdetails?.vote_average?.toFixed(1)}</p>
            <p className='py-2'>vote count : {tvsdetails?.vote_count?.toFixed(1)}</p>
            <p className='py-2'>popularity : {tvsdetails?.popularity?.toFixed(1)}</p>
            <p className='py-2'>first air date : {tvsdetails?.first_air_date}</p>
            <p className='py-2'>{tvsdetails.overview}</p>
    </div>
  </div>
</div>
  
  </>
}
