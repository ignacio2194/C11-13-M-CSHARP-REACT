
export default function Card(props) {
  
    return (
    <div>
        <img src={props.img} alt="imagen" />
        <label>{props.categoria}</label>
    </div>
  )
}
