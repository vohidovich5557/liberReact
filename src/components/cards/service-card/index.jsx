import React, { useEffect } from "react";
import service from './service.module.scss'
import Aos from 'aos'
import "aos/dist/aos"




export const ServiceCard = ({ img, id, title, text }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div className={service.container} key={id} data-aos="fade-up" data-aos-duration="2000">
                <img src={img} alt="img" className={service.card__img} />
                <div className={service.info}>
                    <h2 className={service.info__title}>{title}</h2>
                    <p className={service.info__text}>{text}</p>
                </div>
            </div>
        </>
    )
}