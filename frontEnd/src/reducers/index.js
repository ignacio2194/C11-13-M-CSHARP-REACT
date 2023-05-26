import { combineReducers } from "redux";
import imgcategories from "./imgcategories";
import getImgDish from "./imgcategories"

const rootReducer = combineReducers({
    imgcategories, getImgDish
});

export default rootReducer;