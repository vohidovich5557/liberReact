import React from "react";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import profile from './profile.module.scss'
import { profileData } from "../../data/profile";
import { LogIn } from "../../pages/loginpage";

export const Profile = () => {

    const params = useParams();

    console.log(params);

    return (
        <>
            <div className={profile.container}>
                <div >
                </div>
                <div className={profile.menu}>
                    <div className={profile.list}>
                        {profileData.map((item) => (
                            <div className={profile.menu__bar}>
                                <img src={item.img} alt="img" className={profile.bar__img} />
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                    <div className={profile.out}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}