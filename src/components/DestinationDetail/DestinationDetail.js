import React, { useState } from "react";
import { useParams } from "react-router";
import PeopleIcon from "../../images/peopleicon.png";
import FakeData from "../FakeData/FakeData.json";
import GoogleMap from "../GoogleMap";
import "./DestinationDetail.css";

const DestinationDetail = () => {
  const [search, setSearch] = useState(false);
  const [destination, setDestination] = useState({
    pickFrom: "",
    pickTo: "",
  });
  const [display, setDisplay] = useState(false);
  const { rideType } = useParams();
  const ride = FakeData.find((rd) => rd.rideType === rideType);
  // console.log(ride);
  const handleBlur = (e) => {
    const value = e.target.value;
    setDestination({
      ...destination,
      [e.target.name]: value,
    });
    setDisplay(false);
  };

  return (
    <div className="container">
      <h1>Destinaiton</h1>
      <div className="">
        <div className="row">
          <div className="col-md-4 col-sm">
            <div className="searchDiv">
              <div style={{ padding: "30px" }}>
                <label className="text-light" htmlFor="">
                  Pick From
                </label>
                <input
                  value={destination.pickFrom}
                  name="pickFrom"
                  onChange={handleBlur}
                  className="form-control"
                  type="text"
                />
                <label className="text-light" htmlFor="">
                  Pick To
                </label>
                <input
                  value={destination.pickTo}
                  name="pickTo"
                  onChange={handleBlur}
                  className="form-control"
                  type="text"
                />
                <label className="text-light" htmlFor="">
                  Check In
                </label>
                <input onBlur={handleBlur} type="date" name="" id="" />
                <label className="text-light" htmlFor="">
                  Check Out
                </label>
                <input onBlur={handleBlur} type="date" name="" id="" />
                <button
                  onChange={() => setSearch(!search)}
                  onClick={() => setDisplay(true)}
                  className="btn btn-outline-primary mx-auto d-block"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-sm">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>
      {display && (
        <div
          className="destinationInfo mx-auto mt-5"
          style={{ width: "18rem" }}
        >
          <div id="timeline-content">
            <ul className="timeline">
              <li className="event">
                <h5 className="destTitle">{destination.pickFrom}</h5>
              </li>
              <li className="event">
                <h5 className="destTitle">{destination.pickTo}</h5>
              </li>
            </ul>
          </div>
          <div className="rideBook">
            <div>
              <span className="rideInfo">
                <img className="rideImg" src={ride.img} alt="" />
              </span>
              <span className="rideInfo">{ride.rideType}</span>
              <span className="rideInfo">
                <img className="rideIcon" src={PeopleIcon} alt="" />
                <span>{ride.capacity}</span>
              </span>
              <span className="rideInfo">${ride.rent}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
