import React from "react";
import category from './category.module.scss'




export const Category = ({img, title, id}) => {


    return (
        <>
         <div className={category.box} key={id}>
            <img src={img} alt="img" className={category.box__img} />
            <p className={category.box__title}>{title}</p>
         </div>
        </>
    )
}