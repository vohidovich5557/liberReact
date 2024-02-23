import React from "react";
import kitob from './kitob.module.scss'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const Kitoblar = () => {
    return(
        <>
        <div className={kitob.container}>
            <div className={kitob.tabs}>
                <h2 className={kitob.tab__title}>Китобларим</h2>
                <ul className={kitob.list}>
                    <Link to="/profile/kitoblar/audio">
                    <li className={kitob.item}>Аудиокитоб</li>
                    </Link>
                    <Link to="/profile/kitoblar/elektron">
                    <li className={kitob.item}>Электрон китоб</li>
                    </Link>
                </ul>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
        </>
    )
}