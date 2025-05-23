import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-dark py-3 px-5">
      <div className="text-white hover:text-primary">
        <Link to="/">Budget Builder</Link>
      </div>
      <div>
        <ul>
          <li className="bg-primary py-2 px-4 text-white rounded-md hover:bg-white hover:text-primary">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
