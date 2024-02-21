import React from "react";
import login from './login.module.scss'
import { Link, json } from "react-router-dom";



export const LogIn = () => {
    const [input, setInput] = React.useState("");

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const addStorage = () => {
        localStorage.setItem("userNumb", JSON.stringify(input));
    };

    addStorage();
    

    return(
        <>
        <div className={login.container}>
            <h2 className={login.container__title}>Ассалому алайкум  Хуш келибсиз!</h2>
            <form className={login.form}>
                <label htmlFor="numb" className={login.form__title}>Мобил рақам</label>
                <input type="tel" name="telphone" id="numb" className={login.form__numb} placeholder="+998 _ _    _ _ _    _ _    _ _" required="required"
                value={input} onChange={changeInput}
                />
                <Link to={`profile/1`}>
                <input type="submit" value="Кириш" className={login.form__btn} />
                </Link>
            </form>
        </div>
        </>
    )
}