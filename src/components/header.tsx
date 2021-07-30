import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PageProps } from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEquals, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons"
import '../styles/header.css'
import i18n from 'i18next'
import es from '../i18n/es'
import en from '../i18n/en'

type DataProps = {
  site: {
    buildTime: string
  }
}

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

const Header: React.FC<PageProps<DataProps>> = () => {
  const [openNavApp, setOpenNavApp] = React.useState(false);
  const [aninav, setaninav] = React.useState(false);

  return (
    <header className='container'>
      {!openNavApp ? (
        <div className='logocon'>
          <div>
            <StaticImage
              src="../images/logo.png"
              width={210}
              quality={95}
              alt="A icon"
            />
          </div>
          <div className='logoconfonts'>
            <div>
              <span className='logoconfontstitle'>JUSTO IT</span>
            </div>
            <div>
              <span className='logoconfontssubtext'>Transformación digital</span>
            </div>
          </div>
        </div>
      ) : null}
      <div className='menucon'>
        <div className='menu-list'>
          <a className='list-font' href="#abouth">{i18n.t("aboutUsH")}</a>
        </div>
        <div className='menu-list'>
          <a className='list-font' href="#productsh">{i18n.t("ProductsH")}</a>
        </div>
        <div className='menu-list'>
          <a className='list-font' href="#monith">{i18n.t("MonitH")}</a>
        </div>
        <div className='menu-list'>
          <a className='list-font' href="#strategyh">{i18n.t("Strategy")}</a>
        </div>
        <div className='menu-list desdecon'>
          <a className='list-font' href="#positionh">{i18n.t("ContentH")}</a>
        </div>
        <div className='menu-list posnone'>
          <a className='list-font' href="#positionh">{i18n.t("Position")}</a>
        </div>
        {lang === 'es' ? (
          <div className='menu-list' style={{cursor:'pointer'}} onClick={() => {
            localStorage.setItem('language', 'en');
            location.reload();
          }}>
            <StaticImage
              src="../images/usa.svg"
              width={30}
              alt="A icon"
            />
          </div>
        ) : (
          <div className='menu-list' style={{cursor:'pointer'}} onClick={() => {
            localStorage.setItem('language', 'es');
            location.reload();
          }}>
            <StaticImage
              src="../images/spain.svg"
              width={30}
              alt="A icon"
            />
          </div>
        )}
      </div>
      {!openNavApp ? (
        <div className='menures'>
          <button onClick={() => {setOpenNavApp(!openNavApp); setaninav(true)}}>
            <FontAwesomeIcon icon={faEquals} size="2x" color="#363636" />
          </button>
        </div>
      ) : null}
      {openNavApp ? (
        <div className={`menu-resp-nav ${aninav ? 'menuanishow' : 'menuaninone'}`}>
          <div>
            <StaticImage
              src="../images/logo.png"
              width={210}
              quality={95}
              alt="A icon"
            />
          </div>
          <div className='close-menu-resp'>
            <button className='menu-btn-close-res' 
              onClick={() => {
                setTimeout(() => {
                  setOpenNavApp(!openNavApp);
                }, 1000); 
                setaninav(false)
                }}>
              <FontAwesomeIcon icon={faChevronCircleRight} size="2x" color="#363636" />
            </button>
          </div>
          <div className='menucon-resp-nav'>
            <div className='menu-list'>
              <a className='list-font' href="#abouth">{i18n.t("aboutUsH")}</a>
            </div>
            <div className='menu-list'>
              <a className='list-font' href="#productsh">{i18n.t("ProductsH")}</a>
            </div>
            <div className='menu-list'>
              <a className='list-font' href="#monith">{i18n.t("MonitH")}</a>
            </div>
            <div className='menu-list'>
              <a className='list-font' href="#strategyh">{i18n.t("Strategy")}</a>
            </div>
            <div className='menu-list'>
              <a className='list-font' href="#positionh">{i18n.t("ContentH")}</a>
            </div>
            <div className='menu-list'>
              <a className='list-font' href="#positionh">{i18n.t("Position")}</a>
            </div>
            {lang === 'es' ? (
              <div className='menu-list' style={{cursor:'pointer'}} onClick={() => {
                localStorage.setItem('language', 'en');
                location.reload();
              }}>
                <StaticImage
                  src="../images/usa.svg"
                  width={30}
                  alt="A icon"
                />
              </div>
            ) : (
              <div className='menu-list' style={{cursor:'pointer'}} onClick={() => {
                localStorage.setItem('language', 'es');
                location.reload();
              }}>
                <StaticImage
                  src="../images/spain.svg"
                  width={30}
                  alt="A icon"
                />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Header
