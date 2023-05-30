import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDish } from "../../store/actions/imgcategories";
import BackgroundImg from "../../img/romero.png";
import Dishcard from "../dishcard/dishcard";

export default function Dishmenu({
  dish,
  status,
  click,
  list,
  categoriaId,
  handleCategoriaId,
}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.imgcategories.dish);

  useEffect(() => {
    dispatch(getDish(dish));
  }, [dispatch, categoriaId]);

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data.map((e, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "30%",
            }}
          >
            <Dishcard
              dish={e.Nombre}
              desc={e.Descripcion}
              price={e.Precio}
              status={status}
            />
          </div>
        ))}
      </div>

      <hr />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <label onClick={() => click("menu")}>Categorias </label>
        {list.map((e, index) => (
          <label
            key={index}
            onClick={() => {
              handleCategoriaId(e.CategoriaId);
              click(e.dish);
            }}
            style={{
              marginLeft: "10px",
              fontWeight: e.dish === dish ? "bold" : "normal",
            }}
          >
            {e.dish}
          </label>
        ))}
      </div>

      <hr />
    </div>
  );
}
