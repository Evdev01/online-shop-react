import React from 'react'
import './Header.scss'


const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <p className="header__logo">Logo</p>
                        <p className="header__select_category">Category</p>
                        <input type="text" placeholder="Search on site"/>
                        <div className="cart">Cart</div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header