import React from "react";

import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary'
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary'
import './Welcome.css'
import { useWelcome } from "./hooks/useWelcome";

const Welcome = () => {
  const { start, goToLogin } = useWelcome()

  return (
    <>
      <span className="b-welcome--screen-animation" />
      <header className="b-welcome-header">My Glossary</header>
      <main className="b-welcome--main">
        <h1>Aprende idiomas de forma personalizada</h1>
        <h2>
          Crea tu propio glosario de palabras u oraciones y nuestro algoritmo de práctica
          inteligente te las recordará justo antes de que las olvides  
        </h2>
        <p>Para desbloquear esta característica es necesario que inicies sesión</p>

        <section className="b-welcome-actions">
          <div className="b-welcome-actinons--start b-welcome-actinons--item">
            <h4>Prueba la app con un glosario predeterminado</h4>
            <ButtonSecondary
              handleClick={start}
              text='EMPEZAR YA'
              className="b-welcome-actions--start-button"
            />
          </div>
          <div className="b-welcome-actinons--login b-welcome-actinons--item">
            <h4>Accede para crear tu propio glosario</h4>
            <ButtonPrimary
              handleClick={goToLogin}
              text='INGRESAR'
              className="b-welcome-actions--start-button"
            />
          </div>
        </section>

      </main>
      <footer className="b-welcome--footer">
        <span>100% Free and Open source</span>
      </footer>
    </>
  )
}

export default Welcome