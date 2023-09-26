import Header from "./header";
import Footer from "./footer";
import React from 'react';

export default function Layout({children}){
    
    return(<>
        <Header />
        <main className="mt-5">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child);
            })}
        </main>
        <Footer/>
    </>)
}