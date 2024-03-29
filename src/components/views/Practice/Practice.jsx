import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer } from "react-toastify";

import { usePractice } from "./hooks/usePractice";
import PracticeInput from "../../PracticeInput/PracticeInput";
import PracticeReverser from "../../PracticeReverser/PracticeReverser";
import SelectFilter from "../../SelectFIlter/SelectFilter";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import './Practice.css'

const Practice = () => {
  const navigate = useNavigate()
  const {
    listToPracticeFiltered,
    existPairs,
    languages,
    reverseThePractrice,
    characterMode,
    input,
    setInput,
    handleFocus,
    focus,
    loadStatus,
    filter,
  } = usePractice()

  return (
    <>
      {existPairs ?
        <section className="b-practice--container">
          <header className="b-practice--header">
            <div className="b-practice-reverse--container">
              <PracticeReverser
                option1={languages.language1}
                option2={languages.language2}
                handleChange={reverseThePractrice}
              />
            </div>
            <SelectFilter />
          </header>
          <h2 className="b-practice--title">Escribe esto en {languages.language2}</h2>
          {(listToPracticeFiltered?.length > 0) ?
            <PracticeInput
              characterMode={characterMode}
              input={input}
              setInput={setInput}
              handleFocus={handleFocus}
              focus={focus}
            />
            : loadStatus === 'loading' ?
              <Box className="b-practice--form">
                <span className="b-form--sentence">
                  <Skeleton animation="wave" width={200} />
                </span>
                <span className="b-practice--input-container__skeleton" />
              </Box>
              : (loadStatus === 'succeeded' || loadStatus === 'idle') &&
              <>
                <h3 className="b-practice--text-title">¡Bien hecho!</h3>
                <span className="b-practice--text">
                  No tienes más prácticas por el momento para <b>{filter}</b>,
                  ingresa nuevas palabras a tu glosario o vuelve más tarde
                </span>
              </>
          }
        </section>
        :
        <div className="b-practice--text-container">
          <h2>Debes agregar palabras u oraciones a tu glosario para poder practicar</h2>
          <ButtonPrimary
            handleClick={() => navigate('/')}
            handleDisabled={false}
            text='AGREGAR'
          />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default Practice