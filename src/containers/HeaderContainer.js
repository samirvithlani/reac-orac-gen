import { connect } from "react-redux";
import { Header } from "../components/Header";


const mapStateToProps =state=>({

    cardData:state.cardItmes
})

const mapDispatchToProps =dispatch =>({

    //qtyremove handler  --> action
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)