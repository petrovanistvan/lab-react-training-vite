import React from "react";

function Rating({ children }) {

console.log(Math.round(children));
let rating = "";
    for (let i = 0; i < 5; i++) {
        if (i < Math.round(children)) {
            rating += "★";
        } else {
            rating += "☆";
        }
    }
    return (
    <div className="creditCardContainer">
        <p>{rating}</p>
    </div>
  );
}

export default Rating;

// (☆), and some should be filled (★).