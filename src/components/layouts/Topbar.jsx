import React, { useEffect, useState } from "react";
import Search from "../../assets/Search.svg";
import Notification from "../../assets/Notification.svg";
import Building from "../../assets/building2.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import UserSquare from "../../assets/user-square.svg";

const branches = ["Victoria Island", "Surulere", "Ikoyi"];
const actions = ["View Profile", "Settings", "Logout"];

const Topbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  const formatDateTime = () => {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${dayOfWeek}, ${month} ${date}, ${year} ${hours}:${minutes}`;
  };

  useEffect(() => {
    setCurrentDateTime(formatDateTime());

    const interval = setInterval(() => {
      setCurrentDateTime(formatDateTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const [selectedBranch, setBranch] = useState("Ikoyi");
  const [branchDropDownIsOpen, setBranchDropdownOpen] = useState(false);
  const [actionsDropDownIsOpen, setActionsDropDownIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setBranchDropdownOpen(false);
      setActionsDropDownIsOpen(false);
    });
  }, []);

  return (
    <header className="bg-white border-b border-b-[#F0F0F0] py-4 px-8 inset-x-0 fixed top-0 ml-[280px] flex justify-between items-center z-10">
      <div className="relative w-fit">
        <img src={Search} className="absolute left-2 top-2 size-6" />
        <input
          type="text"
          placeholder="Search Parameters & Params"
          className="w-[250px] h-10 pl-12 pr-4 text-sm font-medium text-black bg-white border border-[#E8E8E8] rounded-xl placeholder:text-[#777777] placeholder:font-normal"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="divide-x-1 divide-[#D2D2D2] text-[#1C1C1C] text-sm font-normal">
          <span className="pr-2">{currentDateTime}</span>
          <span className="pl-2">
            <span className="font-medium">Business Date:</span>{" "}
            <span className="text-[#1C1C1C] text-sm">{currentDateTime}</span>
          </span>
        </div>
        <img src={Notification} className="size-9" />
        <div className="relative">
          <button
            className="flex items-center gap-1 bg-[#f4f4f4] p-2 rounded-2xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setBranchDropdownOpen(!branchDropDownIsOpen);
            }}
          >
            <img src={Building} className="size-5" />
            <span className="text-[#1C1C1C] text-sm">
              {selectedBranch} branch
            </span>
            <img src={ArrowDown} className="size-5" />
          </button>
          {/* drop down */}
          {branchDropDownIsOpen && (
            <div className="absolute -bottom-2 translate-y-full w-[220px] bg-white border border-[#f4f4f4] rounded-xl p-2">
              {branches.map((branch) => (
                <button
                  key={branch}
                  className={`flex items-center gap-2 p-3 hover:bg-[#f4f4f4] hover:cursor-pointer hover:bg-green-50 w-full rounded-lg ${
                    branch === selectedBranch ? "bg-green-100" : ""
                  }`}
                  onClick={() => setBranch(branch)}
                >
                  <img src={Building} className="size-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-[#1C1C1C] text-sm">
                      {branch} branch
                    </span>
                    <span className="text-[#8e8e8e] text-xs">Peer-123</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-1 bg-[#f4f4f4] p-2 rounded-2xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setActionsDropDownIsOpen(!actionsDropDownIsOpen);
            }}
          >
            <img src={UserSquare} className="size-5" />
            <span className="text-[#1C1C1C] text-sm">Eric Alawoya</span>
            <img src={ArrowDown} className="size-5" />
          </button>
          {actionsDropDownIsOpen && (
            <div className="absolute -bottom-2 translate-y-full w-[220px] bg-white border border-[#f4f4f4] rounded-xl p-2">
              {actions.map((action) => (
                <button
                  key={action}
                  className={`flex items-center gap-2 p-3 hover:bg-[#f4f4f4] hover:cursor-pointer hover:bg-green-50 w-full rounded-lg ${
                    action === selectedBranch ? "bg-green-100" : ""
                  }`}
                  onClick={() => setBranch(action)}
                >
                  <img src={UserSquare} className="size-5" />
                  <span className="text-[#1C1C1C] text-sm">{action}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
