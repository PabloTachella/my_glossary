import React from "react"
import { useNavigate } from "react-router-dom";

import { useMyPairs } from "./hooks/useMyPairs";
import HeaderPairsList from "../../HeaderPairsList/HeaderPairsList";
import TablePairsList from "../../TablePairsList/TablePairsList";
import ModalPairsForm from "../../ModalPairsForm/ModalPairsForm";
import ButtonSecondary from "../../ButtonSecondary/ButtonSecondary";
import ButtonSaveChanges from "../../ButtonSaveChanges/ButtonSaveChanges";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import './MyPairs.css'

const MyPairs = () => {
  const navigate = useNavigate()
  const {
    statusSaveChanges,
    language,
    listToRender,
    editingDisabled,
    deleteDisabled,
    showEditModal,
    disabledSaveButton,
    editPair,
    deletePair,
    saveChanges,
    handleChangeCbox,
  } = useMyPairs()

  return (
    <>
      {listToRender &&
        (listToRender.length > 0 ?
          <section className="b-my-pairs--container">
            <section className="b-my-pairs--header">
              <HeaderPairsList />
            </section>
            <section className="b-my-pairs--table-container">
              <TablePairsList pairs={listToRender} onChange={handleChangeCbox} />
            </section>
            <section className="b-my-pairs--footer-container">
              <div className="b-my-pairs--buttons-container">
                <ButtonSecondary
                  handleClick={editPair}
                  handleDisabled={editingDisabled}
                  text="EDITAR"
                />
                <div className="b-my-pairs--button-delete">
                  <ButtonSecondary
                    handleClick={deletePair}
                    handleDisabled={deleteDisabled}
                    text="ELIMINAR"
                  />
                </div>
              </div>
              <hr className="b-my-pairs--hr" />
              <div className="b-my-pairs--save-button-container">
                <ButtonSaveChanges
                  statusSaveChanges={statusSaveChanges}
                  handleClick={saveChanges}
                  disabledSaveButton={disabledSaveButton}
                />
              </div>
            </section>
            {showEditModal &&
              <ModalPairsForm />
            }
          </section>
          :
          <div className="b-my-pairs--text-container">
            <h2>Aún no ha ingresado palabras u oraciones en su glosario para el idioma {language}</h2>
            <ButtonPrimary
              handleClick={() => navigate('/')}
              handleDisabled={false}
              text='AGREGAR'
            />
          </div>
        )
      }
    </>
  )
}

export default MyPairs