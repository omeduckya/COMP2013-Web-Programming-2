import { useState } from "react";

export default function ColorBox({ color, colors }) {
  const [theBoxColor, setTheBoxColor] = useState(color);

  return (

    <div className="ColorBox" style={{ backgroundColor: theBoxColor }}
      onClick={() => {       
        const indexRandom = Math.floor(Math.random() * colors.length);
        const newBoxColor = colors[indexRandom];
        setTheBoxColor(newBoxColor);
      }}>
    </div>


  );
}