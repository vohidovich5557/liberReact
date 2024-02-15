import React from "react";
import hero from './hero.module.scss'



export const HeroBanner = ({img, name, id}) => {
    

    return (
        <>
         <div className={hero.box} key={id}>
            <img src={img} alt="img" className={hero.box_img}/>
            <p className={hero.box__title}>{name}</p>
         </div>
        </>
    )
}