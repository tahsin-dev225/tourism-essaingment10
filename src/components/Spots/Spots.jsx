
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Spots = ({spot,spots,setSpots}) => {
    const {user} = useContext(AuthContext)

    const {place,country,location,description,cost,time,visitor,photo,_id} =spot;

    const handleDelete =(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then(result =>{
            if(result.isConfirmed){
            fetch(`http://localhost:5000/place/${_id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = spots.filter(spt => spt._id !== _id);
                    setSpots(remaining)
                }
            })
            }
          })
    }

    return (
        <div className='mx-auto '>
            <div className="card bg-base-100  w-[96%] shadow-xl">
                <figure className="px-5 pt-10 w-full">
                    <img
                    src={photo}
                    alt="Shoes"
                    className="rounded-xl h-72 w-full" />
                </figure>
                <div className="card-body  ">
                    <h2 className="text-xl font-medium">{place}</h2>
                    <p className='my-1'>{description}</p>
                    <div className=" flex justify-evenly text-white">
                        <NavLink to={`/spotDetails/${_id}`}><button className="px-4 py-2 rounded-lg bg-cyan-500">Details </button></NavLink>
                        {
                            user?
                            <>
                                <button className="px-4 py-2 rounded-lg bg-emerald-600">Update</button>
                                <button onClick={()=>handleDelete(_id)} className="px-4 py-2 rounded-lg bg-amber-500">Delete</button>
                            </>:
                            <> </>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spots;