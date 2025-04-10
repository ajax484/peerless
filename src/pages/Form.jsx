import React from "react";
import Category from "../assets/categorygray.svg";
import ArrowRight from "../assets/arrow-right.svg";
import UserOctagon from "../assets/user-octagon.svg";
import ThreeDCube from "../assets/3dcube.svg";
import InfoCircle from "../assets/info-circle-gray.svg";

const Form = () => {
  return (
    <section className="space-y-8">
      <section className="flex flex-col gap-2">
        <h1 className="font-semibold text-[32px] text-[#1C1C1C]">Nitendo</h1>
        <div className="flex items-center gap-2">
          <img src={Category} className="size-6" />
          <span className="text-[#8e8e8e] text-sm">Dashboard</span>
          <img src={ArrowRight} className="size-5" />
          <img src={UserOctagon} className="size-6" />
          <span className="text-[#8e8e8e] text-sm">Nintendo</span>
          <img src={ArrowRight} className="size-5" />
          <img src={ThreeDCube} className="size-5" />
          <span className="text-[#1c1c1c] text-sm">New Murabaha Financing</span>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex justify-center gap-4 font-medium">
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 text-sm flex items-center justify-center bg-[#a93636] text-white rounded-full">
              1
            </div>
            <span className="text-[#a93636] text-xs">2 weeks ago</span>
          </div>
          <div className="h-0.5 w-12 bg-[#e8e8e8] mt-[16px]" />
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 text-sm flex items-center justify-center bg-[#f9f1f1] text-[#a93636] border border-[#a93636] rounded-full">
              2
            </div>
            <span className="text-[#a93636] text-xs">1 month ago</span>
          </div>
          <div className="h-0.5 w-12 bg-[#e8e8e8] mt-[16px]" />
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 text-sm flex items-center justify-center bg-[white] rounded-full border border-[#8e8e8e] text-[#8e8e8e]">
              3
            </div>
            <span className="text-[#8e8e8e] text-xs">5 hours ago</span>
          </div>
          <div className="h-0.5 w-12 bg-[#e8e8e8] mt-[16px]" />
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 text-sm flex items-center justify-center bg-[white] rounded-full border border-[#8e8e8e] text-[#8e8e8e]">
              4
            </div>
            <span className="text-[#8e8e8e] text-xs">15 minutes ago</span>
          </div>
          <div className="h-0.5 w-12 bg-[#e8e8e8] mt-[16px]" />
          <div className="flex flex-col items-center gap-2">
            <div className="size-8 text-sm flex items-center justify-center bg-[white] rounded-full border border-[#8e8e8e] text-[#8e8e8e]">
              5
            </div>
            <span className="text-[#8e8e8e] text-xs">2 months ago</span>
          </div>
        </div>
      </section>
      <section className="mx-auto w-4/5 p-10 bg-white border border-[#e8e8e8] rounded-xl">
        <radiogroup className="flex gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="radio"
              className="w-4 h-4 accent-[#a93636] border-gray-300"
            />
            <span className="text-[#1c1c1c]">Tampa (FL)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="radio"
              className="w-4 h-4 accent-[#a93636] border-gray-300"
            />
            <span className="text-[#1c1c1c]">Tampa (FL)</span>
          </label>
        </radiogroup>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="web-designer"
              className="text-sm text-[#1c1c1c] flex items-center gap-1"
            >
              Web Designer <span className="text-[#f00404] text-base">*</span>
            </label>
            <input
              name="web-designer"
              type="text"
              placeholder="Enter asset name"
              className="h-10 px-4 text-sm font-medium text-black bg-white border border-[#E8E8E8] rounded-xl placeholder:text-[#777777] placeholder:font-normal"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="marketing-coordinator"
              className="text-sm text-[#1c1c1c] flex items-center gap-1"
            >
              Marketing Coordinator{" "}
              <span className="text-[#f00404] text-base">*</span>
              <img src={InfoCircle} className="size-4" />
            </label>
            <textarea
              name="marketing-coordinator"
              type="text"
              placeholder="Enter asset description"
              rows="5"
              className="p-4 text-sm font-medium text-black bg-white border border-[#E8E8E8] rounded-xl placeholder:text-[#777777] placeholder:font-normal"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="medical-assistant"
                className="text-sm text-[#1c1c1c]"
              >
                Medical Assistant
              </label>
              <select
                value={""}
                name="medical-assistant"
                className="h-10 px-4 text-sm font-medium text-[#1c1c1c] bg-white border border-[#d2d2d2] rounded-lg placeholder:text-[#8e8e8e] placeholder:font-normal"
              >
                <option value="1">Tampa (FL)</option>
                <option value="2">Tampa (FL)</option>
                <option value="3">Tampa (FL)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="web-designer" className="text-sm text-[#1c1c1c]">
                Web Designer
              </label>
              <select
                value={""}
                name="web-designer"
                className="h-10 px-4 text-sm font-medium text-[#1c1c1c] bg-white border border-[#d2d2d2] rounded-lg placeholder:text-[#8e8e8e] placeholder:font-normal"
              >
                <option value="1">Tampa (FL)</option>
                <option value="2">Tampa (FL)</option>
                <option value="3">Tampa (FL)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nursing-assistant"
                className="text-sm text-[#1c1c1c]"
              >
                Nursing Assistant{" "}
              </label>
              <input
                name="nursing-assistant"
                type="text"
                placeholder="Enter asset name"
                className="h-10 px-4 text-sm font-medium text-black bg-white border border-[#E8E8E8] rounded-xl placeholder:text-[#777777] placeholder:font-normal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="president-of-sales"
                className="text-sm text-[#1c1c1c]"
              >
                President of Sales
              </label>
              <select
                value={""}
                name="president-of-sales"
                className="h-10 px-4 text-sm font-medium text-[#1c1c1c] bg-white border border-[#d2d2d2] rounded-lg placeholder:text-[#8e8e8e] placeholder:font-normal"
              >
                <option value="1">Tampa (FL)</option>
                <option value="2">Tampa (FL)</option>
                <option value="3">Tampa (FL)</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dog-trainer" className="text-sm text-[#1c1c1c]">
              Dog Trainer
            </label>
            <select
              value={""}
              name="dog-trainer"
              className="h-10 px-4 text-sm font-medium text-[#1c1c1c] bg-white border border-[#d2d2d2] rounded-lg placeholder:text-[#8e8e8e] placeholder:font-normal"
            >
              <option value="1">Tampa (FL)</option>
              <option value="2">Tampa (FL)</option>
              <option value="3">Tampa (FL)</option>
            </select>
          </div>

          <div className="flex justify-between items-center gap-2">
            <button className="bg-[#f9f1f1] py-3 px-4 font-medium flex items-center gap-2 text-sm text-[#a93636] rounded-lg">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Previous</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="border-[#a93636] border bg-white py-3 px-4 font-medium flex items-center gap-2 text-sm text-[#a93636] rounded-lg">
                Save As Draft
              </button>

              <button className="bg-[#a93636] py-3 px-12 font-medium flex items-center gap-2 text-sm text-white rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Form;
