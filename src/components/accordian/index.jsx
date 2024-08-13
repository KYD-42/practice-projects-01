import { useState } from "react";
import data from "../accordian/data.js";
import "../accordian/styles.css";
// types of accordians
// single selection
// multiple selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  // function to handle single selection;
  // we will pass the id of the selected item;
  // the function is updated with the id of the selected item;
  // we create an if statement to check the selected state;
  // if the item is already selected we set the selected state to null - closing the accordian;
  // if the item is not selected we set the selected state to the id of the said item - opening the accordian;
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  // function to handle multiple selected items - we will pass the id of the selected item
  //
  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  // logging this state of the accordian so we can see the id of the selected item in our browser's console
  console.log(selected, multiple);
  // let's render the accrodian
  // the button component is used to enable multi selection, so that we can have multiple accordians open at the same time
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          if (enableMultiSelection) {
            setEnableMultiSelection(false);
          } else {
            setEnableMultiSelection(true);
          }
        }}
        className={enableMultiSelection ? "button-on" : "button-off"}
      >
        {enableMultiSelection ? "Multi Selection ON" : "Multi Selection OFF"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id || index} // add a unique key prop, preventing a warning in the console when no key is provided
              className={enableMultiSelection ? "item-multi" : "item-single"}
            >
              <div
                // we will pass the id of the selected item on click
                // the function is updated with the id of the selected item
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
