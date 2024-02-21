import React from "react";
import enter from './enter.module.scss'
import label from '../../../../assets/label.svg'
import vector from '../../../../assets/vector.svg'
import profile from '../../../../assets/profile.svg'
import { Link } from "react-router-dom";


export const Enter = () => {



    return (

        <>
            <div className={enter.enter__container}>
                <div className={enter.lang}>
                    <img src={label} alt="label" className={enter.lang_label} />
                    <select name="lang" id="lang" className={enter.lang__title}>
                        <option value="uzb">Uzb</option>
                        <option value="rus">Rus</option>
                        <option value="Eng">Eng</option>
                    </select>
                </div>
                <div className={enter.auth}>
                    <img src={profile} alt="profile" className={enter.auth_pro} />
                    <Link to={`logIn`}>
                        <p className={enter.auth__title}>Кириш</p>
                    </Link>
                </div>
            </div>
        </>
    )
}