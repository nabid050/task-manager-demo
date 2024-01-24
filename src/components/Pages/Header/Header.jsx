import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import Graph from '../Graph/Graph';

const Header = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className='grid'>
            <div className='grid grid-cols-4'>
              <Sidebar></Sidebar>
            </div>
            <div className='grid grid-cols-8'>
              <Graph></Graph>
            </div>
           </div>
        </div>
    );
};

export default Header;