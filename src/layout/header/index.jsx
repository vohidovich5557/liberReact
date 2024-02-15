import React from "react";
import header from './header.module.scss'
import logo from '../../assets/logo.svg'
import { Search } from "./components/search";
import { Enter } from "./components/enter";
import { headerData } from "./header";
import { Tab } from "./components/tabs";


export const Header = () => {


    return (
        <>
         <div className={header.container}>
            <div className={header.search}>
                <div className={header.logo}>
                    <img src={logo} alt="logo" className={header.logo_img} />
                </div>
                <Search />
            </div>
            <Enter />
         </div>
         <div className={header.container2}>
            {headerData.map((item) => (
                <Tab 
                 name={item.name}
                 path={item.path}
                />
            ))}
         </div>
        </>
    )
}