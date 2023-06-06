import axios from "axios";
import { Id } from "../../reducers/payment";

const uri = "https://sdlt2.azurewebsites.net"

export function payment(data) {
  console.log(data)
    return async function (dispatch) {
      try {
        var json = await axios.post(`${uri}/api/Orden/CrearPrefMP`, data);
        return dispatch(Id(json.data.Id));
      } catch (error) {
        console.log(json)
      }

    };
  }