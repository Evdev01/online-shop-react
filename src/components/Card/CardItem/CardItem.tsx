import React, { FC } from 'react'
import { ICard } from "../../../models/ICard"
import './CardItem.scss'

interface CardItemProps {
    card: ICard
    showPupUpInfo: (card: ICard) => void
}




const CardItem: FC<CardItemProps> = ({card, showPupUpInfo}) => {
    return (
        <div className="card__item" onClick={() => showPupUpInfo(card)}>
            <img src={card.image} alt="loading"/>
            <div className="card__item__info">
                <div>
                    <h3 className="card__title">{card.model}</h3>
                    <p className="card__item__count">{card.stockCount} left in stock Count</p>
                    <p className="card__item__description">{card.description}</p>
                    <div className="card__price__block">
                        <p>{card.price} ₽</p>
                        <button className="add_to_cart">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem