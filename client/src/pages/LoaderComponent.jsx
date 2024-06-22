import React from 'react';


const LoaderComponent = () => {
  return (
    <div>
      <figure className="loader">
        <div className="car">
          <span className="body"></span>
          <span className="wheels"></span>
        </div>
        <div className="strikes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </figure>
    </div>
  );
};

export default LoaderComponent;
