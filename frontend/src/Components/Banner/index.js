import React from 'react';

import'./style.css';

import banner from "../../Assets/img/mannn.jpg";
import logo from "../../Assets/img/logo.svg";

export default function Banner() {
  return (
    <div className="banner_wrapper">
        <div className="linaer">
            <div className="promo_text">
            <img src={logo}alt="logo"/>
            <div>Aumente sua coleção de bonés Freezy</div>
            </div>
        </div>
        <img src={banner} alt="banner"/>
    </div>
  );
}
