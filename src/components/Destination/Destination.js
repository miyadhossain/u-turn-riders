import React from "react";

const Destination = ({ ride }) => {
  const { rideType, img, capacity, rent } = ride;
  return (
    <div>
      <h1>Hello Destinaiton</h1>
      <h3>Ride Type: {rideType}</h3>
      <img src={img} alt="" />
      <p>Capacity: {capacity}</p>
      <p>Rent: {rent}</p>
    </div>
  );
};

export default Destination;
