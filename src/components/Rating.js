import React from 'react';

const Rating = ({ children }) => {
  const roundedValue = Math.round(children);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundedValue) {
      stars.push(<span key={i}>&#9733;</span>); // filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // empty star
    }
  }

  return <div>{stars}</div>;
};

export default Rating;

// use html entities to display stars &#9733; and &#9734;

// this component can be used like this: <Rating>{3.7}</Rating> <- this will display 4 stars out of 5
