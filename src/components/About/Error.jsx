import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-svh">
            <h1 className="text-4xl my-10 font-bold flex">Opps</h1>
            <Link className="btn-link" to='/'>Home</Link>
        </div>
    );
};

export default Error;