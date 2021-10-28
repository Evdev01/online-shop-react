import React, { FC } from 'react'
import './PupUpCard.scss'
import { useDispatch } from "react-redux"
import { ICard } from "../models/ICard"
import { addCardInBasket } from "../store/reducers/card/action-creators"

interface PopUpCardProps {
    currentCard: any
    closePopup: () => void
}


const PopUpCard: FC<PopUpCardProps> = ({ currentCard, closePopup }) => {

    const dispatch = useDispatch()

    const addCardBasket = (card: ICard) => {
        dispatch(addCardInBasket(card))
    }

    return (
        <div className="popup__wrapper">
            <div className="popup">
                <div className="popup__header">
                    <span>{currentCard.model}</span>
                <span>
                  <i className="material-icons" onClick={ closePopup }>close</i>
                </span>
                </div>
                <div className="popup__content">
                    <img src={currentCard.image} alt="loading"/>
                    <p className="card__title">{currentCard.model}</p>
                    <p className="card__item__count">{currentCard.stockCount} left in stock Count</p>
                    <p className="card__item__description">{currentCard.description}</p>
                    <p>{currentCard.price} ₽</p>
                </div>
                <div className="popup__footer">
                    <button className="close_modal" onClick={ closePopup }>Close</button>
                <button className="submit_btn" onClick={() => addCardBasket(currentCard)}>Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpCard