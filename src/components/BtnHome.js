import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const BtnHome = () => {
  return (
    <div className="p-4 rounded-full bottom-5 right-5 fixed bg-third">
      <Link to="/">
        <AiFillHome size={25} />
      </Link>
    </div>
  );
};

export default BtnHome;
