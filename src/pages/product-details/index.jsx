import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data/home";
import detail from './detail.module.scss'
import headPhone from '../../assets/headPhone.svg'
import book from '../../assets/book.svg'
import star from '../../assets/product_star.svg'
import chat from '../../assets/chat.svg'
import car from '../../assets/car.svg'
import blackHead from '../../assets/blackHead.svg'
import blackBook from '../../assets/blackbook.svg'
import { useScrollTop } from "../../hooks/scrollup/useScrollup";

export const ProductDetail = () => {

    const params = useParams();

    console.log(params);

    const result = data[params.slug].find((item) => item.id == params.id);

    useScrollTop();


    return (
        <>
            <div className={detail.main__part} data-aos="zoom-in" data-aos-duration="5000">
                <img src={result.img} alt="img_book" className={detail.img__book} />
                <div className={detail.main__info}>
                    <div className={detail.info1}>
                        <h2 className={detail.info1__title}>{result.title}</h2>
                        <div className={detail.info1_icons}>
                            <img src={headPhone} alt="headPhone" className={detail.info1__headphone} />
                            <img src={book} alt="book" className={detail.info1__book} />
                        </div>
                        <div className={detail.info1__stars}>
                            <img src={star} alt="star" className={detail.info1__star} />
                            <img src={star} alt="star" className={detail.info1__star} />
                            <img src={star} alt="star" className={detail.info1__star} />
                            <img src={star} alt="star" className={detail.info1__star} />
                            <img src={star} alt="star" className={detail.info1__star} />
                        </div>
                        <p className={detail.info1__numb}>4.0</p>
                        <div className={detail.info1__chats}>
                            <img src={chat} alt="chat__img" className={detail.info1__chatImg} />
                            <p className={detail.info1__fikrlar}> 235 Фикрлар</p>
                        </div>
                    </div>
                    <p className={detail.info__text}>{result.text}</p>
                    <p className={detail.info__dict}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <div className={detail.info__about}>
                        <div className={detail.mualif}>
                            <p className={detail.mualif__title}>Муаллиф</p>
                            <h2 className={detail.mualif__name}>Kevin Smiley</h2>
                        </div>
                        <div className={detail.mualif}>
                            <p className={detail.mualif__title}>Нашриёт</p>
                            <h2 className={detail.mualif__name}>Wepress Inc.</h2>
                        </div>
                        <div className={detail.mualif}>
                            <p className={detail.mualif__title}>Йил</p>
                            <h2 className={detail.mualif__name}>1999y</h2>
                        </div>
                    </div>
                    <div className={detail.info__buttons}>
                        <div className={detail.info__btn1}>
                            <img src={car} alt="img_car" className={detail.img__car} />
                            <p className={detail.btn__title1}>Сотиб олиш - 65 000 сум</p>
                        </div>
                        <div className={detail.info__btn1}>
                            <img src={blackHead} alt="img_car" className={detail.img__car} />
                            <p className={detail.btn__title}>Аудио тинглаш - 55 000 сум</p>
                        </div>
                        <div className={detail.info__btn1}>
                            <img src={blackBook} alt="img_car" className={detail.img__car} />
                            <p className={detail.btn__title}>Онлайн укиш - 45 000 сум</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={detail.cure__part} data-aos="zoom-in" data-aos-duration="5000">
                <div className={detail.cure__part1}>
                    <div className={detail.part1__titles}>
                    <h2 className={detail.part1__title}>Маълумотлар</h2>
                    <h2 className={detail.part1__title}>Фикрлар</h2>
                    </div>
                    <div className={detail.details__page}>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Китоб номи</p>
                            <p className={detail.page1__context}>Элжернга аталган гуллар</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Муаллиф</p>
                            <p className={detail.page1__context}>Даниел КИЗ</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>ISBN</p>
                            <p className={detail.page1__context}>121341381648 (ISBN13: 121341381648)</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Тил</p>
                            <p className={detail.page1__context}>Ўзбек</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Сахифалар</p>
                            <p className={detail.page1__context}>450</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Чоп этилган сана</p>
                            <p className={detail.page1__context}>Апрель 7, 1999</p>
                        </div>
                        <div className={detail.details__page1}>
                            <p className={detail.page1__title}>Нашриёт</p>
                            <p className={detail.page1__context}>Wepress Inc.</p>
                        </div>
                        <div className={detail.details__page12}>
                            <p className={detail.page12__title}>Рукн</p>
                            <div className={detail.page12__buttons}>
                                <p className={detail.page12__btn}>SIYOSAT</p>
                                <p className={detail.page12__btn}>СИЁСАТ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={detail.cure__part2}>
                    <h2 className={detail.part2__title}>Ўхшаш китоблар</h2>
                    <div className={detail.part2__box}>
                        {data[params.slug].map((item) => (
                            <Link to={`/product/${item.id}/${params.slug}`}>
                            <div className={detail.part2__bookbox}>
                                <img src={item.img} alt="img_book" className={detail.bookbox__img} />
                                <div className={detail.bookbox_info}>
                                    <h3 className={detail.bookbox__info__title}>{item.title}</h3>
                                    <p className={detail.bookbox__info__text}>{item.text}</p>
                                    <div className={detail.info__rate}>
                                        <img src={star} alt="img_star" className={detail.info__star} />
                                        <p className={detail.info__numb}>4.7</p>
                                        <p className={detail.info__opin}>244 фиклар</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                        <button className={detail.part2__btn}>Кўпроқ</button>
                    </div>
                </div>
            </div>
        </>
    )
}