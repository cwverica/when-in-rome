import React from 'react';

import './NavBar.css';

import { default as swap } from './swap.svg';

function NavBar({ toRoman, setToRoman }) {

    function switchConversionDirection(e) {
        e.preventDefault();
        setToRoman(!toRoman);
    }

    return (
        <div className="title-container">

            <div className="title-box">
                {toRoman ? "Arabic" : "Roman"} Numerals
            </div>
            <span className="img-holder">
                <img
                    className="swap-img"
                    src={swap}
                    alt="swap positions arrows"
                    onClick={switchConversionDirection} />
            </span>
            <div className="title-box">
                {toRoman ? "Roman" : "Arabic"} Numerals
            </div>

        </div>
    )

}

export default NavBar;