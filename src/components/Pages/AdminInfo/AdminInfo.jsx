import React from 'react';
import { FaBoxesStacked } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AdminInfo = () => {
    return (
        <div>
            <h1 className='font-bold text-xl mt-5'>Welcome Admin!</h1>
            <p>Dashboard</p>
            <div className = 'mt-8 grid grid-cols-4 gap-4'>
                <div className="info-sec flex justify-between gap-10 p-5 shadow-2xl">
                    <div className='mt-5'>
                    <FaBoxesStacked />
                    </div>
                    <div className='text-end'>
                      <p className='font-bold text-md'>112</p>
                      <p>Projects</p>
                    </div>
                </div>
                <div className="info-sec flex justify-between gap-10 p-5 shadow-2xl">
                    <div className='mt-5'>
                    <FaDollarSign />
                    </div>
                    <div className='text-end'>
                      <p className='font-bold text-md'>44</p>
                      <p>Clients</p>
                    </div>
                </div>
                <div className="info-sec flex justify-between gap-10 p-5 shadow-2xl">
                    <div className='mt-5'>
                    <IoDiamondSharp />
                    </div>
                    <div className='text-end'>
                      <p className='font-bold text-md'>37</p>
                      <p>Tasks</p>
                    </div>
                </div>
                <div className="info-sec flex justify-between gap-10 p-5 shadow-2xl">
                    <div className='mt-5'>
                    <FaUser />
                    </div>
                    <div className='text-end'>
                      <p className='font-bold text-md'>218</p>
                      <p>Employees</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminInfo;