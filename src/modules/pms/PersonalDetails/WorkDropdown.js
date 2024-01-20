import React, { useState } from "react";

export default function WorkDropdown() {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Freelancer*");
    const UserCateg= ["Freelancer", "Professional", "Student", "Institute", "Educationist"];
   
  return (  
    <div className="App">
      <div className="dropdown-custom">
        <div onClick={(e) => {setIsActive(!isActive);}}className="dropdown-btn-custom" >
          {selected}{isActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../dropdownarrow.svg" alt="down arrow"/>}
          </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isActive ? "block" : "none" }}
        >
        {UserCateg.map((row) => {
            return (
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </div>
    </div>
  );
}