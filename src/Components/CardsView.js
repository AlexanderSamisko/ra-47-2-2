import React from "react"
import ShopCard from "./ShopCard"

export default function CardsView ({ cards }) {

    return <div className="cards-view">
            {cards.map((item, index) => {
              return  <ShopCard card={item} key={index} />
        })}
    </div>
    
}