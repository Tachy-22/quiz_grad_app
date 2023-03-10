import React from "react";
import Logo from "../img/QuizLogoLarge.JPG";
import { TextBoxContainer } from "../StyledComonents/TextBox.style";
import { Textbox } from "../StyledComonents/TextBox.style";
import { Link } from "react-router-dom";
import { Button1, Button2 } from "../StyledComonents/Button.style";
import { P, P2 } from "../StyledComonents/Typography";
import LoginImg from "../img/DrawKit Vector Illustration Team Work (19).svg";
import LoginImg2 from "../img/DrawKit Vector Illustration Team Work (14).svg";
import { Background } from "../StyledComonents/Background.style";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const auth = getAuth(app);
  const [userState, setUserState] = useState(null);
  const [chooseTopic, setChooseTopic] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  // signup code
  const signUp = () => {
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        alert("successfully created an acount");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);

        // ...
      });
  };

  //login code
  const signIn = () => {
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        navigate("/home");
        if (user) {
          console.log("User Signed In");
          setUserState(user.email);
          console.log("userState", userState);
        }
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Credentials", errorCode, errorMessage);
        console.log(errorMessage);
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          alert("Check your internet connectiona and try again");
        }
      });
  };

  const handleChangePassword = (event) => {
    setPasswordInput(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmailInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setChooseTopic(!chooseTopic);
  };

  return (
    <>
      <Background>
        <div className="flex flex-row  min-h-screen">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center  space-y-16 bg-white  md:w-1/2 w-full  lg:px-32 px-10 "
          >
            <div className="flex flex-col">
              <img src={Logo} alt="Logo"></img>
              <div className="flex flex-col justify-center items-center text-center text-2xl font-semibold">
                <P>Welcome back!</P>
                <P>Please login/Sign up to your account.</P>
              </div>
            </div>

            <TextBoxContainer>
              <label for="email">Email:</label>
              <Textbox
                id="email"
                placeholder="Enter your email"
                type="emal"
                value={emailInput}
                onChange={handleChangeEmail}
              />
              <label for="password">password:</label>
              <Textbox
                id="password"
                placeholder="Enter your password"
                type="password"
                value={passwordInput}
                onChange={handleChangePassword}
              />
            </TextBoxContainer>
            <div className="flex justify-between">
              <div className="space-x-3 flex items-center">
                <input
                  className="w-4 h-4"
                  name="remember"
                  type="checkbox"
                  id="remember"
                />
                <label for="remember">Remember me</label>
              </div>

              <Link>Forgot password?</Link>
            </div>
            <div className="flex  space-x-6">
              <Button1 onClick={signIn}>Login</Button1>
              <Button2 onClick={signUp}>Sign up</Button2>
            </div>
            <div className="flex space-x-8">
              <P2> Or login with</P2>
              <Link>Facebook</Link>
              <Link>Google</Link>
            </div>
          </form>
          <picture className=" md:flex flex-col w-1/2 hidden justify-center">
            <img className="w-full " src={LoginImg} alt="loginImg"></img>
          </picture>
        </div>
      </Background>
    </>
  );
}

export default LoginPage;
