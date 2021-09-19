import React from 'react'

export const Home = (props) => {
    const style = {

        width: "18rem"
    }
    console.log("home",props.cardData)
    return (
        <div>
           
            <div class="card" style={style}>
                <img class="card-img-top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">IPHONE</h5>
                    <h5 class="card-title">PRICE: 125000</h5>
                    <button onClick={()=>{props.addToCartHandler({price:12000,name:"IPHONE"})}}>ADD TO CART</button>
                    <button onClick={()=>{props.removeToCartHandler({price:12000,name:"IPHONE"})}}>REMOVE TO CART</button>
                </div>
            </div>
        </div>

    )
}
