import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = ({ photo }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar fixed top-0 z-10 bg-teal-800 bg-opacity-60 text-white">
      <div className="navbar-start">
        <div className="dropdown text-teal-700">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blog" className="justify-between">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/addtoy">Add Toy</Link>
                </li>
                <li>
                  <Link to="/mytoy">MyToy</Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">WonderToy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/addtoy">Add Toy</Link>
              </li>
              <li>
                <Link to="/mytoy">MyToy</Link>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
        {user && (
          <>
            <button onClick={handleLogOut} className="btn btn-outline btn-error">
              LogOut
            </button>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
              </div>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
