import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import IconInfo from "./IconInfo";
import "./Header.css";
const Header = () => {
  return (
    <header className="py-2 px-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <IconInfo Icon={<IoMdCall />} text="+91 9579752006 / 9867637672" />
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0 d-flex justify-content-end">
          <IconInfo Icon={<MdEmail />} text="advaitinformationsolutions2@gmail.com" />
        </div>
      </div>
    </header>
  );
};

export default Header;
