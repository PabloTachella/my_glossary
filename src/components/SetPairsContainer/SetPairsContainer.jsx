import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useHandleForm } from "./hooks/useHandleForm";
import PairsForm from "../PairsForm/PairsForm";
import ListEditDelete from "../ListEditDelete/ListEditDelete";
import './SetPairsContainer.css'

const SetPairsContainer = ({ glossaryData, language }) => {
  const {
    entry,
    translation,
    pairsList,
    disabledButton,
    focus,
    updateEntry,
    updateTranslation,
    removeFromPairsList,
    handleFocus,
    addToList,
    editPair,
    saveData
  } = useHandleForm({ glossaryData, language })

  return (
    <section className="b-set-pairs-container">
      <PairsForm
        onSubmit={addToList}
        language={language}
        entry={entry}
        translation={translation}
        focus={focus}
        updateEntry={updateEntry}
        updateTranslation={updateTranslation}
        handleFocus={handleFocus}
      />
      <div className="b-set-pairs--list-container">
        <ListEditDelete
          pairsList={pairsList}
          handleEdit={editPair}
          handleRemove={removeFromPairsList}
        />
      </div>
      <div className="b-main--footer">
        <hr className="b-footer-hr" />
        <button
          onClick={saveData}
          disabled={disabledButton}
          className="b-footer--buttom-save"
        >GUARDAR
        </button>
      </div>
      <ToastContainer />
    </section>
  )
}

export default SetPairsContainer