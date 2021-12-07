import React from 'react'
import Footer from '../footer';
import Header from '../header/index';
import ComponentSidebar from '../sidebar/sidebar';
import {MainComponent} from './style'
const WrapperContent = (props:any) => {
    return (
        <>
            <Header />
            <MainComponent>
                <ComponentSidebar />
                {props.children}
            </MainComponent>
            <Footer />
        </>
    )
}

export default WrapperContent