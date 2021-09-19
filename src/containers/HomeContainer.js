import { connect } from "react-redux";
import { Home } from "../components/Home";
import{addToCart,removeToCart} from '../services/Actions/actions'

const mapStateToProps =state=>({

    cardData:state.cardItmes
})


const mapDispatchToProps =dispatch =>({

    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)