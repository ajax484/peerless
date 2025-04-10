import React from "react";
import Settings from "../assets/settings.svg";
import Users from "../assets/profile-2user.svg";
import Box from "../assets/box.svg";
import People from "../assets/people.svg";
import CardImage from "../assets/personalcardblack.svg";
import Cards from "../assets/personalcardblack.svg";
import MoneyReceive from "../assets/money-recive.svg";
import Data2 from "../assets/data-2.svg";
import ShieldSecurity from "../assets/shield-security.svg";
import Building4 from "../assets/building-4.svg";

const cards = [
  {
    label: "Nursing Assistant",
    image: Settings,
  },
  {
    label: "Nursing Assistant",
    image: Users,
  },
  {
    label: "Web Designer",
    image: Box,
  },
  {
    label: "Dog Trainer",
    image: People,
  },
  {
    label: "Nursing Assistant",
    image: CardImage,
  },
  {
    label: "Marketing Coordinator",
    image: Cards,
  },
  {
    label: "Marketing Coordinator",
    image: MoneyReceive,
  },
  {
    label: "Web Designer",
    image: Data2,
  },
  {
    label: "Medical Assistant",
    image: ShieldSecurity,
  },
  {
    label: "Marketing Coordinator",
    image: Building4,
  },
  {
    label: "Web Designer",
    image: ShieldSecurity,
  },
  {
    label: "President of Sales",
    image: People,
  },
];

const Card = ({ label, image }) => {
  return (
    <div
      //   role="button"
      className="bg-white p-6 flex flex-col gap-4 rounded-xl border border-[#f9f9f9] hover:bg-[#f9e9e9] hover:border-[#a93636] card hover:cursor-pointer group transition-colors duration-300"
    >
      <div className="bg-[#E8E8E8] rounded-full size-12 flex items-center justify-center group-hover:bg-[#f9e9e9]">
        <img src={image} className="size-6 card-svg" />
      </div>
      <h3 className="font-semibold text-[#1c1c1c] text-lg">{label}</h3>
      <p className="font-normal text-[#606060]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do elusmod
        tempor incididunt ut labore et delore...
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <section className="space-y-6">
      <section className="flex flex-col gap-2">
        <h1 className="font-semibold text-[32px] text-[#1C1C1C]">
          Hello, Eric Omotolani
        </h1>
        <h2 className="font-normal text-[#333333]">
          Welcome to your dashboard
        </h2>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card key={card.label} label={card.label} image={card.image} />
        ))}
      </section>
    </section>
  );
};

export default Home;
