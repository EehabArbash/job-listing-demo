import React, { useMemo } from "react";
import { useFilters, useFiltersClickedOnce } from "../Context";
import JOBS from "../Data";
import JobsList from "./JobsList";
export default function Jobs() {
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

  return <JobsList jobs={jobs} onFilterClick={onFilterClick}></JobsList>;
}
