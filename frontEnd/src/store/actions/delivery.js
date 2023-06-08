import axios from "axios";
import {  } from "../../reducers/payment";

const uri = "https://sdlt2.azurewebsites.net"

export function deliverySaveAction(data) {
  console.log("cahhhh")
    return async function (dispatch) {
      try {
        var json = await axios.post(`${uri}/api/Orden/GuardarOrden`, data);
        return console.log(json)
      } catch (error) {
        console.log(json)
      }

    };
  }