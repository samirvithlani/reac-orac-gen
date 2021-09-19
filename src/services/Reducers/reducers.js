import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export default function cardItmes(state = [], action) {

    switch (action.type) {

        case ADD_TO_CART:

            console.log("reducers",action)
            return [
                ...state,
                { cardData: action.data }
            ]
        case REMOVE_TO_CART:
                state.pop()

                return[
                    //splice , jsx
                    ...state
                ]    
            
        default:
            return state
    }
}




// export default function qtyred(state = [], action) {

//     switch (action.type) {

//         case ADD_TO_CART:

//             console.log("reducers",action)
//             return [
//                 ...state,
//                 { cardData: action.data }
//             ]
//         case REMOVE_TO_CART:
//                 state.pop()

//                 return[
//                     //splice , jsx
//                     ...state
//                 ]    
            
//         default:
//             return state
//     }
// }