import React, { useState } from "react";
import Header from "../components/Header";
import projects from "../api/projects.json";
import XSmall from "../components/Project/XSmall";
import Title from "../components/Title";
import SubheaderBodyButton from "../components/SubheaderBodyButton";
import { useRouter } from "next/router";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [projectsText, setProjectsText] = useState("projects and counting!");
  const router = useRouter();

  // let shuffled = filteredProjects
  //   .map((value) => ({ value, sort: Math.random() }))
  //   .sort((a, b) => a.sort - b.sort)
  //   .map(({ value }) => value);

  const categories = [
    { id: "all", title: "All" },
    { id: "nfts", title: "NFTs" },
    { id: "proposal", title: "Proposal" },
    { id: "propHouse", title: "Prop House" },
    { id: "smallGrants", title: "Small Grants" },
    { id: "merch", title: "Merch" },
    { id: "stats", title: "Stats" },
    { id: "misc", title: "Misc" },
  ];

  const getPath = (curr: string) => {
    switch (curr) {
      case "propHouse":
        return "prop-house";
      case "smallGrants":
        return "small-grants";
      default:
        return curr;
    }
  };

  const getProjectsText = (curr: string) => {
    switch (curr) {
      case "all":
        return "projects and counting!";
      case "nfts":
        return "NFT Projects";
      case "proposal":
        return "Proposals";
      case "propHouse":
        return "Prop House Projects";
      case "smallGrants":
        return "Small Grant Projects";
      case "merch":
        return "Merch Shops";
      case "stats":
        return "Statistics Dashboards";
      case "misc":
        return "Miscellaneous Projects";
      default:
        return curr;
    }
  };

  const handleClick = (e) => {
    const curr = e.target.id;
    let filtered = [];

    setProjectsText(getProjectsText(curr));

    // console.log("curr", e.target);
    // router.push(`/projects/${getPath(curr)}`);

    if (curr === "all") {
      filtered = projects;
    } else {
      filtered = projects.filter(
        (p) => p.category && p.category.includes(curr)
        // filtered = projects.filter((p) => p.category === curr);
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="mb-16">
      <Header title="Projects | Nouns Center" />
      <Title title="Projects" />

      <SubheaderBodyButton
        title={`${filteredProjects.length} ${projectsText}`}
        body="Here's a comprehensive list of all the projects in the NounsDAO ecosystem. If you don't see your project here and would like to add it, click the button to have it added to the backlog. The site is updated with new projects once a week."
        btnLink="https://www.addressform.io/form/9e6bc6c2-0f0d-4420-b66e-0d416a5fe73a"
        btnText="Submit your project"
      />

      <div className="mb-4">
        <div className="">
          <fieldset className="mt-2 text-white ">
            <div className="xs:grid xs:grid-cols-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 sm:text-base sm:justify-center sm:mb-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center xs:mb-4 sm:mb-0"
                >
                  <input
                    onClick={handleClick}
                    id={category.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={category.id === "all"}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor={category.id}
                    className="xs:ml-1.5 sm:ml-3 block text-sm font-medium"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 xs:grid-cols-3  sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">
        {filteredProjects &&
          filteredProjects.map((project) => (
            <XSmall key={project.title} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
