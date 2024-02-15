import React from "react";
import enter from './enter.module.scss'
import label from '../../../../assets/label.svg'
import vector from '../../../../assets/vector.svg'
import profile from '../../../../assets/profile.svg'


export const Enter = () => {



    return (

        <>
         <div className={enter.enter__container}>
            <div className={enter.lang}>
                <img src={label} alt="label" className={enter.lang_label}  />
                <p className={enter.lang__title} >Ўз</p>
                <img src={vector} alt="vector" className={enter.lang_vector} />
            </div>
            <div className={enter.auth}>
                <img src={profile} alt="profile" className={enter.auth_pro} />
                <p className={enter.auth__title}>Кириш</p>
            </div>
         </div>
        </>
    )
}