// src/Components/Logo.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Logo = ({ isDark }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: isDark ? '#FFFFFF' : '#000000' }}
      className="d-inline-block align-top" // Bootstrap classes for alignment
    >
      <text
        x="50"
        y="50"
        fontSize="40"
        fontFamily="serif"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        𝕄𝕄
      </text>
    </svg>
  );
};

export default Logo;
