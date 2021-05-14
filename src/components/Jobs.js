import React, { useCallback, useEffect, useState } from "react";
import { useFilters, useFiltersClickedOnce } from "../Context";
import JOBS from "../Data";
import JobsList from "./JobsList";
export default function Jobs() {
  const [filters, setFilters] = useFilters();
  const [jobs, setJobs] = useState([]);

  const [, setFiltersClickedOnce] = useFiltersClickedOnce();

  const onFilterClick = ({ target }) => {
    setFiltersClickedOnce(true);
    if (!filters.includes(target.innerHTML))
      setFilters([...filters, target.innerHTML]);
    else setFilters(filters.filter((filter) => filter !== target.innerHTML));
  };
  
  useEffect(() => {
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
    } else {
      setJobs(JOBS);
    }
  }, [filters]);

  return <JobsList jobs={jobs} onFilterClick={onFilterClick}></JobsList>;
}
