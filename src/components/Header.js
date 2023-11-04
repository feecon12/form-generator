import React, { } from "react";

const Header = () => {
  
  return (
    <header>
      <h3 style={{ display: "flex-col", font:'10px' }}>Add Fields</h3>
      <div>
        <button> Add Text</button>
        <button>Add Text Area</button>
        <button>Add Dropdown</button>
        <button>Add Picklist</button>
        <button>Add Checkbox</button>
        <button>Add Radio</button>
      </div>
    </header>
  );
};

export default Header;
