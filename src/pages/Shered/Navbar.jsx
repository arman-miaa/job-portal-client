import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/Authcontext/AuthContext";
import logo from '../../assets/logo.png'
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log("ERROR", error);
          });
}
    const links = (
      <>
        <li>
        <NavLink to='/'>Home</NavLink> 
        </li>
      
        <li>
          <NavLink to="/myApplications">myApplications</NavLink>
        </li>
        <li>
          <NavLink to="/addJob">Add Job</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar bg-base-100 sticky top-0 left-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" />
          <a className="btn btn-ghost text-xl">Job Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <button onClick={handleSignOut} className="btn">
                {" "}
                <Link>LogOut</Link>
              </button>
            </div>
          ) : (
            <div>
              <button className="btn">
                <Link to="/register">Register</Link>
              </button>
              <Link to="/signIn">
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;