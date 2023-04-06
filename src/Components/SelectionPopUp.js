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
      <div className="w-screen h-screen flex flex-col justify-center     items-center pt-20 ">
        <SelectionContainer className="">
          <H2 className="text-center w-4/5">Choose your favourite topic</H2>
          <P2 className="text-center">Select more than 5 topics to start</P2>

          <div className="grid max-w-full md:grid-cols-3 grid-cols-1   overflow-y-scroll ">
            {newCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSelect(index, category, category.state);
                  }}
                  className={`${
                    !category.state ? "bg-gray-400" : "bg-yellow-400"
                  } w-52 h-14 m-3 flex justify-between items-center transition-all delay-300`}
                >
                  <h1 className="font-semibold text-center w-full">
                    {category.catName}
                  </h1>
                  {category.state && (
                    <img
                      className="h-full bg-white transition-all delay-300"
                      src={Close}
                      alt="close"
                    />
                  )}
                </div>
              );
            })}
            <div className="md:fixed  right-0 bottom-0 md:m-5 m-auto">
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
          </div>
        </SelectionContainer>
      </div>
    </>
  );
}

export default SelectionPopUp;
