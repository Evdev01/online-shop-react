import React, { FC } from 'react'
import './HeaderTop.scss'


import flagRu from '../../assets/img/flag-ru.svg'
import arrow from '../../assets/img/arrow.svg'

const HeaderTop: FC = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="header__top">
                    <div className="header__top__wrapper">
                        <div className="header__top__country_wrapper">
                            <img src={ flagRu } alt="ru"/>
                            <p>Russia</p>
                            <img className="arrow" src={ arrow } alt="arrow"/>
                        </div>
                        <p>Phone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop