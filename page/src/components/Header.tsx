import React from "react";
import logo from '../asserts/logo.svg';

export function Header(){
    return (
        <header>
            <img src={logo} alt="" className="logo" />
            <h1>Lista</h1>
        </header>
    );
}