import React, { useState } from "react";
import data from "./data";
// types of accordians
// single selection
// multiple selection

export default function Accordian() {
  // setting the state of the accordian to null by default
  const [selected, setSelected] = useState(null);

  // function to handle single selection;
  // we will pass the id of the selected item;
  // the function is updated with the id of the selected item;
  // we create an if statement to check the selected state;
  // if the item is already selected we set the selected state to null - closing the accordian;
  // if the item is not selected we set the selected state to the id of the said item - opening the accordian;
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // logging this state of the accordian so we can see the id of the selected item in our browser's console
  console.log(selected);
  // let's render the accrodian
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                // we will pass the id of the selected item on click
                // the function is updated with the id of the selected item
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
