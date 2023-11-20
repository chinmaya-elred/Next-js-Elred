import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
// import { getURlValid } from "../../../globalFunctions";
// import ReactLinkifyComp from "../../Profile/components/ReactLinkifyComp/ReactLinkifyComp";

const LogoTitle = ({ logo, title, action, status, favicon, address, lat, lon, blankAddress, isValid }) => {
  console.log(title, logo, "title")
  const [imageLoading, setImageLoading] = useState(true);
  const faviconFetchLink = 'https://www.google.com/s2/favicons?domain='

  const [finalUrl, setfinalUrl] = useState('')
  const [showFavIcon, setshowFavIcon] = useState(true)

  return (
    <div className={styles.logotitle} onClick={status ? (title === blankAddress || !showFavIcon ? null : lat !== undefined ? () => action(lat, lon) : () => action(title)) : null}>
      <span className="spinner_box">
        {/* <Spinner animation="border" variant="danger" size="sm" className={`${imageLoading ? "show-img mx-2 my-2" : "hide-img"}`} /></span>      <span className={!favicon ? 'img-icon-wrapper' : 'img-icon-wrapper-favIcon'} > */}
        {/* <img src={favicon ? (status && showFavIcon ? finalUrl : logo) : logo} alt="" className={`${imageLoading ? "hide-img " : "show-img logo"} 
        ${status ? (title === blankAddress ? 'title' : "title cursorDisplay") : "title"}`}
          onLoad={() => { setImageLoading(false) }} /> */}
      </span>
      {logo}
      <div className={status ? (title === blankAddress ? styles.titlebottom : styles.titlecursorDisplay) : styles.titlebottom} style={{ width: "100%" }}
      >{address ? title : title?.length <= 50 ? title : title?.slice(0, 50) + '...'}</div>
    </div>
  );
};

export default LogoTitle;
