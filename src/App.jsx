import "./App.css";
import Accordian from "./components/accordian";
import BackToTopButton from "./components/back-to-top";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <main>
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
      {/* <LoadMoreData /> */}
    </main>
  );
}

export default App;
