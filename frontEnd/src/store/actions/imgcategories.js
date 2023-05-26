import axios from "axios";
import { takeImg } from "../../reducers/imgcategories";


const uri = "https://sdlt2.azurewebsites.net/"

export function getImgCat() {
    
    return async function (dispatch) {
      try {
        var json = await axios.get(`${uri}/api/Categorias/GetAll`);
        console.log(json.data)
        return dispatch(takeImg(json.data));
      } catch (error) {
        console.log(error);
      }
    };
  }

  
  