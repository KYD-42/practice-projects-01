import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../back-to-top/styles.css";

const BackToTopButton = () => {
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
