import React from "react";
import { useFilter } from "../../hooks/useFilter";
import SelectDropdown from "../SelectDropdown/SelectDropdown";

import "./SelectFilter.css"

const SelectFilter = () => {
  const { filter, filters, changeFilter } = useFilter()

  return (
    <div className="b-select-filter--container">
      <SelectDropdown onChange={changeFilter} options={filters} defaultValue={filter} />
    </div>
  )
}

export default SelectFilter	