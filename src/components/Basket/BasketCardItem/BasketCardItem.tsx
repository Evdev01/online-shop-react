import React, { FC } from 'react'
import './BasketCardItem.scss'
import { ICard } from "../../../models/ICard"
import { useDispatch } from "react-redux"
import {
    decrementCardBasket,
    deleteCardsBasket,
    incrementCardBasket
} from "../../../store/reducers/card/action-creators"

interface BasketItemProps {
    card: ICard
}

const BasketCardItem: FC<BasketItemProps> = ({ card }) => {

    const dispatch = useDispatch()

    const deleteCard = (id: number) => {
        dispatch(deleteCardsBasket(id))
    }

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
                        <span className="quantity__btn" onClick={ () => dispatch(incrementCardBasket(card)) }>-</span>
                        <span className="quantity__count">{ card.quantity }</span>
                        <span className="quantity__btn" onClick={ () => dispatch(decrementCardBasket(card)) }>+</span>
                    </div>
                    <div>
                        <i className="material-icons" onClick={ () => deleteCard(card.id) }>deletesweep</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCardItem