import React from 'react';
import './TablePairsList.css'

const TablePairsList = ({ pairs, onChange }) => {
  const handleChange = ev => {
    onChange(ev.target.id)
  }

  return (
    <div className="b-pairs-list-table-container">
      <table className="b-pairs-list-table">
        <tbody>
          {pairs.map((pair, index) =>
            <tr key={index} className="b-table--row">
              <td className="b-table--checkbox-container">
                <input
                  type="checkbox"
                  id={index}
                  className="pairs-list-cbox pairs-list-cbox_item"
                  checked={pairs[index].checked}
                  onChange={handleChange}
                />
              </td>
              <td className="b-table--text-container">
                <label htmlFor={pair.id} className="b-table--text">{pair.entry} </label>
              </td>
              <td className="b-table--text-container">
                <label htmlFor={pair.id} className="b-table--text">{pair.translation}</label>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TablePairsList