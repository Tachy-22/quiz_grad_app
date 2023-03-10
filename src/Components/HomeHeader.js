import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import UserAvatar from "../img/Basic_Ui_(186).jpg";

function HomeHeader({ userEmail }) {
  return (
    <>
      <Header />
      <div className="flex flex-col  items-center">
        <picture className=" w-16 h-full py-2 flex flex-col justify-center items-center bg-gray-300 rounded-full">
          <img
            className="w-12 rounded-full "
            src={UserAvatar}
            alt="userAvatar"
          />
        </picture>
        <Link>{userEmail}</Link>
      </div>
    </>
  );
}

export default HomeHeader;
