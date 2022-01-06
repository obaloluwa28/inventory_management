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
        <div className="topslide">
          <div id="topslide_inner">
            <button id="innerbut1" onClick={addorder}>
              Add Category
            </button>
            <button id="innerbut2" onClick={addorderEd}>
              Edit Category
            </button>
          </div>
          <FiChevronDown id="ordicons" />
        </div>
        <div className={minitog ? "topsub_slide" : "topsub_slide_1"}>
          <div id="fildse">
            <div>
              <label id="flieldlabel">Category </label>
              <input
                id="textfield"
                placeholder="Product Category"
                type="text"
                name="ProdCate"
                // onChange={handleonchange}
              />
            </div>
            <button id="fildse_but">Submit</button>
          </div>
        </div>

        <div className={minitogEd ? "topsub_slide" : "topsub_slide_1"}>
          <div id="fildse">
            <div>
              <label id="flieldlabel">Id </label>
              <input
                id="textfield"
                placeholder="Product Id"
                type="text"
                name="ProdCate"
                // onChange={handleonchange}
              />
            </div>
            <button id="fildse_but">Submit</button>
          </div>
        </div>
        <div className={minitog ? "bottomslide2" : "bottomslide1"}>
          <span className="tablecontainer">
            <div id="tableTitle">Manage Categories</div>
            <table id="categtab">
              <thead>
                <tr>
                  <th id="thcell">Category ID</th>
                  <th id="thcell">Category Name</th>
                  <th id="thcell"> Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="tbcell">1</td>
                  <td id="tbcell">Drinks</td>
                  <td id="tbcell">
                    <button id="tbcell_but">IN-STOCK</button>
                  </td>
                </tr>

                <tr>
                  <td id="tbcell">1</td>
                  <td id="tbcell">Drinks</td>
                  <td id="tbcell">
                    <button id="tbcell_but">IN-STOCK</button>
                  </td>
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
