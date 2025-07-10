// src/components/Service.jsx
import React from 'react';
import serviceImg from '../assets/images/BoyMenu.jpg'; 
import serviceImg2 from '../assets/images/GirlMenu.jpg'; 


const Service = () => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h2>服務價目表</h2>
      <p style={{ marginTop: '30px' }}>女性除毛價目表</p>
      <img 
        src={serviceImg2} 
        alt="Service" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          height: 'auto', 
          borderRadius: '8px' 
        }} 
      />
        <p style={{ marginTop: '40px' }}>男性除毛價目表</p>

      <img 
        src={serviceImg} 
        alt="Service" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          height: 'auto', 
          borderRadius: '8px' 
        }} 
      />
    </div>
  );
};

export default Service;
