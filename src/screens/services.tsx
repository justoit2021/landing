import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBrain, faBalanceScale, faNetworkWired} from "@fortawesome/free-solid-svg-icons"
import '../styles/header.css'
import i18n from 'i18next'
import es from '../i18n/es'
import en from '../i18n/en'

const lang = window.localStorage.getItem('language') === null ? 'es' : localStorage.getItem('language');

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

const Services = () => {
  return (
    <>
      <div className="sectiona" id="monith">
        <div className='box-section_a'>
          <div style={{padding: 10}}>
            <FontAwesomeIcon icon={faBalanceScale} size="3x" color="#363636cc" />
          </div>
          <div style={{padding:5}}>
            <h1 style={
              {fontWeight:"lighter",fontSize: 25, color:'#1391ff', textShadow: '0 0 2px'}
            }>{i18n.t("Measure")}</h1>
          </div>
          <div>
            <ul style={{textAlign:'left', color: '#874848', paddingLeft:10}}>
              <li>{i18n.t("measurel1")}</li>
              <li>{i18n.t("measurel2")}</li>
              <li>{i18n.t("measurel3")}</li>
              <li>{i18n.t("measurel4")}</li>
            </ul>
          </div>
        </div>
        <div className='box-section_a'>
          <div style={{padding: 10}}>
            <FontAwesomeIcon icon={faBrain} size="3x" color="#363636cc" />
          </div>
          <div style={{padding:5}}>
            <h1 style={
              {fontWeight:"lighter",fontSize: 25, color:'#1391ff',textShadow: '0 0 2px'}
              }>{i18n.t("Processing")}</h1>
          </div>
          <div>
            <p style={{textAlign:'left', padding:'0 18px',color: '#874848'}}>
              {i18n.t("processingTitle")}
            </p>
          </div>
        </div>
        <div className='box-section_a'>
          <div style={{padding: 10}}>
            <FontAwesomeIcon icon={faNetworkWired} size="3x" color="#363636cc" />
          </div>
          <div style={{padding:5}}>
            <h1 style={
              {fontWeight:"lighter",fontSize: 25, color:'#1391ff',textShadow: '0 0 2px'}
              }>{i18n.t("knownledge")}</h1>
          </div>
          <div>
            <ul style={{textAlign:'left', color: '#874848',paddingLeft:10}}>
              <li>{i18n.t("knownledgel1")}</li>
              <li>{i18n.t("knownledgel2")}</li>
              <li>{i18n.t("knownledgel3")}</li>
              <li>{i18n.t("knownledgel4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:'center'}} id='strategyh'>
        <StaticImage
          src="../images/mark.png"
          width={810}
          quality={95}
          alt="A icon"
        />
      </div>
      <div>
        <div className="sectionb-container" id='productsh'>
          <div style={{width:'25%'}}>
            <div style={{textAlign:'center'}}>
              <StaticImage
                src="../images/stock.png"
                width={64}
                quality={94}
                alt="A icon"
              />
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
              <h3 className='titleProducts' style={{fontWeight:'lighter'}}>{i18n.t("productsht1")}</h3>
            </div>
          </div>
          <div style={{padding:'10px 20px', width:'75%'}}>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
              {i18n.t("productshb1")}
            </p>
          </div>
          <div className='line-container' />
        </div>
        <div className="sectionb-container">
          <div style={{width:'25%'}}>
            <div style={{textAlign:'center'}}>
              <StaticImage
                src="../images/seo.png"
                width={64}
                quality={94}
                alt="A icon"
              />
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
              <h3 className='titleProducts' style={{fontWeight:'lighter'}}>{i18n.t("productsht2")}</h3>
            </div>
          </div>
          <div style={{padding:'10px 20px', width:'75%'}}>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
              {i18n.t("productshb2p1")}
            </p>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
            {i18n.t("productshb2p2")}
            </p>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
            {i18n.t("productshb2p3")}
            </p>
          </div>
          <div className='line-container' />
        </div>
        <div className="sectionb-container">
          <div style={{width:'25%'}}>
            <div style={{textAlign:'center'}}>
              <StaticImage
                src="../images/newspaper.png"
                width={64}
                quality={94}
                alt="A icon"
              />
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
              <h3 className='titleProducts' style={{fontWeight:'lighter'}}>{i18n.t("productsht3")}</h3>
            </div>
          </div>
          <div style={{padding:'10px 20px', width:'75%'}}>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
              {i18n.t("productshb3")}
            </p>
          </div>
          <div className='line-container' />
        </div>
        <div className="sectionb-container">
          <div style={{width:'25%'}}>
            <div style={{textAlign:'center'}}>
              <StaticImage
                src="../images/somed.png"
                width={64}
                quality={94}
                alt="A icon"
              />
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
              <h3 className='titleProducts' style={{fontWeight:'lighter'}}>{i18n.t("productsht4")}</h3>
            </div>
          </div>
          <div style={{padding:'10px 20px', width:'75%'}}>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
              Captura de posibles lead o posibles clientes.
            </p>
          </div>
          <div className='line-container' />
        </div>
        <div className="sectionb-container">
          <div style={{width:'25%'}}>
            <div style={{textAlign:'center'}}>
              <StaticImage
                src="../images/ai.png"
                width={64}
                quality={94}
                alt="A icon"
              />
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
              <h3 className='titleProducts' style={{fontWeight:'lighter'}}>{i18n.t("productsht5")}</h3>
            </div>
          </div>
          <div style={{padding:'10px 20px', width:'75%'}}>
            <p style={{textShadow:'0 0 1px', color:'gray'}}>
              {i18n.t("productshb5")}
            </p>
          </div>
          <div className='line-container' />
        </div>
      </div>
    </>
  )
}

export default Services
