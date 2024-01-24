import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import Graph from '../Graph/Graph';

const Header = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className='flex flex-col lg:flex-row'>
            <div className='flex-1'>
              <Sidebar></Sidebar>
            </div>
            <div className='w-[1000px] mr-3'>
              <Graph></Graph>
            </div>
           </div>
        </div>
    );
};

export default Header;