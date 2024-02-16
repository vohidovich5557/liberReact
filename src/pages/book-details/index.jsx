import React from "react";
import { useParams } from "react-router-dom";
import { bookData } from "../../data/home";
import book from './book.module.scss'


export const BookDetail = () => {

    const param = useParams();

    const result = bookData.find((item) => item.bookid === Number(param.bookId))

    console.log(result);
    return (

        <>
        <img src={result.img} alt="img" className={book.main__img} />
        <h1>{result.title}</h1>
        <h1>{result.text}</h1>
        </>
    )
};