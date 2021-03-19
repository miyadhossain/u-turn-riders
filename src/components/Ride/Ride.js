import React from "react";
import { useHistory } from "react-router";
import "./Ride.css";

const Ride = ({ ride }) => {
  const { rideType, img, capacity } = ride;
  const history = useHistory();
  const handleRide = (rideType) => {
    history.push(`/destination/${rideType}`);
  };
  return (
    <div
      onClick={() => handleRide(ride.rideType)}
      className="card cardCustom"
      style={{ width: "18rem", margin: "30px" }}
    >
      <img className="icon mx-auto d-block" src={img} alt="" />
      <div className="card-body text-center">
        <p>Ride Type: {rideType}</p>
        <p>Capacity: {capacity}</p>
      </div>
    </div>
  );
};

export default Ride;
