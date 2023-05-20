import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/alltoys">All Toys</NavLink> </li>
        <li> <NavLink to="/blog">Blogs</NavLink> </li>
        
        { user?.email ?  <>
            <li><NavLink to="/addtoys">Add Toy</NavLink></li>
            <li><NavLink to="/bookings">My Toys</NavLink></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
            <div className='group relative m-1 flex justify-center'>
                    <img className=' mx-5 relative w-10 h-10 overflow-hidden rounded-full' src={user.photoURL} alt="" />
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{user.displayName}</span>
                    </div>
            {/* <div className='group relative m-1 flex justify-center'>
                    <img className=' mx-5 relative w-10 h-10 overflow-hidden rounded-full' src={user.photoURL} alt="" />
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{user.displayName}</span>
                    </div> */}
        </> 
        : <li> <NavLink to="/login">Login</NavLink> </li>
        
       }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-5xl">
                    {/* <img className="w-1/2" src={logo} alt="" /> */}
                </Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
            </div> */}
        </div>
    );
};

export default NavBar;