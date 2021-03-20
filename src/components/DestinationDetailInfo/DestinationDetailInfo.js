import React, { useState } from "react";
import { useParams } from "react-router";
import PeopleIcon from "../../images/peopleicon.png";
import FakeData from "../FakeData/FakeData.json";
import GoogleMap from "../GoogleMap/GoogleMap";
import "./DestinationDetailInfo.css";

const DestinationDetailInfo = () => {
  const [destination, setDestination] = useState({
    pickFrom: "",
    pickTo: "",
  });
  const [form, setForm] = useState(true);
  const [display, setDisplay] = useState(false);
  const { rideType } = useParams();
  const ride = FakeData.find((rd) => rd.rideType === rideType);
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
      {form ? (
        <div className="row mt-3">
          <div className="col-md-4">
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
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-4">
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
              <ul class="list-group list-group-flush">
                <li class="list-group-item listStyle">
                  <span className="rideInfo">
                    <img className="rideImg" src={ride.img} alt="" />
                  </span>
                  <span className="rideInfo">{ride.rideType}</span>
                  <span className="rideInfo">
                    <img className="rideIcon" src={PeopleIcon} alt="" />
                    <span>{ride.capacity}</span>
                  </span>
                  <span className="rideInfo">${ride.rent}</span>
                </li>
                <li class="list-group-item listStyle">
                  <span className="rideInfo">
                    <img className="rideImg" src={ride.img} alt="" />
                  </span>
                  <span className="rideInfo">{ride.rideType}</span>
                  <span className="rideInfo">
                    <img className="rideIcon" src={PeopleIcon} alt="" />
                    <span>{ride.capacity}</span>
                  </span>
                  <span className="rideInfo">${ride.rent}</span>
                </li>
                <li class="list-group-item listStyle">
                  <span className="rideInfo">
                    <img className="rideImg" src={ride.img} alt="" />
                  </span>
                  <span className="rideInfo">{ride.rideType}</span>
                  <span className="rideInfo">
                    <img className="rideIcon" src={PeopleIcon} alt="" />
                    <span>{ride.capacity}</span>
                  </span>
                  <span className="rideInfo">${ride.rent}</span>
                </li>
              </ul>

              {/* <div className="rideBook">
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
              </div> */}
            </div>
          </div>
          <div className="col-md-8">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      )}
      <button
        onClick={() => setForm(!form)}
        onChange={() => setDisplay(true)}
        className="btn btn-outline-primary mr-5 buttonStyle"
      >
        Search
      </button>
    </div>
  );
};

export default DestinationDetailInfo;
