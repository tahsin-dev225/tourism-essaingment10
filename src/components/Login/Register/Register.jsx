import { useContext } from "react";
import  { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const {createUser}= useContext(AuthContext)

    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            const user = {email}
            fetch('https://tourism-server10.vercel.app/user',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    console.log('user added to the server')
                }
            })
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <h1 className="text-4xl font-semibold">Register Now!!</h1>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                         <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;