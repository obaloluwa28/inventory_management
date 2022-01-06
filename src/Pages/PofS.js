import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./PofS.css";
import { MdDelete } from "react-icons/md";

const PofS = () => {
  return (
    <div className="posContain">
      <Navbar />
      <div className="_container">
        <div className="poscontainer">
          <div id="formfield">
            <div id="posfieldcontain">
              <label className="poslabel">Product Barcode :</label>
              <input className="posinput" disabled />
            </div>

            <div id="posfieldcontain">
              <label className="poslabel">Product Name :</label>
              <input className="posinput" disabled />
            </div>

            <div id="posfieldcontain">
              <label className="poslabel">Transaction Date :</label>
              <input className="posinputdte" disabled />
            </div>

            <div id="posfieldcontain">
              <label className="poslabel">Quantity :</label>
              <input className="posinputdte" />
            </div>

            <div id="posfieldcontain">
              <label className="poslabel">Amount :</label>
              <input className="posinputdte" disabled />
            </div>

            <div id="posfieldcontain2">
              <button className="posbut">Add Inventory</button>
            </div>
          </div>

          <div id="tablefield">bed</div>

          <div id="positemfield">
            <span id="minicontain">
              <div>
                <table className="posproducttab">
                  <thead id="thead">
                    <th id="postcell">Status</th>
                    <th id="postcell">Barcode</th>
                    <th id="postcell">Product Name</th>
                    <th id="postcell">Quantity</th>
                    <th id="postcell">Amount</th>
                  </thead>
                  <tbody id="ttbody">
                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>

                    <tr id="ttrow">
                      <td id="bcell">
                        <MdDelete id="deleteicon" />
                      </td>
                      <td id="bcell">233</td>
                      <td id="bcell">Duracell</td>
                      <td id="bcell">4</td>
                      <td id="bcell">8650.65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className="buttombuttbox">
                <div id="poosfieldcontain">
                  <label className="poslabel">Curtomer's Name :</label>
                  <input className="posinput" />
                </div>
                <button className="posprintbut">Print Receipt</button>
              </div> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PofS;
