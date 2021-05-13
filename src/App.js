import { useEffect, useState } from "react";
import "./App.css";
import JOBS from "./Data";
function App() {
  const [jobs, setJobs] = useState(JOBS);
  const [filters, setFilters] = useState([]);
  const onFilterClick = ({ target }) => {
    if (!filters.includes(target.innerHTML))
      setFilters([...filters, target.innerHTML]);
    else setFilters(filters.filter((filter) => filter !== target.innerHTML));
  };
  const onFilterRemove = ({ target }) => {
    setFilters(filters.filter((filter) => filter !== target.id));
  };
  const onFilterClear = () => {
    setFilters([]);
  };

  useEffect(() => {
    setJobs(JOBS);
    if (filters.length) {
      setJobs(
        JOBS.filter((job) => {
          const allFilters = [
            job["role"],
            job["level"],
            ...job["languages"],
            ...job["tools"],
          ];
          return filters.every((filter) => allFilters.includes(filter));
        })
      );
    }
  }, [filters, jobs]);

  return (
    <>
      <header className="header"></header>
      <main className="container">
        <div
          className={`filters-bar ${
            filters.length ? "inAnimation" : "outAnimation"
          }`}
        >
          <div className="filters-bar-list ">
            {filters.map((filter) => (
              <div className="filters-bar-item birthAnimation">
                <div className="filters-bar-tablet">{filter}</div>
                <div
                  onClick={onFilterRemove}
                  id={filter}
                  className="filters-bar-close"
                >
                  &#10006;
                </div>
              </div>
            ))}
          </div>
          <span
            href="#"
            onClick={onFilterClear}
            className="clear-btn birthAnimation"
            style={{ display: filters.length ? "block" : "none" }}
          >
            Clear
          </span>
        </div>
        <ul className="jobs-list">
          {jobs.map((job) => (
            <li
              className={`job-list-item ${job["featured"] ? "featured" : ""}`}
            >
              <main>
                <div>
                  <div className="job-header">
                    <h2 className="job-company">{job["company"]}</h2>
                    {job["new"] ? <span className="new-tablet">NEW!</span> : ""}
                    {job["featured"] ? (
                      <span className="featured-tablet">FEATURED</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h3 className="job-position">{job["position"]}</h3>
                  <p className="job-info">
                    <span>{job["postedAt"]}</span>
                    <span className="job-info-sep">•</span>
                    <span>{job["contract"]}</span>
                    <span className="job-info-sep">•</span>
                    <span>{job["location"]}</span>
                  </p>
                </div>
                <img
                  src={
                    require(`./challenge-files/${job["logo"].slice(2)}`).default
                  }
                  alt="company-logo"
                  className="job-logo"
                ></img>
              </main>
              <aside>
                <ul className="job-filters">
                  <li onClick={onFilterClick} className="filter-tablet">
                    {job["role"]}
                  </li>
                  <li onClick={onFilterClick} className="filter-tablet">
                    {job["level"]}
                  </li>
                  {job["languages"].map((language) => (
                    <li onClick={onFilterClick} className="filter-tablet">
                      {language}
                    </li>
                  ))}
                  {job["tools"].map((tool) => (
                    <li onClick={onFilterClick} className="filter-tablet">
                      {tool}
                    </li>
                  ))}
                </ul>
              </aside>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
