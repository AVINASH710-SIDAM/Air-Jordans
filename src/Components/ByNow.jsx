import React from 'react';
import '../style/ByNow.css';
import { Link } from 'react-router-dom';


const ByNow = () => {
  

  return (
    <div className="third-section">
      <div className="content">
        <span className="price">₹7,499</span>
        <button id="btn" className="buy-button">Buy Now</button>
        <Link to={'/view3d'}>
          <button className="buy-button" >3D View</button>
        </Link>
      </div>
    </div>
  );
};

export default ByNow;
