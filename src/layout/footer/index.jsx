import React from "react";
import footer from './footer.module.scss'
import { footerData } from "./footer";
import googlePlay from '../../assets/googleplay.svg'
import appStore from '../../assets/appstore.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import tiktok from '../../assets/tiktok.svg'
import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'



export const Footer = () => {



    return (
        <>
            <div className={footer.container}>
                <div className={footer.box1}>
                    <div className={footer.info__box} data-aos="fade-right" data-aos-delay="300">
                        <h2 className={footer.info__title}>Платформа хақида</h2>
                        <p className={footer.info__text}>Liber ўзи нима?</p>
                        <p className={footer.info__text}>Фойдаланиш шартлари</p>
                        <p className={footer.info__text}>Ёрдам</p>
                    </div>
                    <div className={footer.info__box} data-aos="fade-right" data-aos-delay="700">
                        <h2 className={footer.info__title}>Обуна хақида</h2>
                        <p className={footer.info__text}>Обуна бўлиш</p>
                        <p className={footer.info__text}>Қандай тўлаш</p>
                    </div>
                    <div className={footer.info__box} data-aos="fade-right" data-aos-delay="1200">
                        <h2 className={footer.info__title}>Китоблар</h2>
                        <p className={footer.info__text}>Аудио китоблар</p>
                        <p className={footer.info__text}>Электрон китоблар</p>
                        <p className={footer.info__text}>Китоблар</p>
                    </div>
                    <div className={footer.info__box} data-aos="fade-right" data-aos-delay="1600">
                        <h2 className={footer.info__title}>Мобил илова</h2>
                        <img src={googlePlay} alt="img1" className={footer.icon} />
                        <img src={appStore} alt="img2" className={footer.icon} />
                    </div>
                </div>
                <div className={footer.box2}>
                    <div className={footer.box2_1}>
                        <p className={footer.box1__title}>Ижтимоий тармоқлар</p>
                        <div className={footer.icons}>
                          <img src={facebook} alt="icon" className={footer.socialIcon} />
                          <img src={youtube} alt="icon" className={footer.socialIcon} />
                          <img src={tiktok} alt="icon" className={footer.socialIcon} />
                          <img src={telegram} alt="icon" className={footer.socialIcon} />
                          <img src={instagram} alt="icon" className={footer.socialIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}