import React from "react";
import { useParams } from "react-router";
import Destination from "../Destination/Destination";
import FakeData from "../FakeData/FakeData.json";

const DestinationDetail = () => {
  const { rideType } = useParams();
  const ride = FakeData.find((rd) => rd.rideType === rideType);
  console.log(ride);
  return (
    <div>
      <Destination ride={ride}></Destination>
    </div>
  );
};

export default DestinationDetail;
