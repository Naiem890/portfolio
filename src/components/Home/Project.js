import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link to={project.projectRoute}>
      <div className="border rounded-xl cursor-pointer hover:shadow-xl transition-all shadow-zinc-900">
        <div>
          <div class=" rounded-xl rounded-b-none bg-slate-200">
            <img
              src={project.projectImg}
              alt=""
              className="object-contain mx-auto px-2 sm:px-4 py-4 object-center"
            />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-3xl font-semibold font-Kdam">
            {project.projectName}
          </h3>
          <div className="flex mt-4 gap-2 opacity-60 flex-wrap">
            {project.projectStack.map((stack) => {
              return <div className="btn btn-outline btn-xs">{stack}</div>;
            })}
          </div>
          <button className="font-semibold flex items-center gap-2 mt-6 btn btn-sm btn-ghost">
            <ArrowNarrowRightIcon className="h-6"></ArrowNarrowRightIcon> See
            Project Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Project;
