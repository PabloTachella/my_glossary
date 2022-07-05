import React from "react";
import { useFilter } from "../../hooks/useFilter";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import { useHeaderPairsList } from "./hooks/useHeaderPairsList";
import './HeaderPairsList.css'

const HeaderPairsList = () => {
  const {
    filter,
    handleChangeSelectAll
  } = useHeaderPairsList()
  const { filters, changeFilter } = useFilter()

  return (
    <>
      <div className="b-header-pairs-list--container">
        <div className="b-header-pairs-list--cbox-container">
          <input
            type="checkbox"
            id="selectAll"
            className="pairs-list-cbox b-header-pairs-list--cbox"
            onChange={handleChangeSelectAll}
          />
          <label htmlFor="selectAll" className="b-header-pairs-list--text">Seleccionar todo</label>
        </div>
        <div className="b-header-pairs-list--options-dropdown-container">
          <SelectDropdown onChange={changeFilter} options={filters} defaultValue={filter} />
        </div>
      </div>
    </>
  )
}

export default HeaderPairsList