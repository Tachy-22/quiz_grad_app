import React, { useState } from "react";
import { SelectionContainer } from "../StyledComonents/Background.style";
import { Button1 } from "../StyledComonents/Button.style";
import { H2, P2 } from "../StyledComonents/Typography";
import { Categories } from "./QuestionCategories";
import Close from "../img/icons8-close-window-50(1).png";
import { useNavigate } from "react-router";

function SelectionPopUp() {
  const navigate = useNavigate();
  const [stateArray, setStateArray] = useState([]);
  const [newCategories, setNewCategories] = useState(Categories);

  //

  //

  //

  const handleSelect = (index, category, categoryState) => {
    const updatedCategories = newCategories.map((object) => {
      if (object.id === index) {
        return { ...object, state: !categoryState };
      }
      return object;
    });

    setNewCategories(updatedCategories);
  };

  //

  //

  //
  const handleQuizStart = () => {
    console.log("newcategories", newCategories);
    const selctedCategories = newCategories.filter(
      (category) => category.state === true
    );
    setStateArray(selctedCategories);
  };

  //

  //

  //

  //console.log("category2", stateArray);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("stateArray", stateArray);
    navigate("/home/questionAnsweringPage", { state: stateArray });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center pt-20 ">
        <SelectionContainer>
          <H2>Choose your favourite topic</H2>
          <P2>Select more than 5 topics to start</P2>

          <div className="flex max-w-full flex-wrap ">
            {newCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSelect(index, category, category.state);
                  }}
                  className={
                    category.state
                      ? " bg-yellow-400 w-52 h-14 m-3 flex justify-between items-center"
                      : "bg-gray-400 w-52 h-14 m-3 flex justify-between items-center"
                  }
                >
                  <h1 className="font-semibold text-center w-full">
                    {" "}
                    {category.cat}
                  </h1>
                  {category.state && (
                    <img className="h-full bg-white" src={Close} alt="close" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="absolute right-0 bottom-0 m-16">
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <Button1
                onClick={() => {
                  handleQuizStart();
                }}
              >
                Start Quiz
              </Button1>
            </form>
          </div>
        </SelectionContainer>
      </div>
    </>
  );
}

export default SelectionPopUp;
