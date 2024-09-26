import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

   const notify = () =>  toast("login first")

    if(user){
        notify()
        return children
    }

    return (
        <>
            {notify()}
            <ToastContainer />
            <Navigate to='/login'></Navigate>
        </>
    );
    

    
};

export default PrivateRoute;