import React from "react";
import logo from "../../assets/logo.svg";
import first from "../../assets/category.svg";
import second from "../../assets/building.svg";
import third from "../../assets/personalcard.svg";
import fourth from "../../assets/card.svg";
import fifth from "../../assets/chart.svg";
import sixth from "../../assets/document-text.svg";
import seventh from "../../assets/settings.svg";
import eighth from "../../assets/programming-arrows.svg";
import InfoCircle from "../../assets/info-circle.svg";
import Logout from "../../assets/logout.svg";
import { Link } from "react-router";

const links = [
  {
    label: "Nintendo",
    logo: first,
  },
  {
    label: "IBM",
    logo: second,
  },
  {
    label: "The Walt Disney Company",
    logo: third,
  },
  {
    label: "Louis Vuitton",
    logo: fourth,
  },
  {
    label: "MasterCard",
    logo: fifth,
  },
  {
    label: "Pizza Hut",
    logo: sixth,
  },
  {
    label: "MasterCard",
    logo: seventh,
  },
  {
    label: "Bank of America",
    logo: eighth,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed w-[280px] h-screen bg-black flex flex-col">
      <div className="py-6 border-b border-b-[#393939] px-6">
        <img src={logo} className="w-[150px] h-[60px]" />
      </div>
      <nav className="py-3">
        <ul className="flex flex-col p-3 space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={"/form"}>
                <div
                  className={`font-medium flex items-center gap-2 text-white text-sm p-3 rounded-xl ${
                    link.label === "Nintendo"
                      ? "bg-[#A93636]"
                      : "bg-transparent hover:bg-green-900"
                  }`}
                >
                  <img src={link.logo} className="size-6" />
                  <span>{link.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-1 mt-auto">
        <div
          className={`font-medium flex items-center gap-2 text-white text-sm p-3 rounded-xl `}
        >
          <img src={InfoCircle} className="size-6" />
          <span>IBM</span>
        </div>
        <div
          className={`font-medium flex items-center gap-2 text-white text-sm p-3 rounded-xl `}
        >
          <img src={Logout} className="size-6" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
