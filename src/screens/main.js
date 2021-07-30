import React from 'react'
import '../styles/header.css'
import i18n from 'i18next'
import es from '../i18n/es'
import en from '../i18n/en'

const Main = (props) => {
  i18n.init({
    lng: props.langs,
    debug: true,
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    }
  });

  return (
    <div className="background-container">
      <div className='bg-main'>
        <div className='bg-container'>
          <div className='section-heading'>
            <h1 className='section-h1-title'>{i18n.t("HeaTitleMain")}</h1>
            <p className='section-p-subtext'>
              {i18n.t("HeaderSubTextMain")}
            </p>
          </div>
          <div className='contactus-container'>
            <button className='btn-contact-us'
              onClick={() => {
                window.location.href = 'mailto:sandra@justoit.net?subject=Quiero contactarme con JUSTOIT&body=Hola mi nombre es '
              }}>{i18n.t("HeaderSubBtn")}</button>
          </div>
        </div>
      </div>
      <h1 className='section-h1-title-resp'>{i18n.t("HeaTitleMain")}</h1>
      <p className='section-p-subtext-resp'>
        {i18n.t("HeaderSubTextMain")}
      </p>
      <div className='contactus-container-resp'>
        <button 
          className='btn-contact-us-resp'
          onClick={() => {
            window.location.href = 'mailto:sandra@justoit.net?subject=Quiero contactarme con JUSTOIT&body=Hola mi nombre es '
          }}>
            {i18n.t("HeaderSubBtn")}
        </button>
      </div>
    </div>
  )
}

export default Main;
