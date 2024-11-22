import React from 'react';
import ReactLogo from '../assets/react.svg';

const CardReact = () => {
  return (
    <div className="container pt-6 max-w-[664px]">
      <div className="card mx-auto shadow-md" role="button">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={ReactLogo} className="card-img-left" alt="angular Logo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="text-uppercase text-primary font-weight-bold">
                Welcome to React Application
              </div>
              <h2 className="card-title mt-1 text-dark">
                This page is built in React framework
              </h2>
              <p className="card-text text-muted">
                This page, built using React and Single SPA, leverages React's
                component-based architecture for UI development and Single SPA's
                microfrontend framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReact;
