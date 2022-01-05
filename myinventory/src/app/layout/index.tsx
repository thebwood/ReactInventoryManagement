import React, { FC, Fragment } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import './layout.scss';

function Layout({children}:{children:any}) {
    return (
        <Fragment>
            <Header />
            <Body>
                {children}
            </Body>
            <Footer />
        </Fragment>

    );
};

export default Layout;