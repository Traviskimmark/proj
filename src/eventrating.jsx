import React, { useState } from 'react';
import './EventRating.css'; // CSS for styling

const EventRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  }

  const stars = [1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      className={star <= rating ? 'star-filled' : ''}
      onClick={() => handleRating(star)}
    >
      ★
    </span>
  ));

  return (
    <div className="rating-container">
      <p>Rate this event:</p>
      {stars}
    </div>
  );
}

export default EventRating;
