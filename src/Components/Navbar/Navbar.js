import React, { useState } from "react";
import "./Navbar.css";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineBarChart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdMonitor, MdPointOfSale } from "react-icons/md";

const Navbar = () => {
  const [togglestate, setTogglestate] = useState(true);

  const handleToggle = () => {
    setTogglestate(!togglestate);
  };

  return (
    <div className="navContainer">
      <span id="navlogo">
        <Link to="" id="linkdiv1">
          Logo
        </Link>
      </span>
      <ul id={togglestate ? "navList" : "navListCollapse"}>
        <li>
          <Link to="" id="linkdiv">
            <MdMonitor id="icon" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link to="" id="linkdiv">
            <AiOutlineShoppingCart id="icon" />
            <p>Add Products</p>
          </Link>
        </li>
        <li>
          <Link to="" id="linkdiv">
            <MdPointOfSale id="icon" />
            <p>Point Of Sale</p>
          </Link>
        </li>
        <li>
          <Link to="" id="linkdiv">
            <AiOutlineBarChart id="icon" />
            <p>Reports</p>
          </Link>
        </li>
      </ul>

      <ul id="navList1">
        <li>
          <AiOutlineSetting />
          <p>Settings</p>
        </li>
        <li>
          <AiOutlineLogout />
          <p>Logout</p>
        </li>
      </ul>

      <span className="menubar">
        <AiOutlineMenu id="menubarIcon" onClick={handleToggle} />
      </span>
    </div>
  );
};

export default Navbar;
