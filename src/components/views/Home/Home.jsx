import React from "react";
import SetPairsContainer from "../../SetPairsContainer/SetPairsContainer";
import SelectDropdown from '../../SelectDropdown/SelectDropdown';
import { useInitialData } from "../../../hooks/useInitialData";

import './Home.css';

const Home = () => {
  const {
    LANGUAGES,
    changeOfLanguage,
    language, 
    glossaryData
  } = useInitialData()

  return (
    <>
      <main className="b-main">
        <div className="b-main-relative-position-container">
          <div className="b-main--language-dropdown-container">
            <div className="b-main--language-dropdown_size">
              <SelectDropdown
                onChange={changeOfLanguage}
                options={LANGUAGES}
                defaultValue={language}
              />
            </div>
          </div>
          <h1 className="b-main--title">Ingresa nuevas palabras u oraciones a tu glosario</h1>
          <SetPairsContainer language={language} glossaryData={glossaryData} />
        </div>
      </main>
    </>
  )
}

export default Home