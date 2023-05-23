import { Checkbox } from "@mui/material";
import { useState } from "react";

export default function Dishmenu({ dish, status }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <hr />
        <label>{dish}</label>
        <hr />
      </div>
      {!status && <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
      />}
    </div>
  );
}
