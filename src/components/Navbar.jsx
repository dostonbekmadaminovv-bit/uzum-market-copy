import React from "react";
import UzumLogo from "../assets/images/uzum_logo.png";
function Navbar({ showModal }) {
  return (
    <nav className="flex justify-between items-center w-full max-w-300 mx-auto">
      <a href="/">
        <img className="w-40 " src={UzumLogo} alt="Uzum Logo" />
      </a>
      <button
        onClick={() => showModal()}
        className="bg-[#7000ff] text-white px-10 py-3 rounded-2xl cursor-pointer "
      >
        Add Product
      </button>
    </nav>
  );
}

export default Navbar;
