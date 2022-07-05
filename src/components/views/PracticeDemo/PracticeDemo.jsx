import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary'
import Practice from '../Practice/Practice'
import './PracticeDemo.css'

const PracticeDemo = () => {
  const navigate = useNavigate()

  return (
    <section className="b-practice-demo">
      <Practice />
      <hr className='b-footer-hr' />
      <div className="b-practice-demo-footer">
        <span>Estás en modo prueba, accede a una versión completa de la app iniciando sesión</span>
        <span>Crea glosarios personalizados en el idioma que desées y practica de forma inteligente</span>
        <ButtonPrimary
          handleClick={() => navigate('/login')}
          text='INICIAR SESIÓN'
        />
      </div>
    </section>
  )
}

export default PracticeDemo