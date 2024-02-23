import React from "react";
import obuna from './obuna.module.scss'
import girlObuna from '../../assets/girl_obune.svg'


export const Obuna = () => {
  return (
    <>
      <div className={obuna.container} data-aos="fade-left">
        <div className={obuna.banner}>
          <h2 className={obuna.text}>Узингиз севган булимга
            обуна бўлинг</h2>
          <img src={girlObuna} alt="img__girl" className={obuna.img_girl} />
        </div>
        <div className={obuna.info__banner}>
          <div className={obuna.info1}>
            <h2 className={obuna.info1__title}>Обуна</h2>
            <form className={obuna.form}>
              <div className={obuna.form__select}>
                <label htmlFor="time" className={obuna.select__title}>Обуна давом этиш вакти</label>
                <select name="time" id="time" className={obuna.select}>
                  <option value="30 Kun" className={obuna.select__text}>30 кун</option>
                  <option value="20 Kun" className={obuna.select__text}>20 кун</option>
                  <option value="10 Kun" className={obuna.select__text}>10 кун</option>
                </select>
              </div>
              <div className={obuna.form__select}>
                <label htmlFor="bolim" className={obuna.select__title}>Булимни танланг</label>
                <select name="bolim" id="bolim" className={obuna.select}>
                  <option value="Фантастика" className={obuna.select__text}>Фантастика</option>
                  <option value="Фантастика" className={obuna.select__text}>Фантастика</option>
                  <option value="Фантастика" className={obuna.select__text}>Фантастика</option>
                </select>
              </div>
            </form>
            <h2 className={obuna.info1__title2}>Обуна 30 кун давом этади</h2>
          </div>
          <div className={obuna.info2}>
            <div className={obuna.info2__time}>
              <div className={obuna.start}>
                <p className={obuna.start__title}>Бошланиш вакти</p>
                <h2 className={obuna.start__time}>12/09/2021</h2>
              </div>
              <div className={obuna.start}>
                <p className={obuna.start__title}>Якунланиш вакти</p>
                <h2 className={obuna.start__time}>12/10/2021</h2>
              </div>
              <div className={obuna.start}>
                <p className={obuna.start__title}>Обуна нархи</p>
                <h2 className={obuna.start__price}>12 000 сум</h2>
              </div>
            </div>
            <button type="submit" className={obuna.info2__btn}>Обуна булиш</button>
          </div>
        </div>
      </div>
    </>
  )
}