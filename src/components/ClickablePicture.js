import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img 
      src={isClicked ? imgClicked : img} 
      alt="clickable" 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;

// This component can be used like this:
// <ClickablePicture img="/path/to/image1.jpg" imgClicked="/path/to/image2.jpg" />