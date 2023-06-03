import { combineReducers } from "redux";
import imgcategories from "./imgcategories";
import getImgDish from "./imgcategories";
import  shopingCart  from "./cart";

const rootReducer = combineReducers({
    imgcategories, getImgDish, shopingCart
});

export default rootReducer;