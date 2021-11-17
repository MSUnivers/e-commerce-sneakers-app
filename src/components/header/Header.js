import React from "react";
import logo from "../../images/logo.svg";
import shoppingcart from "../../images/shoppingcart.svg";
import avatar from '../../images/image-avatar.png';

export default function Header() {
  return (
    <div className="w-full bg-white-200 flex justify-around p-6 h-20 bg-primaryOrange ">
      <div className="justify-self-start flex  justify-around w-6/12">
        <img className="h-6" src={logo} alt="logo" />
        <nav className="items-center w-6/12">
          <ul className="w-full flex justify-around   text-gray-600 ">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div> 
      <div className="justify-self-end w-1/12 flex justify-around items-center ">
        <button>
          <img className="h-8 w-8 " src={shoppingcart} alt="cart" />
        </button>
        <button><img className="h-10 w-10"  src={avatar} alt="avatar" /></button>
      </div>
    </div>
  );
}
