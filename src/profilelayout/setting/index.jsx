import React from "react";
import setting from './setting.module.scss'
import user from '../../assets/user.svg'




export const Setting = () => {
    return(
        <>
         <div className={setting.container} data-aos="fade-left">
            <h2 className={setting.title}>Созламалар</h2>
            <div className={setting.info}>
                <img src={user} alt="user__img"  className={setting.user__img}/>
                <h3 className={setting.text}>Сурат юклаш</h3>
            </div>
            <form className={setting.form}>
                <label htmlFor="name" className={setting.label__text}>Исмингиз</label>
                <input type="text" name="name" id="name"  className={setting.name} placeholder="Исмингиз"/>
            </form>
            <button className={setting.btn}>Сақлаш</button>
         </div>
        </>
    )
}