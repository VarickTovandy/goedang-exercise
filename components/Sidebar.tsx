import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faShoppingCart,
  faCheck,
  faCog,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-[7%] bg-[#4882C3] flex flex-col items-center justify-between h-[100vh]">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl text-center">TIM</h1>
        <a href="/" className="my-4 text-white hover:text-gray-300 h-8 w-8">
          <FontAwesomeIcon icon={faHome} />
        </a>
        {/* <a
          href="/about"
          className="my-4 text-white hover:text-gray-300 h-8 w-8"
        >
          <FontAwesomeIcon icon={faBox} />
        </a>
        <a
          href="/contact"
          className="my-4 text-white hover:text-gray-300 h-8 w-8"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
        <a
          href="/another-page"
          className="my-4 text-white hover:text-gray-300 h-8 w-8"
        >
          <FontAwesomeIcon icon={faCheck} />
        </a> */}
      </div>
      <div className="flex flex-col">
        <a href="/settings" className="my-4 text-white hover:text-gray-300 h-8 w-8">
          <FontAwesomeIcon icon={faCog} />
        </a>
        <a href="/login" className="my-4 text-white hover:text-gray-300 h-8 w-8">
          <FontAwesomeIcon icon={faSignInAlt} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
