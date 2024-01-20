import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import "./styles.css";

export default function CustomDrop() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  
  return (
    <div className="App">
      <div className="dropdown-ml">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-ml"
        >
          {selected}
          {isActive ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
          
        </div>
        <div
          className="dropdown-content-ml"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item-ml"
          >
            One
          </div>
          <div
            className="item-ml"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Two
          </div>
          <div
            className="item-ml"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
    </div>
  );
}
