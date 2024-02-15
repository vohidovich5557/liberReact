import React from "react";
import tab from './tab.module.scss'




export const Tab = ({name, path, id}) => {


    return (
        <>
         <ul className={tab.list}>
            <li key={id} className={tab.item}><a href={path} className={tab.link}>{name}</a></li>
         </ul>
        </>
    )
}