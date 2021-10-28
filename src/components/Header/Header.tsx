import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector"


const Header = () => {

    const { basketCards } = useTypedSelector(state => state.cards)

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <p className="header__logo">Logo</p>
                        <p className="header__select_category">Category</p>
                        <input type="text" placeholder="Search on site"/>
                        <div className="cart">
                            <NavLink to={'/basket'}>Card { basketCards.length }</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header