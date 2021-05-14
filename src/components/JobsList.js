import React, { useMemo } from "react";
import { useFilters, useFiltersClickedOnce } from "../Context";
import JOBS from "../Data";
import JobFilters from "./JobFilters";
export default function JobsList() {
  const [filters, setFilters] = useFilters();

  const [, setFiltersClickedOnce] = useFiltersClickedOnce();
  const onFilterClick = ({ target }) => {
    setFiltersClickedOnce(true);
    if (!filters.includes(target.innerHTML))
      setFilters([...filters, target.innerHTML]);
    else setFilters(filters.filter((filter) => filter !== target.innerHTML));
  };

  const jobs = useMemo(() => {
    if (filters.length) {
      return JOBS.filter((job) => {
        const allFilters = [
          job["role"],
          job["level"],
          ...job["languages"],
          ...job["tools"],
        ];
        return filters.every((filter) => allFilters.includes(filter));
      });
    } else {
      return JOBS;
    }
  }, [filters]);

  return (
    <ul className="jobs-list">
      {jobs.map((job) => (
        <li className={`jobs-list-item ${job["featured"] ? "featured" : ""}`}>
          <div className="job-main">
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
                require(`../challenge-files/${job["logo"].slice(2)}`).default
              }
              alt="company-logo"
              className="job-logo"
            ></img>
          </div>
          <div className="job-aside">
            <JobFilters job={job} onFilterClick={onFilterClick}></JobFilters>
          </div>
        </li>
      ))}
    </ul>
  );
}
