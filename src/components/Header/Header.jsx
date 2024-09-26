import { Link, NavLink } from "react-router-dom";
import '../stylee/stylee.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(console.log('user sing out'))
        .catch(error =>{
            console.error(error)
        })
    }

    const links =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allSpots'>All Spots</NavLink></li>
    <li><NavLink to='/addSpot'>Add Spot</NavLink></li>
    <li><NavLink to='/users'>Users</NavLink></li>
    <li><NavHashLink smooth to='/#about'>About</NavHashLink></li>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start md:max-w-7xl mx-auto">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul 
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">UniTour</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal  px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                        <h1 className="mr-3">{user.email}</h1>
                        <button onClick={handleLogOut} className="btn bg-sky-50">logOut</button>
                    </>
                    :<Link to="/login" className="btn bg-sky-50">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;