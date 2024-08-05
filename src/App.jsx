import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* Random Color component */}
      <RandomColor />
      {/* Star Rating component */}
      <StarRating />
      {/* By default the number of stars is 5. In this case, since no props are passed, the default value is assigned */}
      {/* In the example bellow we pass props to the component changing the number of stars to 10 */}
      {/* This example is to show how props can be passed */}
      {/* <StarRating noOfStars={10}/> */}
    </div>
  );
}

export default App;
