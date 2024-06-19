import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-gray flex justify-between px-10">
      <Link to="/">Inicio</Link>
    </div>
  );
};

export default NavBar;
