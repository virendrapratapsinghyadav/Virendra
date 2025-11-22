import React from "react";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const ProjectDetail = ({
  subHeading,
  heading,
  image,
  duration,
  role,
  link1,
  link2,
  context,
  outcome,
}) => {
  return (
    <div>
      <div>
        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <div>
              <h2 className="text-xs md:text-md lg:text-xl font-semibold">
                {subHeading}
              </h2>
            </div>
            <div>
              <h1 className="text-md md:text-xl lg:text-2xl font-bold text-center ">
                {heading}
              </h1>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <img src={image} alt="img" />
          </div>

          {/* PROJECT DETAILS/CONTEXT */}
          <div className="flex">
            {/* DETAILS */}
            <div className="w-[30%]">
              <div>
                <h1 className="text-xs md:text-md lg:text-xl font-bold ">
                  Project Details
                </h1>
              </div>

              <div>
                {/* Duration */}
                <div>
                  <p className="text-xs md:text-md lg:text-xl font-semibold">
                    Duration
                  </p>
                  <p className="text-xs md:text-md lg:text-lg text-[#6f888c]">
                    {duration}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-xs md:text-md lg:text-xl font-semibold">
                    Technologies
                  </p>
                  <p className="text-xs md:text-md lg:text-lg text-[#6f888c]">
                    {role}
                  </p>
                </div>
              </div>
            </div>

            {/* CONTEXT */}
            <div className="w-[70%]">
              {/* heading */}
              <div>
                <h1 className="text-xs md:text-md lg:text-xl font-bold">
                  Project Context
                </h1>
              </div>

              {/* description */}
              <div>
                <p className="text-xs md:text-md lg:text-lg  text-[#6f888c]">
                  {context}
                </p>
              </div>
            </div>
          </div>

          {/* PROJECT OUTCOME */}
          <div>
            {/* heading */}
            <div>
              <h1 className="text-xs md:text-md lg:text-xl font-bold">
                Project Outcome
              </h1>
            </div>

            {/* content */}
            <div className="text-xs md:text-md lg:text-lg text-[#6f888c]">
              {Array.isArray(outcome) ? (
                outcome.map((item, index) => {
                  if (item.type === "text") {
                    return <p key={index} className="mt-4">{item.content}</p>;
                  } else if (item.type === "image") {
                    return (
                      <div key={index} className="flex justify-center my-4">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="rounded-lg "
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              ) : (
                <p className="mt-4">{outcome}</p>
              )}
            </div>
          </div>

          {/* Link */}
          <div className="flex gap-2">
            <Link to={link1}>
              <div className="flex p-1 gap-2 items-center rounded-2xl group hover:bg-blue-400 hover:text-black">
                <div>
                  <p className="text-xs md:text-md lg:text-lg text-blue-400 font-semibold group-hover:text-black">
                    visit live site
                  </p>
                </div>
                <div>
                  <MoveUpRight className="w-4 h-4 border rounded-3xl bg-white rotate-0 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
            <Link to={link2}>
              <div className="flex p-1 gap-2 items-center rounded-2xl group hover:bg-blue-400 hover:text-black">
                <div>
                  <p className="text-xs md:text-md lg:text-lg text-blue-400 font-semibold group-hover:text-black">
                    visit github repo
                  </p>
                </div>
                <div>
                  <MoveUpRight className="w-4 h-4 border rounded-3xl bg-white rotate-0 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
