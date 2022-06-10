import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Link to={project.projectRoute}>
      <div className="border rounded-xl cursor-pointer hover:shadow-xl transition-all shadow-zinc-900">
        <div>
          <div class="mockup-window rounded-xl rounded-b-none border bg-base-300">
            <img
              src={project.projectImg}
              alt=""
              className=" object-cover h-80 object-center"
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
        </div>
      </div>
    </Link>
  );
};

export default Project;
