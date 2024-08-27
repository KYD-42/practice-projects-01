import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Accordian from "./components/accordian";
import BackToTopButton from "./components/back-to-top";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
/* WIP */
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <main>
      {/* HomePage with links to components as pages, instead of a SPA with every component listed */}
      {/* WIP */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* Back to top button component */}
      <BackToTopButton />
      {/* Accordian component */}
      <Accordian />
      {/* Random Color component */}
      <RandomColor />
      {/* Star Rating component - without props */}
      {/* <StarRating /> */}
      {/* By default the number of stars is 5. In this case, since no props are passed, the default value is assigned */}
      {/* In the example bellow we pass props to the component changing the number of stars to 10 */}
      {/* This example is to show how props can be passed */}
      <StarRating noOfStars={5} />
      {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* Load more products component */}
      {/* WIP */}
      <LoadMoreData />
    </main>
  );
}

export default App;
