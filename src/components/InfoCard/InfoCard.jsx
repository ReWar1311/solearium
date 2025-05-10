import React from 'react';
import './InfoCard.css';

const InfoCard = ({ icon, title, description, className }) => {
  return (
    <div className={`info-card ${className || ''}`}>
      <div className="info-card-icon" >
        {icon}
      </div>
      <div className="info-card-content">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;