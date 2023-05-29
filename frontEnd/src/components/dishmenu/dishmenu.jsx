import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";
import { getDish } from "../../store/actions/imgcategories";

import BackgroundImg from '../../img/romero.png'

export default function Dishmenu({ dish, status, click, list, CategoriaId }) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(dish, "Spy el plato")

  const dispatch = useDispatch()
  const data = useSelector((state)=>state)

  console.log(data)

  useEffect(() => {
        dispatch(getDish(CategoriaId))
  }, [dispatch]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <hr />
        <label style={{ fontWeight: "bold" }}>{dish}</label>
        <hr />
      </div>
      {!status && (
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
      )}
      <label onClick={() => click('menu')}>Categorias </label>
      {list.map((e, index) => (
        <label key={index} onClick={() => click(e.dish)}
        style={e.dish === dish ? { fontWeight: "bold" } : null}
>
  {e.dish}
          
        </label>
      ))}
    </div>
  );
}
