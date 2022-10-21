import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = () => {
  const [quote, setQuote] = useState('');

  // useEffect(() => {
  //   axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random').then(() => {
  //     setQuote = data.
  //   });
  // });

  return (
    <div className="flex m-24 p-24 justify-center bg-cream">
      <p className="p-24 text-2xl">Quote Here{quote}</p>
    </div>
  );
};

export default Card;
