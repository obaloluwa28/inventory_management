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
import { MdMonitor, MdPointOfSale, MdCategory } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import svgicon2 from "../../assets/logo.svg";

const Navbar = () => {
  const [togglestate, setTogglestate] = useState(true);
  const [togglestat, setTogglestat] = useState(true);

  const handleToggle = () => {
    setTogglestate(!togglestate);
  };

  const handleToggle2 = () => {
    setTogglestat(!togglestat);
  };

  return (
    <div className="navContainer">
      <span id="navlogo">
        <Link to="/" id="linkdiv1">
          <img id="navpgbox-img" alt="" src={svgicon2} />
        </Link>
      </span>
      <span className={togglestate ? "midContainer" : "midContainerinv"}>
        <ul id="navList">
          <li>
            <Link to="/" id="linkdiv">
              <MdMonitor id="icon" />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/addproduct" id="linkdiv">
              <MdCategory id="icon" />
              <p>Categories</p>
            </Link>
          </li>
          <li>
            <Link to="/addproduct" id="linkdiv">
              <AiOutlineShoppingCart id="icon" />
              <p>Add Products</p>
            </Link>
          </li>
          <li>
            <Link to="/addproduct" id="linkdiv">
              <BsPeopleFill id="icon" />
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/pointofsale" id="linkdiv">
              <MdPointOfSale id="icon" />
              <p>Point Of Sale</p>
            </Link>
          </li>
          <li>
            <Link to="/report" id="linkdiv">
              <AiOutlineBarChart id="icon" />
              <p>Reports</p>
            </Link>
          </li>
        </ul>

        <ul id={togglestat ? "navList1" : "navListinv"}>
          <li>
            <AiOutlineSetting id="icon" />
            <p>Settings</p>
          </li>
          <li>
            <AiOutlineLogout id="icon" />
            <p>Logout</p>
          </li>
        </ul>
      </span>

      <span className="menubar">
        <AiOutlineMenu id="menubarIcon" onClick={handleToggle} />
      </span>

      <span className="menubar2">
        <FiChevronDown id="menubarIcon" onClick={handleToggle2} />
      </span>
    </div>
  );
};

export default Navbar;
