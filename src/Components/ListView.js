import React from 'react'
import ShopItem from "./ShopItem"

export default function ListView ({ items }) {
    return <ul className="list-view">
        {items.map((item, index) =>{ return <ShopItem item={item} key={index} /> }
        )}
    </ul>
}