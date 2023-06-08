import { combineReducers } from "redux";
import imgcategories from "./imgcategories";
import getImgDish from "./imgcategories";
import  shopingCart  from "./cart";
import Idpago from "./payment"

const rootReducer = combineReducers({
    imgcategories, getImgDish, shopingCart, Idpago
});

export default rootReducer;