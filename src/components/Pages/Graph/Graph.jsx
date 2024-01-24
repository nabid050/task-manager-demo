import React from 'react';
import AdminInfo from '../AdminInfo/AdminInfo';
import GraphOne from '../GraphOne/GraphOne';
import GraphTwo from '../GraphTwo/GraphTwo';

const Graph = () => {
    return (
        <div>
            <AdminInfo></AdminInfo>
            <div className='flex justify-between mt-8'>
                 <div>
                   <GraphOne></GraphOne>
                 </div>
                 <div>
                    <GraphTwo></GraphTwo>
                 </div>
            </div>
        </div>
    );
};

export default Graph;