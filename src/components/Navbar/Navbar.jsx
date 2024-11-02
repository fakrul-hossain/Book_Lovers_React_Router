import { Link } from "react-router-dom";


const Navbar = () => {

  const links = <>
     <li><Link to={"/"}>Home</Link></li>
     <li><Link to={"/"}>Listed Books</Link></li>
     <li><Link to={"/"}>Pages to Read</Link></li>
     <li><Link to={"dashboard"}>DashBoard</Link></li>
  
  </>



    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className=" text-xl">Books lovers</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex-col md:flex-row gap-2">
    <a className="btn bg-green-500 px-[28px] py-[18px]">Sign Up</a>
    <a className="btn bg-[#59C6D2] px-[28px] py-[18px]">Sign In</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;