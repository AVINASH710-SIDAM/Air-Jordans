import React from 'react';
import '../style/ByNow.css';
import { Link, useNavigate } from 'react-router-dom';

const ByNow = () => {
  // const navigate = useNavigate();

  const handle3DViewClick = () => {
    // navigate('/view3d'); // Navigate to the View3D page
    console.log("button clciked");
  };

  return (
    <div className="third-section">
      <div className="content">
        <span className="price">₹7,499</span>
        <button id="btn" className="buy-button">Buy Now</button>
        {/* <Link to={'/view3d'}>
          <button className="buy-button" onClick={handle3DViewClick}>3D View</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ByNow;
