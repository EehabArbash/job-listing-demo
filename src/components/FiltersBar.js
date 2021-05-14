import React from "react";
import { useFilters, useFiltersClickedOnce } from "../Context";

export default function FiltersBar() {
  const [filters, setFilters] = useFilters();
  const [filtersClickedOnce] = useFiltersClickedOnce();

  const onFilterRemove = ({ target }) => {
    setFilters(filters.filter((filter) => filter !== target.id));
  };
  const onFilterClear = () => {
    setFilters([]);
  };
  
  return (
    <div
      className={`filters-bar ${
        filtersClickedOnce
          ? filters.length
            ? "inAnimation"
            : "outAnimation"
          : "display-none"
      }`}
    >
      <div className="filters-bar-list ">
        {filters.map((filter) => (
          <div className="filters-bar-item">
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
        onClick={onFilterClear}
        className="clear-btn birthAnimation"
        style={{ display: filters.length ? "block" : "none" }}
      >
        Clear
      </span>
    </div>
  );
}
