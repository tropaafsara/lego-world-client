import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/images/banner/logo3.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li ><NavLink to="/" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>Home</NavLink> </li>
        <li> <NavLink to="/alltoys" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>All Toys</NavLink> </li>


        {user?.email ? <>
            <li><NavLink to="/addtoys" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>Add Toy</NavLink></li>
            <li><NavLink to="/bookings" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>My Toys</NavLink></li>
            <li> <NavLink to="/blog" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>Blogs</NavLink> </li>
            <li><button onClick={handleLogOut}>Log out</button></li>
            <div className='group relative m-1 flex justify-center'>
                <img className=' mx-5 relative w-10 h-10 overflow-hidden rounded-full' src={user.photoURL} alt="" />
                <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{user.displayName}</span>
            </div>

        </>
            : <li> <NavLink to="/login" style={({ isActive }) =>
            isActive
                ? {
                    color: '#0284c7',
                    background: '#ffffff',
                }
                : { color: '#000000', background: '#ffffff' }
        }>Login</NavLink> </li>

        }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4 font-bold bg-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-5xl group relative m-1 flex justify-center">
                    <img className="mx-5 relative w-10 h-10 overflow-hidden rounded" src={logo} alt="" />
                    <h1 className="text-3xl text-sky-600 font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Lego World</h1>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;