import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function Dishcard({ dish, desc, price, status }) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(status)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={isChecked}  onChange={handleCheckboxChange} style={{ marginRight: "5px" }} />
        <label style={{ fontWeight: "bold", textAlign: "left", paddingLeft: 0 }}>{dish}</label>
      </div>
      <div style={{ textAlign: "left", paddingLeft: "3vw" }}>
        <p style={{ margin: 0 }}>{desc}</p>
        <label style={{ margin: 0, marginLeft: 0 }}>${price}</label>
      </div>
    </div>
  );
  
  
}
