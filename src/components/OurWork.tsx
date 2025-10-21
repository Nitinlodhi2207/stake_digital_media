"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const workData = [
  {
    title: "LOTTO MAX",
    bgColor: "bg-blue-900",
  },
  {
    title: "NIKE",
    bgColor: "bg-pink-500",
  },
  {
    title: "AMAZON PRIME",
    bgColor: "bg-indigo-900",
  },
  {
    title: "BCAA",
    bgColor: "bg-sky-400",
  },
  {
    title: "HEINEKEN RICH",
    bgColor: "bg-gray-700",
  },
  {
    title: "SAINSBURY'S TU",
    bgColor: "bg-yellow-200",
    textColor: "text-black",
  },
];

const OurWork = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
          See some of our work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {workData.map((item, index) => (
            <div
              key={index}
              className={`relative h-64 flex items-end p-4 group ${item.bgColor}`}
            >
              <div className="z-10">
                <h3
                  className={`text-xl font-semibold ${
                    item.textColor || "text-white"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <FaArrowRight size={24} />
              </div>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
