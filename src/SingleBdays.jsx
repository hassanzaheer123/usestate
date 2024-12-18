import React from 'react';

const SingleBdays = ({ id, name, age, img, onRemove }) => {
  return (
    <div className="d-flex mt-3 align-items-center">
      <img className="profile_img" src={img} alt={`${name}'s profile`} />
      <div className="name">
        <h2 className="ms-4">{name}</h2>
        <p className="ms-4">{age} years old</p>
      </div>
      <button 
        className="btn btn-danger h-50" 
        onClick={() => onRemove(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default SingleBdays;
