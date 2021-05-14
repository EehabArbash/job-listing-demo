import React, { createContext, useContext, useState } from "react";

const Filters = createContext();
const FiltersClickedOnce = createContext();

export const useFilters = () => {
  return useContext(Filters);
};
export const useFiltersClickedOnce = () => {
  return useContext(FiltersClickedOnce);
};

export default function Context({ children }) {
  const [filters, setFilters] = useState([]);
  const [filtersClickedOnce, setFiltersClickedOnce] = useState(false);

  return (
    <Filters.Provider value={[filters, setFilters]}>
      <FiltersClickedOnce.Provider
        value={[filtersClickedOnce, setFiltersClickedOnce]}
      >
        {children}
      </FiltersClickedOnce.Provider>
    </Filters.Provider>
  );
}
