import React from "react";
import { MainLayout } from "../../layout/main-layout";
import home from './home.module.scss'
import girlImg from '../../assets/girl.svg'
import { heroData } from "../../data/home";
import { HeroBanner } from "../../components/banner/hero-banner";
import iconNext from '../../assets/icon_next.svg'
import iconPrev from '../../assets/icon_prev.svg'
import buttonBg from '../../assets/button_bg.svg'
import love from '../../assets/love.svg'
import { ServiceCard } from "../../components/cards/service-card";
import { serviceData } from "../../data/home";
import { categoryData } from "../../data/home";
import { Category } from "../../components/banner/category-baner";
import arrowBack from '../../assets/arrow_back.svg'
import { ProductBanner } from "../../components/banner/product-banner";
import { productData } from "../../data/home";
import { ProductCard } from "../../components/cards/product-card";
import { bookData } from "../../data/home";

export const Home = () => {

    return (
        <>
            <MainLayout>
                <section className={home.hero}>
                    <div className={home.container}>
                        <div className={home.slider}>
                            <img src={girlImg} alt="girlImg" className={home.girl_img} />
                            <h2 className={home.slider__title}>Кўп ўқилаётганлар</h2>
                            <div className={home.banner_box}>
                                <img src={iconPrev} alt="iconPrev" className={home.icon} />
                                {heroData.map((item) => (
                                    <HeroBanner
                                        name={item.name}
                                        img={item.img}
                                        id={item.id}
                                    />
                                ))}
                                <img src={iconNext} alt="iconNext" className={home.icon} />
                            </div>
                        </div>
                        <div className={home.subs_box}>
                            <img src={buttonBg} alt="button_bg" className={home.subs__bg} />
                            <h2 className={home.subs__title}>Китоб ўқишни ёқтирасизми?</h2>
                            <p className={home.subs__text}>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                            <div className={home.buttons}>
                                <img src={love} alt="loveImg" className={home.love_img} />
                                <button className={home.button}>Обуна бўлиш</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={home.service}>
                    <div className={home.service__container}>
                        {serviceData.map((item) => (
                            <ServiceCard
                                id={item.id}
                                title={item.title}
                                text={item.text}
                                img={item.img}
                            />
                        ))}
                    </div>
                </section>
                <section className={home.category}>
                    <div className={home.category_container}>
                        <h2 className={home.category__title}>Рукнлар</h2>
                        <div className={home.category_box}>
                            {categoryData.map((item) => (
                                <Category
                                    id={item.id}
                                    title={item.title}
                                    img={item.img}
                                />
                            ))}
                            <img src={arrowBack} alt="arrow_back" className={home.category__arrow} />
                        </div>
                    </div>
                </section>
                <section className={home.products}>
                    <ProductBanner>
                        {productData.map((item) => (
                            <ProductCard 
                             img={item.img}
                             title={item.title}
                             text={item.text}
                             star={item.star}
                             rate={item.starText}
                            />
                        ))}
                    </ProductBanner>
                </section>
                <section className={home.products}>
                    <ProductBanner>
                        {bookData.map((item) => (
                            <ProductCard 
                             img={item.img}
                             title={item.title}
                             text={item.text}
                             star={item.star}
                             rate={item.starText}
                            />
                        ))}
                    </ProductBanner>
                </section>
            </MainLayout>
        </>
    )
}