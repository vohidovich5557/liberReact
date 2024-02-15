import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";





export const MainLayout = ({ children }) => {

    return (
        <>
            <div className="container">
            <div className="wrapper">
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}