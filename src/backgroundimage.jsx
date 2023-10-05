import React from 'react';

const BackgroundImage = () => {
  const imageUrl = '/home/traviskimmark/Downloads/aditya-chinchure-ZhQCZjr9fHo-unsplash (1).jpg';
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    height: '100vh', // Adjust the height based on your design
  };

  return <div style={style}></div>;
}

export default BackgroundImage;
