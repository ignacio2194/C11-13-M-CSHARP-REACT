import CardMenu from "../cardMenu/cardMenu"
import Menulegend from "../menulegend/menulegend"
import './menu.css'

export default function Menu() {
  return (
    <div className="menucontainer" >
       <Menulegend />
       <CardMenu/>
       
    </div>
  )
}
