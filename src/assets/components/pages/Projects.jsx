import { useState, useEffect } from "react";
import { fadeInUp } from "../animations/customAnimation";
import { Reveal } from "react-awesome-reveal";

function Projects({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const uniqueCategories = ["All", ...new Set(projects.map((item) => item.cat))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.cat === activeFilter);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gray-950 text-white mt-5">

      {/* Filter Section */}
      <div className="mb-10 flex justify-center">
        <ul className="flex flex-wrap gap-4 text-sm font-medium">
          {uniqueCategories.map((cat, index) => (
            <li
              key={index}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 
                ${
                  activeFilter === cat
                    ? "bg-cyan-500 text-white"
                    : "bg-cyan-500/20 hover:bg-cyan-500 hover:text-white"
                }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paginatedProjects.map((item, index) => (
          <Reveal key={index} keyframes={fadeInUp} duration={1500} delay={500} triggerOnce>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
              
              <img
                className="w-full h-48 object-cover object-top"
                src={item.imgSrc}
                alt={item.projectname}
                loading="lazy"
              />

              <div className="p-6">
                <h6 className="text-lg font-semibold mb-2">
                  {item.projectname}
                </h6>

                <button
                  onClick={() => setSelectedProject(item)}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 cursor-pointer"
                >
                  More Info
                </button>
              </div>

            </div>
          </Reveal>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-400"
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full transition ${
                currentPage === index + 1
                  ? "bg-cyan-500"
                  : "bg-gray-800 hover:bg-cyan-500"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === totalPages
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-400"
            }`}
          >
            Next
          </button>

        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-start justify-center z-50 px-4 bg-black/70"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-2xl w-full p-6 relative transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <img
              src={selectedProject.imgSrc}
              alt={selectedProject.projectname}
              className="w-full h-80 object-cover object-top rounded-lg mb-4"
              loading="lazy"
            />

            <h3 className="text-2xl font-bold mb-3">
              {selectedProject.projectname}
            </h3>

            <div className="text-gray-300 mb-4">
              {selectedProject.description ? (
                <>
                  <p className="mb-3">
                    {selectedProject.description.overview}
                  </p>

                  <p className="mb-3">
                    <span className="font-semibold text-white">Role: </span>
                    {selectedProject.description.role}
                  </p>

                  {selectedProject.description.contributions && (
                    <div className="mb-3">
                      <p className="font-semibold text-white mb-2">
                        Key Contributions:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.description.contributions.map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {selectedProject.description.techStack && (
                    <p>
                      <span className="font-semibold text-white">
                        Tech Stack:
                      </span>{" "}
                      {selectedProject.description.techStack.join(", ")}
                    </p>
                  )}
                </>
              ) : (
                "Project description goes here."
              )}
            </div>

            <a
              href={selectedProject.websitelink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Visit Website
            </a>

          </div>
        </div>
      )}

    </div>
  );
}

export default Projects;