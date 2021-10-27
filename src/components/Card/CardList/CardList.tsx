import React, { FC, useEffect } from 'react'
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { getCards } from "../../../store/reducers/card/action-creators"
import CardItem from "../CardItem/CardItem"
import './CardList.scss'

const CardList: FC = () => {

    const { cards } = useTypedSelector(state => state.cards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
    }, [])


    return (
        <div className="card__list">
            <div className="container">
                <div className="card__list__wrapper">
                    { cards.map(card => <CardItem key={card.id} card={ card }/>) }
                </div>
            </div>
        </div>
    )
}

export default CardList