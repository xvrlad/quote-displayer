import React from 'react';

const AuthorCard = () => {
  return (
    <div className="flex m-24">
      <p className="flex-1 p-8 text-xl bg-light-brown">Author's Name Here</p>
      <button className="px-16 text-xl bg-dark-brown">See Quotes</button>
    </div>
  );
};

export default AuthorCard;
