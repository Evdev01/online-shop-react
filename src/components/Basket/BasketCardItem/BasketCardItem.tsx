import React, { FC } from 'react'
import './BasketCardItem.scss'
import { ICard } from "../../../models/ICard"

interface BasketItemProps {
    card: ICard
}

const BasketCardItem: FC<BasketItemProps> = ({ card }) => {
    return (
        <div className="basket__wrapper">
            <div className="container">
                <div className="basket__item">
                    <img src={ card.image } alt="loading"/>
                    <div className="basket__item-info">
                        <p>{ card.model }</p>
                        <p>{ card.price } ₽</p>
                        <p>{ card.article }</p>
                    </div>
                    <div className="basket__item-quantity">
                        <p>Qty:</p>
                        <span className="quantity__btn">-</span>
                            <span className="quantity__count">0</span>
                        <span className="quantity__btn">+</span>
                    </div>
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCardItem