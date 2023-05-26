import axios from "axios";
import { takeImg, takeDish } from "../../reducers/imgcategories";


const uri = "https://sdlt2.azurewebsites.net/"

export function getImgCat() {
    
    return async function (dispatch) {
      try {
        var json = await axios.get(`${uri}/api/Categorias/GetAll`);
        return dispatch(takeImg(json.data));
      } catch (error) {
      }
    };
  }

  export function getDish() {
    
    return async function (dispatch) {
      try {
        var json = await axios.get(`${uri}/api/Comidas/GetAll`);
        console.log(json.data)
        return dispatch(takeDish(json.data));
      } catch (error) {
        console.log(error);
      }
    };
  }


  
  