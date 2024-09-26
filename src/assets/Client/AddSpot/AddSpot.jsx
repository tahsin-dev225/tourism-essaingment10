import Swal from "sweetalert2";



const AddSpot = () => {

    const handleAddSpot =(e)=>{
        e.preventDefault()
        const form = e.target;
        const place = form.place.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const photo = form.photo.value;
        const newSpot ={place,country,location,description,cost,time,visitor,photo}
        console.log(newSpot)

        fetch('https://tourism-server10.vercel.app/place',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "The Internet?",
                    text: "That thing is still around?",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-4">Add Spot</h1>
            <div className="w-8/12 mx-auto p-10  shadow-xl my-3 rounded-lg">
                <div className=" flex-col lg:flex-row-reverse ">
                    <form onSubmit={handleAddSpot} className="card-body space-y-4 ">
                        <div className="flex gap-5">
                            <input type="text" name="place" required placeholder="place" className="input input-bordered w-full " />
                            <input type="text" name="country" required placeholder="country" className="input input-bordered w-full " />
                        </div>
                        <div className="flex gap-5">
                            <input type="text" name="location" required placeholder="location" className="input input-bordered w-full " />
                            <input type="text" name="description" required placeholder="description" className="input input-bordered w-full " />
                        </div>
                        <div className="flex gap-5">
                            <input type="text" name="cost" required placeholder="cost" className="input input-bordered w-full " />
                            <input type="text" name="season" required placeholder="season" className="input input-bordered w-full " />
                        </div>
                        <div className="flex gap-5">
                            <input type="text" name="time" required placeholder="time" className="input input-bordered w-full " />
                            <input type="text" name="visitor" required placeholder="visitor" className="input input-bordered w-full " />
                            
                        </div> 
                        <input type="text" name="photo"  placeholder="photo" className="input input-bordered w-full " />
                        <input type="submit" className=" btn btn-primary input-bordered w-full " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;