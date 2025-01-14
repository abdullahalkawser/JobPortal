import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';

const Navbar = () => {
  const { user, logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    // Define your logout logic here
  };

  const nav = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/AllJobs">All Jobs</Link></li>
      <li><Link to="/applicationjob">Your Application</Link></li>
      <li><Link to="/createJob">Create  Job</Link></li>
 
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav}
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold">JOB HUNTER</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
        {/* <h1 className='text-xl'>{user.email}</h1> */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {user ? (
                    
                <li>
                  <button onClick={handleLogout} className="btn">Logout</button>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="btn">LOGIN</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
