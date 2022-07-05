import React from 'react'

import edit from '../../assets/imges/edit.png'
import remove from '../../assets/imges/remove.png'
import './ListEditDelete.css'

const ListEditDelete = ({ pairsList, handleRemove, handleEdit }) => {
  return (
    <ul className="b-list-edit-delete--container">
      {pairsList.length > 0 &&
        pairsList.map((pair, index) =>
          <li key={index} className="b-list-edit-delete">
            <span className="b-list-edit-delete--entry b-list-edit-delete--text">{pair.entry}</span>
            <span className="b-list-edit-delete--translation b-list-edit-delete--text">{pair.translation}</span>
            <button onClick={() => handleEdit(index)} className="b-list-edit-delete--button">
              <img src={edit} alt="edit" className="b-list-edit-delete--button-icon" />
            </button>
            <button onClick={() => handleRemove(index)} className="b-list-edit-delete--button">
              <img src={remove} alt="remove" className="b-list-edit-delete--button-icon" />
            </button>
          </li>
        )}
    </ul>
  )
}

export default React.memo(ListEditDelete, (prevProps, nextProps) => {
  return prevProps.pairsList === nextProps.pairsList
})