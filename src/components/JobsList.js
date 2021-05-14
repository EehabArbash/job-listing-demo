import React from "react";
import JobFilters from "./JobFilters";

export default function JobsList({ jobs, onFilterClick }) {
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
