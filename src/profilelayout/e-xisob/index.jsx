import React from "react";
import xisob from './xisob.module.scss'
import payme from '../../assets/payme.svg'
import click from '../../assets/click.svg'


export const Ehisob = () => {
    return(
        <>
        <div className={xisob.container} data-aos="fade-left">
            <h2 className={xisob.title}>Э-Хисоб</h2>
            <div className={xisob.balans}>
                <p className={xisob.balans__title}>Баланс</p>
                <h2 className={xisob.balans__price}>45 000 сўм</h2>
            </div>
            <div className={xisob.payment}>
                <div className={xisob.payme}>
                    <img src={payme} alt="img" className={xisob.payme__img} />
                </div>
                <div className={xisob.click}>
                    <img src={click} alt="click" className={xisob.click__img} />
                </div>
            </div>
        </div>
        </>
    )
}