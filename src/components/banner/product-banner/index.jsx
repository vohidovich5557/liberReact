import React from "react";
import product from './product.module.scss'
import iconPrev from '../../../assets/ico_prev.svg'
import iconNext from "../../../assets/ico_next.svg"


export const ProductBanner = ({ children }) => {


    return (
        <>
            <div className={product.slider}>
                <div className={product.main}>
                    <h2 className={product.title}>Янги қўшилганлар</h2>
                    <div className={product.tabs}>
                        <img src={iconPrev} alt="icon_prev" className={product.ico} />
                        <span className={product.dot}></span>
                        <span className={product.dots}></span>
                        <span className={product.dots}></span>
                        <img src={iconNext} alt="icon_next" className={product.ico} />
                    </div>
                </div>
                <div className={product.slider__box}>
                    {children}
                </div>
            </div>
        </>
    )
}