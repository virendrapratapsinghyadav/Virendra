import React from "react";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaGithub, FaFigma, FaNode } from "react-icons/fa";
import { SiAdobe, SiNotion, SiMiro, SiDatadog } from "react-icons/si";

const iconsRow1 = [
  <FaFigma size={40} className="text-pink-500" />,
  <FaNode size={40} className="text-green-400"/>,
  <FaFigma size={40} className="text-blue-500" />,
  <FaGithub size={40}/>,
  <RiReactjsLine size={40} className="text-blue-200"/>,
  <DiMongodb size={40} className="text-green-500"/>,
  <RiTailwindCssFill/>,
];

const iconsRow2 = [
  <SiNotion size={40} className="text-black" />,
  <SiMiro size={40} className="text-yellow-500" />,
  <SiDatadog size={40} className="text-purple-500" />,
  <SiNotion size={40} className="text-gray-700" />,
  <SiAdobe size={40} />,
  <VscVscode size={40} className="text-blue-500" />,
  <FaHtml5 size={40} className="text-red-600" />,
  <IoLogoJavascript size={40} className="text-yellow-500"/>
];

const MyStack = () => {
  return (
    <div className="overflow-hidden bg-white rounded-2xl shadow-2xl h-full border border-amber-50 p-4 flex flex-col justify-between">
      <h2 className="text-center text-xl font-semibold text-gray-800">My Stack</h2>

      {/* Row 1 */}
      <div className="overflow-hidden mt-4">
        <div className="flex items-center animate-marquee-right gap-x-8 w-max">
          {[...iconsRow1, ...iconsRow1].map((icon, index) => (
            <div key={"r1-" + index} className="flex-shrink-0">
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden mt-4">
        <div className="flex items-center animate-marquee-left gap-x-8 w-max">
          {[...iconsRow2, ...iconsRow2].map((icon, index) => (
            <div key={"r2-" + index} className="flex-shrink-0">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStack;
