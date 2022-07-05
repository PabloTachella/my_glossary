import React from "react";
import PairsForm from "../PairsForm/PairsForm";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

import close from '../../assets/imges/remove.png'
import "./ModalPairsForm.css"

// utils
import { useHandleEditPair } from "./hooks/useHandleEditPair";

const ModalPairsForm = () => {
  const { language,
    entry,
    translation,
    updateEntry,
    updateTranslation,
    focus,
    handleFocus,
    finishEdition,
    closeEdit } = useHandleEditPair()

  return (
    <div className="b-modal-pairs-form--container">
      <div className="b-modal-pairs-form--card">
        <button type="button" onClick={closeEdit} className="b-modal-pairs-form--close">
          <img src={close} alt="close" className="b-modal-pairs-form--icon" />
        </button>
        <PairsForm
          entry={entry}
          translation={translation}
          updateEntry={updateEntry}
          updateTranslation={updateTranslation}
          focus={focus}
          handleFocus={handleFocus}
          onSubmit={finishEdition}
          language={language}
        />
        <div className="b-modal-pairs-form--cancel-btn-container">
          <ButtonSecondary
            handleClick={closeEdit}
            handleDisabled={false}
            text="CANCELAR"
          />
        </div>
      </div>
    </div>
  )
}

export default ModalPairsForm