import React, { useState } from 'react';
import SingleBdays from './SingleBdays';
import { bddata } from './bddata.js';

const Birthdays = () => {
  const [birthdays, setBirthdays] = useState(bddata);

  // Remove all birthdays
  const handleRemoveAll = () => {
    if (birthdays.length > 0) {
      setBirthdays([]);
    } else {
      setBirthdays(bddata); // Refresh all birthdays
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-5 text-center">
          <h1 className="mb-5">{birthdays.length} Birthdays Today</h1>
          {birthdays.length > 0 ? (
            birthdays.map((item) => (
              <SingleBdays 
                key={item.id} 
                {...item} 
                onRemove={(id) => setBirthdays(birthdays.filter((item) => item.id !== id))} 
              />
            ))
          ) : (
            <p>No birthdays to display.</p>
          )}
          <button
            className={`btn w-100 mt-5 ${birthdays.length > 0 ? 'btn-danger' : 'btn-success'}`}
            onClick={handleRemoveAll}
          >
            {birthdays.length > 0 ? 'Remove All' : 'Refresh All'}
          </button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Birthdays;
