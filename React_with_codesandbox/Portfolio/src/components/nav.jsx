import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import logo from "../assets/logo.png";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-8 lg:flex-row ">
        <div className="">
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <img
              src={logo}
              alt=""
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-700 p-1"
            />
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="text-white hover:bg-gray-700 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 rounded-full px-5 py-2 text-xl"
            >
              Pojects
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 rounded-full px-5 py-2 text-xl"
            >
              Testimonials
            </a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                size={30}
                onClick={closeMenu}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 size={30} onClick={openMenu} className="text-white" />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Projects
              </li>
              <li className="text-white text-xl mb-2 cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;
