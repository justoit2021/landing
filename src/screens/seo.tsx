import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import '../styles/seo.css'
import i18n from 'i18next'
import es from '../i18n/es'
import en from '../i18n/en'

const lang = 'es'; //localStorage.getItem('language') === null ? 'es' : localStorage.getItem('language');

i18n.init({
  lng: lang,
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

const Seo = () => {
  return (
    <div>
      <div className='aboutUS' id='abouth'>
        <div className='titleAbus'>
          <h1 style={{fontSize:25,fontWeight:'normal',textAlign:'right'}}>{i18n.t("aboutUsH")}</h1>
        </div>
        <div className='aboutus-container'>
          <div className='ab-us-font'>
            <p>
              {i18n.t("aboutUsText")}
            </p>
          </div>
          <div className='ab-us-image'>
            <StaticImage
              src="../images/l2.png"
              width={350}
              alt="A icon"
            />
          </div>
        </div>
      </div>
      <div>
        <div className='titleAbus' id='positionh'>
          <h1 style={{fontSize:25,fontWeight:'normal',textAlign:'right'}}>{i18n.t("Position")}</h1>
        </div>
        <div className='poscontainer'>
          <div className='imagemind'>
            <StaticImage
              src="../images/mind.webp"
              width={750}
              alt="A icon"
            />
          </div>
          <div className='fontmind'>
            <div className='fontmindOne'>
              <p>{i18n.t('fontmindp1')}</p>
            </div>
            <div className='fontmindTwo'>
              <p>{i18n.t('fontmindp2')}</p>
            </div>
            <div className='fontmindThree'>
              <p>{i18n.t('fontmindp3')}</p>
            </div>
            <div className='fontmindFour'>
              <p>{i18n.t('fontmindp4')}</p>
            </div>
            <div className='fontmindFive'>
              <p>{i18n.t('fontmindp5')}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='titleAbus' id='positionh' style={{marginTop:50}}>
          <h1 style={{fontSize:25,fontWeight:'normal',textAlign:'left'}}>{i18n.t("ContentH")}</h1>
        </div>
        <div className='developContent'>
          <div className='developConteiner s1'>
            <div>
              <StaticImage
                src="../images/smartphone.svg"
                width={100}
                alt="A icon"
              />
            </div>
            <div style={{marginTop:30}}>
              <h1 style={{fontSize:20,fontWeight:500}}>
                {i18n.t("developContentH1")}
              </h1>
            </div>
            <div>
              <p>
                {i18n.t("developContentP1")}
              </p>
            </div>
          </div>
          <div className='developConteiner s2'>
            <div>
              <StaticImage
                src="../images/mensajeria-instantanea.svg"
                width={100}
                alt="A icon"
              />
            </div>
            <div style={{marginTop:30}}>
              <h1 style={{fontSize:20,fontWeight:500}}>
                {i18n.t("developContentH2")}
              </h1>
            </div>
            <div>
              <p>
                {i18n.t("developContentP2")}
              </p>
            </div>
          </div>
          <div className='developConteiner s3'>
            <div>
              <StaticImage
                src="../images/laptop.svg"
                width={100}
                alt="A icon"
              />
            </div>
            <div style={{marginTop:30}}>
              <h1 style={{fontSize:20,fontWeight:500}}>
                {i18n.t("developContentH3")}
              </h1>
            </div>
            <div>
              <p>
                {i18n.t("developContentP3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seo;
