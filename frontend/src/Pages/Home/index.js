import React from 'react';

import './style.css';
import Products from '../../Components/Products';
// import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <div className="home_wrapper">
        <div className="home_container">
            <div className="main">
              {/* <Banner/> */}
              <Products/>
            </div>
        </div>
    </div>
  );
}
