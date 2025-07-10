// src/components/Comparison.jsx
import React from 'react';
import beforeAfterImg from '../assets/images/Comparison.jpg';
import beforeAfterImg2 from '../assets/images/Comparison-2.jpg';

const Comparison = () => {
  return (
    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
      <h2>效果對比</h2>
      <img 
        src={beforeAfterImg} 
        alt="Before and After" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          height: 'auto', 
          borderRadius: '8px' 
        }} 
      />
      <img 
        src={beforeAfterImg2} 
        alt="Before and After" 
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

export default Comparison;
