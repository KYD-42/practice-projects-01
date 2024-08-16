import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  /* this useState hook keeps track of the current slide */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  /* The async function is used to fetch the data from the API */
  /* The try catch block is used to handle the error in case the data is not fetched successfully */
  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    console.log("Left Arrow", currentSlide);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    console.log("Right Arrow", currentSlide);
  }

  /* console.log statement inside the useEffect hook checks if the data is fetched successfully */
  /* And logs "Images Successfuly fetched" to the console if true */

  useEffect(() => {
    if (url !== "")
      fetchImages(url).then(() => {
        console.log("Images Successfuly fetched");
      });
  }, [url]);

  /* This console.log serves as a preview of the fetched data */
  /* It logs the images array to the console, giving us a detailed view */
  console.log(images);

  if (loading) {
    console.log("Loading data...");
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    console.log(errorMsg);
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
