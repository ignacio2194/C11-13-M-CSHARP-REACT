import axios from "axios";

import  {loadCart}  from "../../reducers/cart";

export function pushCart(date){
    console.log(date,'holaaaaa action')
    console.log(loadCart)
    return function(dispatch){
        try{
        return dispatch(loadCart(date))
        }catch(error){}
    }
}
