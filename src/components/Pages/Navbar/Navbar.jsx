import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";


const Navbar = () => {
    return (
        <div>
           <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Intellips</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className='flex gap-5'>
    <FaBell />
    <AiFillMessage />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Navbar;