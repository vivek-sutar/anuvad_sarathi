import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "./header.css";
const Header = () => {
  return (
    <header class="py-2">
      <div className="container-fluid  d-flex flex-wrap justify-content-between">
        <div className="left d-flex align-items-center">
          <div className="header-cons  d-flex justify-content-center align-items-center">
            <IoMdCall />
          </div>
          <div className="m-0 ms-2 call-info">+91 9579752006 / 9867637672</div>
        </div>
        <div className="right d-flex align-items-center">
          <div className="header-cons  d-flex justify-content-center align-items-center">
            <MdEmail />
          </div>
          <div className="m-0 ms-2 call-info">
            advaitinformationsolutions2@gmail.com
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
