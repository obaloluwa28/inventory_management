import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./dashboard.css";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="dashboardContain">
      <Navbar />
      <div className="dashboardbody">
        <div id="box1">
          <span>All Products</span>
          <p>3214</p>
        </div>

        <div id="box2">
          <span>Total Monthly Sales</span>
          <p>₦ 1,814,321.34 </p>
        </div>

        <div id="box3">
          <span>Supplier</span>
          <p>40</p>
        </div>

        <div id="box4">
          <span>Customers</span>
          <p>185</p>
        </div>

        <div id="box5">
          <span>Product Categories</span>
          <p>32</p>
        </div>

        <div id="box6">
          <span>Monthly Sales</span>
          <p>402</p>
        </div>

        <div id="box7">
          <span>Unprocessed Orders</span>
          <p>32</p>
        </div>

        <div id="box8">
          <span>POS Staffs</span>
          <p>10</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
