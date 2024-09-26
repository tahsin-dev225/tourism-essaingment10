import {  Link, NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Spots from "../Spots/Spots";
import { useState } from "react";
import Country from "./Country";
import About from "../About/About";


const Home = () => {

    const loadedSpot = useLoaderData();
    const [spots,setSpots] =useState(loadedSpot)

    return (
        <div>
            <Banner></Banner>

            <div className="mb-8 w-[96%] md:max-w-7xl mx-auto">
                
                {/* <Country spots={spots}></Country> */}
            </div>

            <h1 className="text-5xl mb-5 font-semibold text-center my-">Travel Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl mx-auto">
                
                {
                    spots.slice(0,9).map(spot =><Spots key={spot._id} spots={spots} setSpots={setSpots} spot={spot}></Spots>)
                }
                
            </div>
            <div className="flex justify-center my-4">
                <NavLink to='/allSpots'><button className="btn px-8 btn-primary">See All</button></NavLink>
            </div>
            <About></About>
        </div>
    );
};

export default Home;