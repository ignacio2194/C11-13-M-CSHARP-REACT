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

  //Para ver todos los productos
  export function getAllProducts() {
    return async function (dispatch) {
      try {
        var json = await axios.get(`${uri}/api/Productos/GetAll`);
        return dispatch(takeImg(json.data));
      } catch (error) {
      }
    };
  }

  //Para Obtener Productos por Id
  export function getDish(id) {
       return async function (dispatch) {
      try {
        var json = await axios.get(`${uri}api/Productos/GetByCategory?categoriaId=${id}`);
        return dispatch(takeDish(json.data));
      } catch (error) {
        console.log(error);
      }
    };
  }

  //para modificar el producto por Id
  export function modfiDish(ProductoId, formData) {
    return async function (dispatch) {
   try {
     var json = await axios.put(`${uri}api/Productos/Modify?id=${ProductoId }, ${formData}`);
     return json
   } catch (error) {
     console.log(error);
   }
 };
}