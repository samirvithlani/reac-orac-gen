import {ADD_TO_CART} from '../constants'
import {REMOVE_TO_CART} from '../constants'

export const addToCart=(data)=>{

    console.log("action",data)
    return{

        data:data,
        type:ADD_TO_CART
    }
}

export const removeToCart=(data)=>{

    console.log("action",data)
    return{

        data:data,
        type:REMOVE_TO_CART
    }
}

// export const qtyToCart=(data)=>{

//     console.log("action",data)
//     return{

//         data:data,
//         type:qty_TO_CART
//     }
// }