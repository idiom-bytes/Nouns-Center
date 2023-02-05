/* eslint-disable @next/next/no-img-element */
import React from 'react';

const XSmall = ({ project }) => {
  return project ? (
    <a href={project.url} target="_blank" rel="noreferrer">
      <div className="">
        <a className="group block sm:cursor-pointer transition duration-200 h-60 w-full rounded-xl bg-gray-100 focus-within:ring-5 relative focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden border border-grey-light dark:border-black">
          <div className="absolute h-full w-full gradient">
            <div className="absolute top-0 font-semibold px-4 pb-2 text-lg text-white">
              {project.title}
            </div>
            <div className="absolute bottom-0 font-semibold px-4 pb-2 text-sm text-white">
              {project.description}
            </div>
          </div>
          <img
            className="object-cover w-full h-full"
            src={!project.image.startsWith('http') ? `/projects/${project.image}` : project.image}
            alt={project.image}
          />
        </a>
      </div>
    </a>
  ) : (
    <></>
  );
};

export default XSmall;
