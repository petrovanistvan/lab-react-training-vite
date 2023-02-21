import React from "react";



function BoxColor({ r, g, b }) {
    function valueToHex(c) {

        var hex = c.toString(16);
      
        return hex;
      
      }
    
    function rgbToHex(r, g, b) {
    
    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
    
    }
    rgbToHex(r, g, b);
    let colors = rgbToHex(r, g, b);
    for (let i = 0; i < 5; i++) {
      if (i > colors.length - 2) {
        colors += "0";
      }
    }
    return (
    <div className="containerColors" style={{ background: `rgb(${r},${g},${b})` }}>
        <p>rgb({r},{g},{b})</p>
        <p>#{colors}</p>
    </div>
  );
}

export default BoxColor;