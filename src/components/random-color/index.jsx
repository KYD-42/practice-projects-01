import { useEffect, useState } from "react";
import "../random-color/styles.css";
export default function RandomColor() {
  // we'll be creating 2 set states - one for the type of color code (HEX or RGB);
  // and the second one to store the current color;

  // this one is the type of color code - default is set to HEX;
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // this one is the current color shown - default is set to black;
  const [color, setColor] = useState("#000000");

  // function to mathmatically generate a random number with the given length;
  // this work as a utility function (a small engine) keeping the code clean;
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // GENERATE RANDOM HEX COLOR FUNCTION;
  function handleCreateRandomHexColor() {
    // an hex color code starts with # and is 6 characters long (numbers and letters);
    // ranging from 0-9 and A-F;
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // logging the color code to the console for testing purposes;
    console.log(hexColor);

    // updating the color state with the new color code;
    setColor(hexColor);
  }

  // GENERATE RANDOM RGB COLOR FUNCTION;
  function handleCreateRandomRgbColor() {
    // an rgb color code is composed of 3 sets of numbers separated by commas;
    // each one ranging from 0-256;
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        {/* button to switch type of color code */}
        <button
          id="switch-btn"
          onClick={() => {
            if (typeOfColor === "hex") {
              setTypeOfColor("rgb");
            } else {
              setTypeOfColor("hex");
            }
          }}
          className={typeOfColor === "hex" ? "hex" : "rgb"}
        >
          {typeOfColor === "hex" ? "HEX Generator" : "RGB Generator"}
        </button>

        {/* button to generate random color */}
        <button
          id="random-btn"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div>
        {/* unecessary info - commented out */}
        {/* <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3> */}
        <h1>{color}</h1>
      </div>
    </div>
  );
}
