import React from "react";

export default function Subscription() {
  return (
    <div className="subscription">
      <form action="">
        <div className="labelInput">
          <p>Min Subscription Length</p>

          <label className="cursor" htmlFor="month_id1">
            1 Month
          </label>
          <input className="hidingRadio" type="radio" name="min_length" id="month_id1" />

          <label className="cursor" htmlFor="month_id2">
            6 Month
          </label>
          <input className="hidingRadio" type="radio" name="min_length" id="month_id2" />
        </div>

        <div className="labelInput">
          <p>Miles per month</p>

          <label className="cursor" htmlFor="mile_id1">
            800
          </label>
          <input className="hidingRadio" type="radio" name="milesPerMonth" id="mile_id1" />

          <label className="cursor" htmlFor="mile_id2">
            1000
          </label>
          <input className="hidingRadio" type="radio" name="milesPerMonth" id="mile_id2" />

          <label className="cursor" htmlFor="mile_id3">
            1200
          </label>
          <input className="hidingRadio" type="radio" name="milesPerMonth" id="mile_id3" />
        </div>
        <div className="date">
          <p>Delivery Date</p>
          <p>
            <label htmlFor="date">date:</label>
          </p>
          <input type="date" name="" id="date" />
        </div>

        <div className="buttonParent">
          <button className="cursor">Book Now</button>
        </div>
      </form>
    </div>
  );
}
