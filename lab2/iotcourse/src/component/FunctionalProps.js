import React from 'react';

const FunctionalProps = ({ name , age, location, occupation, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Occupation: {occupation}</p>
      <div>{children}</div>
    </div>
  );
};

export default FunctionalProps;