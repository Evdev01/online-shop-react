import React, { FC } from 'react'
import { ICard } from "../../../models/ICard"
import './CardItem.scss'
import { useDispatch } from "react-redux"
import { addCardInBasket } from "../../../store/reducers/card/action-creators"

interface CardItemProps {
    card: ICard
    showPupUpInfo: (card: ICard) => void
}




const CardItem: FC<CardItemProps> = ({card, showPupUpInfo}) => {

    const dispatch = useDispatch()

    const addCardBasket = (card: ICard) => {
        dispatch(addCardInBasket(card))
    }


    return (
        <div className="card__item">
            <img src={card.image} alt="loading" onClick={() => showPupUpInfo(card)}/>
            <div className="card__item__info">
                <div>
                    <h3 className="card__title">{card.model}</h3>
                    <p className="card__item__count">{card.stockCount} left in stock Count</p>
                    <p className="card__item__description">{card.description}</p>
                    <div className="card__price__block">
                        <p>{card.price} ₽</p>
                        <button className="add_to_cart" onClick={() => addCardBasket(card)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CardItem)