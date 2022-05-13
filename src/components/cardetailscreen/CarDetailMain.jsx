import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Subscription from "./Subscription";
import axios from "axios";

export default function CarDetailMain(props) {
  const { id } = useParams();
  const [car, setCar] = useState({});

  const getCar = async () => {
    await axios

      .get("https://627cfe98bf2deb7174e560df.mockapi.io/cars/"+id)

      .then((response) => {
        setCar(response.data);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCar();
  }, []);
  return (
    <div className="carDetailsContainer">
      {console.log(id, car)}
      <div className="carDetailsCard">
        <span>
          {"Browse Cars > "+ car.name + " " + car.useable_Battery}
        </span>
        <div className="availableFrom">
          <p>available from</p>
          <p>{car.available_from}</p>
        </div>
        <img style={{ width: "80%", height: "70%" }} src={car.imgUrl} alt="" />
        <div className="parent">
          <div className="children-1">
            <div className="grandchild-1">
              <p>Range</p>
              <p>{car.realRange}</p>
              <p>Real World</p>
            </div>
            <div className="grandchild-2">
              <p>Charging</p>
              <p>max. speed</p>
              <p>{car.charging}</p>
            </div>
          </div>
          <div className="children-2">
            <div>{car.numberOfSeats + " seats"}</div>
            <div>{car.numberOfDoors + " doors"}</div>
            <div>{car.dummyColumn}</div>
            <div>{car.color}</div>
            <div>{car.maxSpeed}</div>
          </div>
        </div>
      </div>
      <div className="carDetailsCard">
        <div className="booking">
          <div className="booking_text">
            {car.year + " " + car.name + " " + car.useable_Battery}
          </div>
        </div>
        <Subscription />
      </div>
    </div>
  );
}
