import React from 'react';
import Image from 'next/image';

import { default as swap } from '../../assets/swap.svg';

export default function NavBar({ toRoman, setToRoman }) {

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
                    src="../../assets/swap.svg"
                    alt="swap positions arrows"
                    onClick={switchConversionDirection} />
            </span>
            <div className="title-box">
                {toRoman ? "Roman" : "Arabic"} Numerals
            </div>

        </div>
    )

}
