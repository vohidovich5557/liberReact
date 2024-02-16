import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data/home";
import detail from './detail.module.scss'

export const ProductDetail = () => {

    const params = useParams();

    console.log(params);

    const result = productData.find((item) => item.id === Number(params.productId))

    console.log(result);

    return (
        <>
        <img src={result.img} alt="img" className={detail.main__img}/>
         <h1>{result.title}</h1>
         <h1>{result.text}</h1>
        </>
    )
}