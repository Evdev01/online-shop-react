import React, { FC } from 'react'
import './HeaderTop.scss'

const HeaderTop: FC = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="header__top">
                    <div className="header__top__wrapper">
                        <p>City</p>
                        <p>Phone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop