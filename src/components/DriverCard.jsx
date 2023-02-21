import React from "react";
import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {

    return (
    <div className="driverCardContainer">
    <div className="imageDisplay">
        <img src={img} alt=""></img>
    </div>
    <div>
    <p>{name}</p>
    <Rating>
        {rating}
    </Rating>
        <p>{car.model} - {car.licensePlate}</p>
    </div>
    </div>
  );
}

export default DriverCard;