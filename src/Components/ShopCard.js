import React from 'react'

export default function ShopCard ({ card }) {
    return <div className="shop-card">
        <h2 className="shop-card-title">{card.name}</h2>
        <span className="shop-card-color">{card.color}</span>
        <img src={card.img} className="shop-card-preview" alt=""/>
        <div className="shop-card-price-buy">
            <span className="shop-card-price">${card.price}</span>
            <span className="shop-card-buy-btn">Add to cart</span>
        </div>
    </div>  
}