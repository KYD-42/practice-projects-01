import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../star-rating/styles.css";

/* In the example bellow we pass props to the component assigning the default value of 5 */
/* This example is to show how props can be passed when we call the component in the html - app.jsx */

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleReset() {
    setRating(0);
    setHover(0);
  }

  function message(rating) {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Decent";
      case 3:
        return "Good";
      case 4:
        return "Very Good";
      case 5:
        return "Excellent";
      case 6:
        return "Behond hotel rating";
      case 7:
        return "Lucky Stars";
      case 8:
        return "Heavenly";
      case 9:
        return "Perfection";
      case 10:
        return "Flawless";
      default:
        return rating > 10
          ? "Ups, you've created a galaxy far away..."
          : "Rate us!"; // Or any other default message
    }
  }

  return (
    <section className="star-rating">
      <div>
        <h1
          style={{
            color: rating > 10 ? "black" : "#FFB300",
            fontWeight: rating > 10 ? "normal" : "bold",
            fontSize: rating > 10 ? "2em" : "4em" /* 1em -> 24px */,
          }}
        >
          {message(rating)}
        </h1>
      </div>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={200}
              style={{ cursor: "pointer" }}
              /* already in the css file - inline styling of the state of the stars component */
              /* color={index <= (hover || rating) ? "#FFB300" : "#808080"} */
            />
          );
        })}
      </div>
      <div>
        <button className="reset-btn" onClick={handleReset}>
          RESET
        </button>
      </div>
    </section>
  );
}
