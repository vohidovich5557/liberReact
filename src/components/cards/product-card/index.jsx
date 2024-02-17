import React from "react";
import Procard from './productCard.module.scss'
import headPhone from '../../../assets/headPhone.svg'
import book from '../../../assets/book.svg'



export const ProductCard = ({img, title, text, star, rate }) => {


    return (
        <>
         <div className={Procard.card__box} data-aos="fade-up" data-aos-duration="1000">
            <img src={img} alt="img" className={Procard.box__img} />
            <h2 className={Procard.box__title}>{title}</h2>
            <p className={Procard.box__text}>{text}</p>
            <div className={Procard.bottom__info}>
                <div className={Procard.info__star}>
                    <img src={star} alt="img_star" className={Procard.img__star}/>
                    <p className={Procard.info__rate}>{rate}</p>
                </div>
                <div className={Procard.info__access}>
                    <img src={headPhone} alt="img_headphone" className={Procard.img__head} />
                    <img src={book} alt="img__book" className={Procard.img__book} />
                </div>
            </div>
         </div>
        </>
    )
}