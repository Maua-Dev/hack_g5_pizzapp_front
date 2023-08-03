  import React, { useState } from 'react';

const StarButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <button
      className={`star-button ${isClicked ? 'star-button-clicked' : ''}`}
      onClick={handleButtonClick}
    >
      ★
    </button>
  );
};

export default StarButton;
