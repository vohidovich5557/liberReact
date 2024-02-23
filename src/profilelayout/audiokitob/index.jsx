import React from "react";
import audio from './audio.module.scss'
import { data } from "../../data/home";
import headPhone from '../../assets/headPhone.svg'
import book from '../../assets/book.svg'
import star from '../../assets/product_star.svg'
import chat from '../../assets/chat.svg'


export const Audio = () => {


    return (
        <>
            <div className={audio.container}>
                {data.productData.map((item) => (
                    <div className={audio.main__part}>
                        <img src={item.img} alt="img_book" className={audio.img__book} />
                        <div className={audio.main__info}>
                            <div className={audio.info1}>
                                <h2 className={audio.info1__title}>{item.title}</h2>
                                <div className={audio.info1_icons}>
                                    <img src={headPhone} alt="headPhone" className={audio.info1__headphone} />
                                    <img src={book} alt="book" className={audio.info1__book} />
                                </div>
                                <div className={audio.info1__stars}>
                                    <img src={star} alt="star" className={audio.info1__star} />
                                    <img src={star} alt="star" className={audio.info1__star} />
                                    <img src={star} alt="star" className={audio.info1__star} />
                                    <img src={star} alt="star" className={audio.info1__star} />
                                    <img src={star} alt="star" className={audio.info1__star} />
                                </div>
                                <p className={audio.info1__numb}>4.0</p>
                                <div className={audio.info1__chats}>
                                    <img src={chat} alt="chat__img" className={audio.info1__chatImg} />
                                    <p className={audio.info1__fikrlar}> 235 Фикрлар</p>
                                </div>
                            </div>
                            <p className={audio.info__text}>{ }</p>
                            <p className={audio.info__dict}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                            <div className={audio.info__about}>
                                <div className={audio.mualif}>
                                    <p className={audio.mualif__title}>Муаллиф</p>
                                    <h2 className={audio.mualif__name}>Kevin Smiley</h2>
                                </div>
                                <div className={audio.mualif}>
                                    <p className={audio.mualif__title}>Нашриёт</p>
                                    <h2 className={audio.mualif__name}>Wepress Inc.</h2>
                                </div>
                                <div className={audio.mualif}>
                                    <p className={audio.mualif__title}>Йил</p>
                                    <h2 className={audio.mualif__name}>1999y</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}