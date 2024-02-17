import React from "react";
import { useParams } from "react-router-dom";
import { bookData } from "../../data/home";
import book from './book.module.scss'
import headPhone from '../../assets/headPhone.svg'
import books from '../../assets/book.svg'
import star from '../../assets/product_star.svg'
import chat from '../../assets/chat.svg'
import car from '../../assets/car.svg'
import blackHead from '../../assets/blackHead.svg'
import blackBook from '../../assets/blackbook.svg'


export const BookDetail = () => {

    const param = useParams();

    const result = bookData.find((item) => item.bookid === Number(param.bookId))

    console.log(result);
    return (

        <>
            <div className={book.main__part} data-aos="zoom-in" data-aos-duration="5000">
                <img src={result.img} alt="img_book" className={book.img__book} />
                <div className={book.main__info}>
                    <div className={book.info1}>
                        <h2 className={book.info1__title}>{result.title}</h2>
                        <div className={book.info1_icons}>
                            <img src={headPhone} alt="headPhone" className={book.info1__headphone} />
                            <img src={books} alt="book" className={book.info1__book} />
                        </div>
                        <div className={book.info1__stars}>
                            <img src={star} alt="star" className={book.info1__star} />
                            <img src={star} alt="star" className={book.info1__star} />
                            <img src={star} alt="star" className={book.info1__star} />
                            <img src={star} alt="star" className={book.info1__star} />
                            <img src={star} alt="star" className={book.info1__star} />
                        </div>
                        <p className={book.info1__numb}>4.0</p>
                        <div className={book.info1__chats}>
                            <img src={chat} alt="chat__img" className={book.info1__chatImg} />
                            <p className={book.info1__fikrlar}> 235 Фикрлар</p>
                        </div>
                    </div>
                    <p className={book.info__text}>{result.text}</p>
                    <p className={book.info__dict}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <div className={book.info__about}>
                        <div className={book.mualif}>
                            <p className={book.mualif__title}>Муаллиф</p>
                            <h2 className={book.mualif__name}>Kevin Smiley</h2>
                        </div>
                        <div className={book.mualif}>
                            <p className={book.mualif__title}>Нашриёт</p>
                            <h2 className={book.mualif__name}>Wepress Inc.</h2>
                        </div>
                        <div className={book.mualif}>
                            <p className={book.mualif__title}>Йил</p>
                            <h2 className={book.mualif__name}>1999y</h2>
                        </div>
                    </div>
                    <div className={book.info__buttons}>
                        <div className={book.info__btn1}>
                            <img src={car} alt="img_car" className={book.img__car} />
                            <p className={book.btn__title1}>Сотиб олиш - 65 000 сум</p>
                        </div>
                        <div className={book.info__btn1}>
                            <img src={blackHead} alt="img_car" className={book.img__car} />
                            <p className={book.btn__title}>Аудио тинглаш - 55 000 сум</p>
                        </div>
                        <div className={book.info__btn1}>
                            <img src={blackBook} alt="img_car" className={book.img__car} />
                            <p className={book.btn__title}>Онлайн укиш - 45 000 сум</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={book.cure__part} data-aos="zoom-in" data-aos-duration="5000">
                <div className={book.cure__part1}>
                    <div className={book.part1__titles}>
                        <h2 className={book.part1__title}>Маълумотлар</h2>
                        <h2 className={book.part1__title}>Фикрлар</h2>
                    </div>
                    <div className={book.details__page}>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Китоб номи</p>
                            <p className={book.page1__context}>Элжернга аталган гуллар</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Муаллиф</p>
                            <p className={book.page1__context}>Даниел КИЗ</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>ISBN</p>
                            <p className={book.page1__context}>121341381648 (ISBN13: 121341381648)</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Тил</p>
                            <p className={book.page1__context}>Ўзбек</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Сахифалар</p>
                            <p className={book.page1__context}>450</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Чоп этилган сана</p>
                            <p className={book.page1__context}>Апрель 7, 1999</p>
                        </div>
                        <div className={book.details__page1}>
                            <p className={book.page1__title}>Нашриёт</p>
                            <p className={book.page1__context}>Wepress Inc.</p>
                        </div>
                        <div className={book.details__page12}>
                            <p className={book.page12__title}>Рукн</p>
                            <div className={book.page12__buttons}>
                                <p className={book.page12__btn}>SIYOSAT</p>
                                <p className={book.page12__btn}>СИЁСАТ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={book.cure__part2}>
                    <h2 className={book.part2__title}>Ўхшаш китоблар</h2>
                    <div className={book.part2__box}>
                        {bookData.map((item) => (
                            <div className={book.part2__bookbox}>
                                <img src={item.img} alt="img_book" className={book.bookbox__img} />
                                <div className={book.bookbox_info}>
                                    <h3 className={book.bookbox__info__title}>{item.title}</h3>
                                    <p className={book.bookbox__info__text}>{item.text}</p>
                                    <div className={book.info__rate}>
                                        <img src={star} alt="img_star" className={book.info__star} />
                                        <p className={book.info__numb}>4.7</p>
                                        <p className={book.info__opin}>244 фиклар</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className={book.part2__btn}>Кўпроқ</button>
                    </div>
                </div>
            </div>
        </>
    )
};