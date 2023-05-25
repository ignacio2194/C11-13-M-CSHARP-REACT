import CardMenu from "../cardMenu/cardMenu"
import Menulegend from "../menulegend/menulegend"
import './menu.css'

const Menu = () => {
  return (
    <section
      style={{
        padding:"0px",
        margin:"0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "#FFD7BD",
        flexDirection:"column"
      }}
    >
      <Menulegend />
      <CardMenu/>
    </section>
  );
};

export default Menu;
