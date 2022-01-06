import React, { useState } from "react";
import "./Orders.css";
import Navbar from "../Components/Navbar/Navbar";
import { FiChevronDown } from "react-icons/fi";

const Orders = () => {
  const [minitog, setMinitog] = useState(true);
  const [minitogEd, setMinitogEd] = useState(true);

  const addorder = () => {
    if (minitogEd === false) {
      setMinitogEd(!minitogEd);
    }
    setMinitog(!minitog);
  };

  const addorderEd = () => {
    if (minitog === false) {
      setMinitog(!minitog);
    }
    setMinitogEd(!minitogEd);
  };

  return (
    <div className="ordersContainer">
      <Navbar />
      <div className="ordersbody">
        <div className="bottomslide2">
          <span className="tablecontainer">
            <div id="tableTitle">Manage Orders</div>
            <table id="categtab">
              <thead>
                <tr>
                  <th id="thcell">Barcode</th>
                  <th id="thcell">Category</th>
                  <th id="thcell">Product Name</th>
                  <th id="thcell">Quantity</th>
                  <th id="thcell">Cost Price</th>
                  <th id="thcell">Received</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="tbcell">1032142348</td>
                  <td id="tbcell">Drinks</td>
                  <td id="tbcell">Coca Cola</td>
                  <td id="tbcell">5</td>
                  <td id="tbcell">489.5</td>
                  <td id="tbcell">2447.5</td>
                </tr>

                <tr>
                  <td id="tbcell">1032142348</td>
                  <td id="tbcell">Drinks</td>
                  <td id="tbcell">Coca Cola</td>
                  <td id="tbcell">5</td>
                  <td id="tbcell">489.5</td>
                  <td id="tbcell">2447.5</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
