import React from 'react';

import './style.css';
import Products from '../../Components/Products';

export default function Home() {
  return (
    <div className="home_wrapper">
        <div className="home_container">
            <div className="main">
                <Products/>
            </div>
        </div>
    </div>
  );
}
