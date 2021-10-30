import React, { FC, useEffect } from 'react'
import './Basket.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import BasketCardItem from "./BasketCardItem/BasketCardItem"
import { useDispatch } from "react-redux"
import { getCardsBasket } from "../../store/reducers/card/action-creators"

const Basket: FC = () => {

    console.log('Basket')

    const { basketCards } = useTypedSelector(state => state.cards)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsBasket())
    }, [])

    return (
        <div>
            {/*<NavLink to={'/'}>Go to the main page</NavLink>*/ }
            { basketCards.map(card => <BasketCardItem key={ card.id } card={ card }/>) }
            <div className="basket__total">
                <p className="total__name">Total:</p>
                <p> { basketCards.reduce((total, card) => total + card.price * card.quantity, 0) } ₽.</p>
            </div>
        </div>
    )
}

export default Basket