import React from "react";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    function maskify(number) {
        return number.slice(0, -4).replace(/./g, '•') + number.slice(-4);
      }

    let maskedNumber = maskify(number);

    return (
    <div className="creditCardContainer" style={{ backgroundColor: `${bgColor}`, color: `${color}`  }}>
        <div>
        <p className="type">{type}</p>
        <p>{maskedNumber}</p>
        </div>
        <div className="flex">
        <p>Expires {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p>
        </div>
        <p className="owner">{owner}</p>
    </div>
  );
}

export default CreditCard;