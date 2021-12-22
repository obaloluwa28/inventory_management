import React, { useState, useEffect } from "react";
import "./addinventory.css";
import Axios from "axios";

const Addinventory = () => {
  const [barcode, SetBarcode] = useState("");
  const [prodname, SetProdname] = useState("");
  const [categories, SetCategories] = useState("");
  const [quantity, SetQuantity] = useState(0);
  const [costprice, SetCostprice] = useState(0);
  const [sellprice, SetSellprice] = useState(0);
  const [seller, SetSeller] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/getproduct").then((res) => {
      console.log(res);
    });
  }, []);

  const SubmitButton = (e) => {
    e.preventDefault();
    const obj = {
      barCode: barcode,
      prodName: prodname,
      category: categories,
      quant: quantity,
      costpri: costprice,
      sellpri: sellprice,
      supplier: seller,
    };

    console.log(obj);
    Axios.post("http://localhost:5000/newstock", obj).then(() => {
      console.log("Success");
    });
  };

  const handleonchange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "barcode") {
      SetBarcode(e.target.value);
      // console.log("firstname checked:");
    }

    if (e.target.name === "ProdName") {
      SetProdname(e.target.value);
    }

    if (e.target.name === "lvl") {
      SetCategories(e.target.value);
    }

    if (e.target.name === "quantity") {
      SetQuantity(e.target.value);
    }

    if (e.target.name === "cp") {
      SetCostprice(e.target.value);
    }

    if (e.target.name === "sp") {
      SetSellprice(e.target.value);
    }

    if (e.target.name === "supplier") {
      SetSeller(e.target.value);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onsubmit}>
        <div className="Topfield">
          <div className="fieldarea">
            <label id="labelfield">Barcode: </label>
            <input
              id="inputfield"
              placeholder="Barcode"
              type="text"
              name="barcode"
              onChange={handleonchange}
            />
          </div>

          <div className="fieldarea">
            <label id="labelfield">Product Name: </label>
            <input
              id="inputfield"
              placeholder="Product Name"
              type="text"
              name="ProdName"
              onChange={handleonchange}
            />
          </div>

          <div className="fieldarea">
            <label id="labelfield">Category: </label>
            <select
              id="inputfield"
              onChange={handleonchange}
              name="lvl"
              // value={level}
            >
              <option disabled selected="true" value="">
                ---Select Category---
              </option>
              <option value="100">Soda Drinks</option>
              <option value="200">Wine</option>
              <option value="300">Confectionery</option>
              <option value="400">Bread</option>
              <option value="500">Nuts</option>
            </select>
          </div>

          <div className="fieldarea">
            <label id="labelfield">Quantity: </label>
            <input
              id="inputfield"
              placeholder="Quantity"
              type="number"
              name="quantity"
              onChange={handleonchange}
            />
          </div>

          <div className="fieldarea">
            <label id="labelfield">Cost Price: </label>
            <input
              id="inputfield"
              placeholder="Cost Price"
              type="number"
              name="cp"
              onChange={handleonchange}
            />
          </div>

          <div className="fieldarea">
            <label id="labelfield">Selling Price: </label>
            <input
              id="inputfield"
              placeholder="Selling Price"
              type="number"
              name="sp"
              onChange={handleonchange}
            />
          </div>

          <div className="fieldarea">
            <label id="labelfield">Supplier: </label>
            <input
              id="inputfield"
              placeholder="Supplier"
              type="text"
              name="supplier"
              onChange={handleonchange}
            />
          </div>
          <div className="fieldarea1">
            <button className="submitField" onClick={SubmitButton}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div className="tablearea">
        <div className="tableheading">
          <h5>Current Stock</h5>
        </div>
        <div className="producttab">
          <thead id="thead">
            <th id="tcell">Barcode</th>
            <th id="tcell">Product Name</th>
            <th id="tcell">Category</th>
            <th id="tcell">Stock</th>
            <th id="tcell">Cost Price</th>
            <th id="tcell">Selling Price</th>
            <th id="tcell">Supplier</th>
            <th id="tcell">Status</th>
          </thead>
          <tbody>
            {data.map((itemm) => (
              <tr>
                <td id="tbcell">{itemm.barCode}</td>
                <td id="tbcell">{itemm.prodname}</td>
                <td id="tbcell">{itemm.category}</td>
                <td id="tbcell">{itemm.quant}</td>
                <td id="tbcell">{itemm.costpri}</td>
                <td id="tbcell">{itemm.sellpri}</td>
                <td id="tbcell">{itemm.supplier}</td>
                <td id="tbcell">{itemm.status}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default Addinventory;