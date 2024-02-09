import React from 'react';
import Rating from './Rating'; // Assuming Rating component is in the same directory

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div style={{ 
      backgroundColor: '#5361e1',
      borderRadius: '10px',      
      display: 'flex',      
      justifyContent: 'center',
      alignItems: 'center',      
      marginBottom: '10px',
      width: '1000px',
      height: '180px'      
    }}>
    <div style={{ 
        display:'flex', 
        width:'100%', 
        justifyContent:'right' 
        }}>
      <img src={img} alt={name} style={{ 
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '15px'
        }} />
    </div>   
      <div style={{        
        width: '100%',
        textAlign: 'left',
        lineHeight: '1' 
        }}>
        <h2 style={{ 
            color: 'white', 
            fontSize:'24px', 
            margin: '0' 
            }}>{name}
        </h2>
        <Rating style={{ 
            margin: '5px 0' 
            }}>{rating}
        </Rating>
        <p style={{ 
            margin: '0',
            fontSize:'24px' 
            }}>{car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;