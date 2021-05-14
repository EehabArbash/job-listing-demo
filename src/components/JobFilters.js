import React from "react";

export default function JobFilters({job , onFilterClick}) {
  return (
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
  );
}
