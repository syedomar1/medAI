import React from 'react';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="left-section">
            <h1>medAI</h1>
            <h3>Empowering Communities:Your Trusted Medical AI Assistant</h3>
            <button className="btn btn-primary">Sign Up</button>
            <p>Get started with medAI today to revolutionize your medical practice.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-section">
            <img src="/logo2.png" alt="medAI Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
