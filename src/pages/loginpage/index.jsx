import React from "react";
import login from './login.module.scss'
import { Link } from "react-router-dom";



export const LogIn = ({ setData }) => {
    const [input, setInput] = React.useState("");

    const changeInput = (e) => {
        setInput(e.target.value)
    }


    const submit = (e) => {
        e.preventDefault();
        const addData = (p) => {
            return [...p, ({ user_name: input, id: Date.now() })]
        }

        setData(addData)
        setInput("");

    }


    return (
        <>
            <div className={login.container}>
                <h2 className={login.container__title}>Ассалому алайкум  Хуш келибсиз!</h2>
                <form className={login.form} onSubmit={submit}>
                    <label htmlFor="numb" className={login.form__title}>Мобил рақам</label>
                    <input type="tel" name="telphone" id="numb" className={login.form__numb} placeholder="+998 _ _    _ _ _    _ _    _ _" required="required"
                        value={input} onChange={changeInput}
                    />
                    <Link to={`/profile`}>
                        <button className={login.form__btn}>Kirish</button>
                    </Link>
                </form>
            </div>
        </>
    )
}