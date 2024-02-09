import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map(num => (
        <div 
          key={num} 
          style={{
            width: '200px',
            height: '200px',
            lineHeight: '50px',
            textAlign: 'center',
            backgroundColor: num % 2 === 0 ? 'red' : 'white',
            color: 'black',
            border: '1px solid black',
            margin: '5px',        
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;