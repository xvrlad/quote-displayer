import React, { useState } from 'react';

const Card = () => {
  const [quote, setQuote] = useState('');

  return (
    <div className="flex m-24 p-24 items-center bg-lime-200">
      <p className="flex-1 p-24 items-center justify-center">{quote}</p>
    </div>
  );
};

export default Card;
