import { useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {
    const spot = useLoaderData()
    const idm = useParams();
    const filteredSpot = spot.find(spt => spt._id === idm.id)
    const {place,country,location,description,cost,time,visitor,photo,_id} = filteredSpot;
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl"></h1>
            <div className="flex p-9 ">
                <img className="w-6/12 " src={photo} alt="" />
                <div className="p-3">
                    <h1 className="text-3xl font-medium">{place}</h1>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;