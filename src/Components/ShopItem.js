import React from 'react'

export default function ShopItem ({ item }) {
    return <li className="shop-item">
            <img src={item.img} className="shop-item-preview" alt="" />
            <h3 className="shop-item-title">{item.name}</h3>
            <span className="shop-item-color">{item.color}</span>
            <span className="shop-item-price">${item.price}</span>
            <span className="shop-item-buy-btn">Add to cart</span>
    </li>  
}