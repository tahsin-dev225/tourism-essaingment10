import { useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()
    const idm = useParams();
    const filteredSpot = spot.find(spt => spt._id === idm.id)
    const {place,country,location,description,cost,time,visitor,photo, } = filteredSpot;
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-center my-2" >Details  </h1>
            <div className="grid items-center gap-4 shadow-xl rounded-md my-6 lg:grid-cols-2 grid-cols-1 p-9 ">
                <img className="  rounded-xl" src={photo} alt="" />
                <div className="p-3">
                    <h1 className="text-3xl font-medium">{place}</h1>
                    <p className="my-2 text-xl">County Name : <span className="text-lg text-red-400"> {country}</span></p>
                    <p className="text-xl">Location : {location}</p>
                    <p className="text-xl my-4">{description}</p>
                    <p className="text-xl">Cost : {cost} $</p>
                    <p className="text-xl">Time : {time} $</p>
                    <div className="flex justify-center mt-6">
                        <button className="btn w-full bg-sky-400 text-black">Purches</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;