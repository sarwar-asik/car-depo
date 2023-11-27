import React, { useState } from "react";
import { HiBookmark, HiChartBar, HiMenu } from "react-icons/hi";
// import { BiFilterLeft, BiAppIndicator, BiSearch, BiHouseDoorFill, BiBookmarkFill, BiChatLeftTextFill, BiBoxArrowInRight, BiChevronDown, BiX } from 'react-icons/bi';

// import {BiFilterLeft, BiAppIndicator, BiSearch, BiHouseDoorFill, BiBookmarkFill, BiChatLeftTextFill, BiBoxArrowInRight, BiChevronDown, BiX} from "react-icons/bi"
// import { BiFilterLeft,BiAppIndicator,BiX,BiSearch } from "react-icons/bi";
// import { BiMenu } from 'react-icons/bi';

const DashBoardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  return (
    <div>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900
        //////  ${ isSidebarOpen ? "" : "hidden" } ////
         `}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <button
              className="text-white text-4xl top-5 left-4 cursor-pointer"
              onClick={toggleSidebar}
            >
              <HiMenu />
            </button>
            <button className="px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
             Car Depo
            </h1>
            <button
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={toggleSidebar}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
    
      
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          {/* <BiBookmarkFill /> */}
          <HiBookmark />

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Bookmark
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={toggleSubMenu}
        >
          {/* <BiChatLeftTextFill /> */}
          <HiChartBar />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span className="text-sm" id="arrow">
              {/* <BiChevronDown className={isSubMenuOpen ? 'rotate-0' : 'rotate-180'} /> */}
              <HiBookmark
                className={isSubMenuOpen ? "rotate-0" : "rotate-180"}
              />
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            isSubMenuOpen ? "" : "hidden"
          }`}
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          {/* <BiBoxArrowInRight /> */}

          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
