import React from "react";
import "./Textbox.css";

const Textbox = (props) => {
  console.log(props);
  const handeleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        style={{
          borderRadius: props.borderRadius,
          padding: props.padding,
          fontSize: props.fontSize,
          width: props.width,
        }}
        placeholder={props.placeholder}
        type={props.type}
        onChange={handeleChange}
        id="fieldarea_barcode"
        name={props.name}
      />
    </div>
  );
};

export default Textbox;
