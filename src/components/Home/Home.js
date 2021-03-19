import React, { useEffect, useState } from "react";
import FakeData from "../FakeData/FakeData.json";
import Ride from "../Ride/Ride";
import "./Home.css";
const Home = () => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    setRides(FakeData);
  }, []);
  return (
    <div className="container">
      <div className="row backgroundStyle">
        <div className="col-md-12 justify-content-center">
          <div className="row justify-content-center">
            {rides.map((ride) => (
              <Ride ride={ride}></Ride>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
