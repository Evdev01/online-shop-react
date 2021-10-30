import React, { FC, useCallback, useEffect, useState } from 'react'
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useDispatch } from "react-redux"
import { getCards } from "../../../store/reducers/card/action-creators"
import CardItem from "../CardItem/CardItem"
import './CardList.scss'
import { ICard } from "../../../models/ICard"
import PopUpCard from "../../../popup/PopUpCard"

const CardList: FC = () => {

    const { cards }: any = useTypedSelector(state => state.cards)
    const dispatch = useDispatch()
    const [currentCard, setCurrentCard] = useState({})
    const [showPupUp, setShowPupUp] = useState(false)

    useEffect(() => {
        dispatch(getCards())
    }, [])


    const showPupUpInfo = useCallback((card: ICard) => {
        setCurrentCard(card)
        setShowPupUp(!showPupUp)
    }, [])

    const closePopup = () => {
        setShowPupUp(!showPupUp)
        setCurrentCard({})
    }


    return (
        <div className="card__list">
            <div className="container">
                <div className="card__list__wrapper">
                    { cards.map((card: any) => <CardItem showPupUpInfo={ showPupUpInfo } key={ card.id } card={ card }/>) }
                </div>
                {
                    showPupUp
                        ? <PopUpCard currentCard={currentCard} closePopup={closePopup} />
                        : null
                }
            </div>
        </div>
    )
}

export default CardList