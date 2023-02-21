import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  console.log(birth)
    return (
    <div className="container">
    <img src={picture} alt=""></img>
    <ul className="list">
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height/100}m</li>
        <li>Birth: {birth.toString()}</li>
    </ul>
    </div>
  );
}

export default IdCard;