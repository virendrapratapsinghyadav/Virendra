import React from "react";
import { FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNotion, SiMiro, SiDatadog } from "react-icons/si";

const iconsRow1 = [
  <FaFigma size={40} className="text-pink-500" />,
//   <FaAdobe size={40} className="text-purple-500" />,
  <FaNodeJs size={40} className="text-green-500" />,
  <FaFigma size={40} className="text-blue-500" />,
];

const iconsRow2 = [
  <SiNotion size={40} className="text-gray-700" />,
  <SiMiro size={40} className="text-yellow-500" />,
  <SiDatadog size={40} className="text-purple-500" />,
  <SiNotion size={40} className="text-gray-700" />,
];

const MyStack = () => {
    return(
  <div className="overflow-hidden bg-white rounded-2xl shadow-2xl w-[250px] h-fit border-amber-50  px-1 py-5 m-2 -translate-0.5">
      <h2 className="text-center text-xl font-semibold mb-4">My Stack</h2>

      {/* Row 1 - move right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {iconsRow1.map((icon, index) => (
            <div key={index} className="mx-6">{icon}</div>
          ))}
          {/* duplicate row for smooth loop */}
          {iconsRow1.map((icon, index) => (
            <div key={"dup1-" + index} className="mx-6">{icon}</div>
          ))}
        </div>
      </div>

      {/* Row 2 - move left */}
      <div className="flex overflow-hidden mt-4">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {iconsRow2.map((icon, index) => (
            <div key={index} className="mx-6">{icon}</div>
          ))}
          {/* duplicate row for smooth loop */}
          {iconsRow2.map((icon, index) => (
            <div key={"dup2-" + index} className="mx-6">{icon}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyStack
