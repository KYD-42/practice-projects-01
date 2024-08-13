import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../back-to-top/styles.css";

const BackToTopButton = () => {
  // A simple log to print out if the component is rendered, there's no need to create a try-catch block in this component
  console.log("Back to top component rendered");

  // A state to control the visibility of the button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp style={{ fontSize: "24px", color: "white" }} />
    </button>
  );
};

export default BackToTopButton;
