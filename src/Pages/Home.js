import SelectionPopUp from "../Components/SelectionPopUp";
import { HeaderContainer } from "../StyledComonents/Header.styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import QustionAnsweringPage from "./QustionAnsweringPage";
import HomeHeader from "../Components/HomeHeader";

function Home(props) {
  const [userEmail, setUserEmail] = useState();
  const [startQuiz, setStartQuiz] = useState(false);

  const handleQuizStart = () => {
    alert("Quiz Started");
    setStartQuiz(true);
  };

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserEmail(user.email);

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  if (startQuiz) {
    return <QustionAnsweringPage />;
  }

  return (
    <>
      <HeaderContainer>
        <HomeHeader userEmail={userEmail} />
      </HeaderContainer>
      <SelectionPopUp handleQuizStart={handleQuizStart} />
      {/* select={select} setSelect={setSelect} */}
    </>
  );
}

export default Home;
