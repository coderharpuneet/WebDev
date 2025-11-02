import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1761850648640-2ee5870ee883?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="" />
      <h1>{props.user}</h1>
      <p>Age: {props.age}</p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
