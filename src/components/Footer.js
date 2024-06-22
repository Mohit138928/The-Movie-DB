import React from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-center mt-4 font-serif">
        Created By_{" "}
        <Link to="https://github.com/Mohit138928" target="_blank">
          Mohit Maurya
        </Link>
        <FaHeart className="text-red-600 m-1" />
      </div>
    </>
  );
}

export default Footer;
