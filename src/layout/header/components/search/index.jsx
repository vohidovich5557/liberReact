import React from "react";
import search from './search.module.scss'
import runk from '../../../../assets/runk.svg'
import vector from '../../../../assets/vector.svg'
import searchIcon from '../../../../assets/search_icon.svg'

export const Search = () => {


    return (
        <>
         <div className={search.search}>
            <div className={search.runk}>
                <img src={runk}  alt="runk" className={search.runk__img} />
                <p className={search.runk__title}>Рукнлар</p>
                <img src={vector} alt="vector" className={search.runk_icon} />
            </div>
            <form className={search.form}>
                <input type="search" name="search" placeholder="Қидириш" className={search.input} />
                <img src={searchIcon} alt="searchIcon" className={search.form__icon} />
            </form>
         </div>
        </>
    )
}