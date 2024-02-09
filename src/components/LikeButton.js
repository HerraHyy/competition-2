import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
        <button 
        style={{ backgroundColor: colors[21 % colors.length] }}
      >
        21 Likes
      </button>
      <button 
        onClick={handleClick} 
        style={{ backgroundColor: colors[likes % colors.length] }}
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;