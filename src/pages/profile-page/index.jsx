import React from "react";
import { useParams } from "react-router-dom";



export const Profile = () => {

    const params = useParams();

    console.log(params);

    return (
        <>
       <div>
        <h1>salom</h1>
        <h2>salom</h2>
       </div>
        </>
    )
}