import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    // const { Component } = props

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    }

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/testapi'>TestApi</Link></h3>
            </div>
            {/* <Component /> */}
            {children}
        </div>
    )
}

export default Header