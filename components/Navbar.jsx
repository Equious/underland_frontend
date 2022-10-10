import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-lg shadow-gray-500 z-[100]">
      <div className=" bg-gradient-to-r from-pink-600 via-green-300 to-purple-600 flex justify-evenly items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              alt="/"
              className="hover:cursor-pointer hover:scale-105"
              src="/eq-favicon.ico"
              width="75"
              height="65"
            />
          </a>
        </Link>
        <div className="pl-[12rem]">
          <p className="font-bold text-black text-4xl">Welcome to Underland</p>
        </div>
        <div>
          <ul className="hidden md:flex">
            <ConnectWallet />
            {/* <button onClick={connectWallet} className="">
              Connect your wallet
            </button> */}
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} className="hover:cursor-pointer" />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-teal-400 p-10 ease-in duration-500"
              : "fixed left-[-175%] top-0 p-10 ease-in duration-500"
          }
        >
          {/*Mobile Menu*/}
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    className="hover:cursor-pointer hover:scale-105"
                    src="/eq-favicon.ico"
                    width="55"
                    height="45"
                    alt="/"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="bg-white rounded-full shadow-lg shadow-gray-700 p-[10px] cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="text-[10px] font-bold border-b my-6">
              <p>You are late...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
