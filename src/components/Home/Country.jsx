
import { useEffect, useState } from 'react';

import Marquee from "react-fast-marquee";
import { NavLink } from 'react-router-dom';

const Country = ({spots}) => {
    const [country,setCountry] =useState([])

    
    useEffect(()=>{
        fetch('https://tourism-server10.vercel.app/place')
        .then(res=> res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <>
      

    <Marquee direction='right'>
    {
            country.slice(0,7).map(spot => <NavLink to={`/matchCountry/${spot.country}`} key={spot._id}>
                <div className="card bg-base-100  image-full mx-3 w-96 shadow-xl">
                    <figure className='h-48 w-full'> <img className='w-full' src={spot.photo} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{spot.country}</h2>
                        <p></p>
                        
                    </div>
                    </div>
            </NavLink>)
        }
    </Marquee>
    </>
    );
};

export default Country;