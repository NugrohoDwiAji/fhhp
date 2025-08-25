import React from "react";
import ButtonPrimary from "../elements/ButtonPrimary";
import axios from "axios";

export default function Header() {
  const handleLogout = async() => {
    try {
     await axios.post("/api/logout");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed right-0 top-0 left-0 flex justify-end items-center p-5 bg-white">
      <div className="flex items-center">
        <span className="mr-2 text-red-700 text-shadow-lg/10">Admin</span>
        <ButtonPrimary
          onClick={handleLogout}
          ClassName="bg-red-500 text-white p-2 rounded"
        >
          Log Out
        </ButtonPrimary>
      </div>
    </div>
  );
}
