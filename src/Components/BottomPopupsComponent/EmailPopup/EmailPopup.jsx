import React, { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import close from "../../../assets/Images/redclose.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import emailLogo from "../../../assets/images/mailBg.svg";
import { Spinner } from "react-bootstrap";

const EmailPopup = ({ email, setOpenMail, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const gotoMail = (val) => {    
    const mailtoLink = `mailto:${val}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className={styles.outerdiv}  onClick={(e)=>e.stopPropagation()}>
      <div className={styles.skilltitle}>
        <div className={styles.title}>Email ID</div>
        {/* <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} /> */}

        <div className="close-btn">
          <Image src={close} alt="" onClick={() => setOpenMail(false)}className={!backLoader ? styles.deleteIcon  : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={<Image src={emailLogo} alt="err" />}
        title={!status ? "Email not provided" : email}
        action={gotoMail}
        status={status}
        blankAddress = "Email not provided"
      />
    </div>
  );
};

export default EmailPopup;
