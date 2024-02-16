import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";





export const MainLayout = () => {

    return (
        <>
            <div className="container">
            <div className="wrapper">
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}