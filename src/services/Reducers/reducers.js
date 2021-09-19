import { ADD_TO_CART } from "../constants";

export default function cardItmes(state = [], action) {

    switch (action.type) {

        case ADD_TO_CART:

            console.log("reducers",action)
            return [
                ...state,
                { cardData: action.data }
            ]
        default:
            return state
    }
}