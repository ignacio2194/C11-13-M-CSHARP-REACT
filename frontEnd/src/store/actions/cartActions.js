import  {loadCart}  from "../../reducers/cart";

export function pushCart(date){

    return function(dispatch){
        try{
        return dispatch(loadCart(date))
        }catch(error){}
    }
}
