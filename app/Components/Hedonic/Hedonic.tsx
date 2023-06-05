'use client'

import { useState, ChangeEvent } from 'react';

const Hedonic = () => {
  const [rating, setRating] = useState<number>(5); // Initial rating value

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  let ratingText: string = `I neither like it, or dislike it`;
  let ratingColor: string = 'blue';

    if (rating === 1) {
        ratingText = 'I hate it';
        ratingColor = 'red-700';
    } if (rating === 2) {
        ratingText = `I don't like it`;
        ratingColor = 'red-700'
    } if (rating === 3) {
        ratingText = `I'll Finish it, but I won't order it again`;
        ratingColor = 'yellow-500';
    } if (rating === 4) {
        ratingText = `It's okay`;
        ratingColor = 'secondary-900'
    } if (rating === 5) {
        ratingText = `I neither like it, or dislike it`;
        ratingColor = 'black-500'
    } if (rating === 6) {
        ratingText = `I would order it again`;
        ratingColor = 'secondary-500'
    } if (rating === 7) {
        ratingText = `I like it`;
        ratingColor = 'success-300'
    } if (rating === 8) {
        ratingText = `I love it`;
        ratingColor = 'Success-600'
    } if (rating === 9) {
        ratingText = `It's now my favorite beer`;
        ratingColor = 'primary-600'
    }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Rate the Beer</h1>
      <p className={`font-bold ${ratingColor}`}>{ratingText}</p>
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between text-xs w-full px-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <input
          type="range"
          min={1}
          max="9"
          value={rating}
          className="range"
          step="1"
          onChange={handleRatingChange}
        />
      </div>
      <p className="text-gray-500 mt-2">
        Drag the slider to rate the beer (1-9).
      </p>
    </div>
  );
};

export default Hedonic;