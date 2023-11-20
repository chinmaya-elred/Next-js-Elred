import React, { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import close from "../../../assets/Images/redclose.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import web from "../../../assets/images/websiteBg.svg";
import { Spinner } from "react-bootstrap";


const WebsitePopup = ({ data, setWebEnable, webStatus, socialStatus }) => {
  console.log(data)
  const [backLoader, setbackLoader] = useState(true)

  const handleUrlClick = (data) => {
    if (data?.websiteURL?.includes("http://") || url.includes("https://")) {
      window.open(url, "_blank");
    } else {
      window.open(`https://${url}`, "_blank");
    }
  };

  return (
    <div className={styles.outerdiv} onClick={(e) => e.stopPropagation()}>
      <div className={styles.skilltitle}>
        <div className={styles.title}>Web Links</div>
        {/* <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} /> */}
        <div className="close-btn">
          <Image src={close} alt="" onClick={() => setWebEnable(false)} className={!backLoader ? styles.deleteIcon : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <div className="email-address-wrapper">
        <LogoTitle
          logo={<Image src={web} alt="err" />}
          title={
            !webStatus || data?.websiteURL == ""
              ? "Website not provided"
              : data?.websiteURL || data?.website
          }
          action={handleUrlClick}
          status={webStatus}
          blankAddress="Website not provided"
          favicon={data?.websiteURL === "" ? false : true}
        />
      </div>

      <LogoTitle
        logo={<Image src={web} alt="err" />}
        title={
          !socialStatus || data?.socialMediaLink == ""
            ? "Social Media Link not provided"
            : data?.socialMediaLink
        }
        action={handleUrlClick}
        status={socialStatus}
        blankAddress="Social Media Link not provided"
        favicon={data?.socialMediaLink === "" ? false : true}
      />
    </div>
  );
};

export default WebsitePopup;
