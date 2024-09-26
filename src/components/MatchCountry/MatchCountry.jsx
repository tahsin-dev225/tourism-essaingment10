import { useLoaderData, useParams } from "react-router-dom";

const MatchCountry = () => {
    const countries = useParams()
    const AllCountries = useLoaderData()
    const filteredCountries = AllCountries.filter(filtered => filtered.country === countries.id)
    console.log(countries,filteredCountries)
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-semibold text-center my-3">{filteredCountries[0].country}</h1>
            <div className="grid grid-cols-3">
                {
                    filteredCountries.map(contry => <div  key={contry._id}>
                        <div className="card bg-base-100  w-[96%] shadow-xl">
                            <figure className="px-5 pt-10 w-full">
                                <img
                                src={contry.photo}
                                alt="Shoes"
                                className="rounded-xl h-72 w-full" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="text-xl font-medium">{contry.place}</h2>
                                <p className='my-1'>{contry.description}</p>
                                <div className=" flex justify-evenly text-white">
                                    <button className="px-4 py-2 rounded-lg bg-cyan-500">Details </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* <img src={filteredCountries.photo} alt="" /> */}
        </div>
    );
};

export default MatchCountry;