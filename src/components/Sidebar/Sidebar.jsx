import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Dashboard</a></li>
      <li><a>Employees</a></li>
      <li><a>Clients</a></li>
      <li><a>Projects</a></li>
      <li><a>Leads</a></li>
      <li><a>Tickets</a></li>
      <li><a>Sales</a></li>
      <li><a>Accounting</a></li>
      <li><a>Payroll</a></li>
      <li><a>Policies</a></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Sidebar;