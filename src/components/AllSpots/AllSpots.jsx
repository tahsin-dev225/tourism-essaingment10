import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Spots from "../Spots/Spots";


const AllSpots = () => {

    const loadedSpot = useLoaderData()
    const [spots,setSpots] =useState(loadedSpot)
    return (
        <div>
            <h1 className="text-5xl mb-5 font-semibold text-center my-">Travel Spots</h1>
            <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl mx-auto">
                
                {
                    spots.map(spot =><Spots key={spot._id} spots={spots} setSpots={setSpots} spot={spot}></Spots>)
                }
                
            </div>
        </div>
    );
};

export default AllSpots;