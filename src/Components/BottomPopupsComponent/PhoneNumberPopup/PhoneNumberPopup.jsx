import React, { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import close from "../../../assets/Images/redclose.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import phone from "../../../assets/images/phonebg.svg";
import { Spinner } from "react-bootstrap";

const PhoneNumberPopup = ({ number, setEnable, status }) => {
  const [backLoader, setbackLoader] = useState(true)
  const handlePhoneNumberClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };
  return (
    <div
      className={styles.outerdiv} onClick={(e)=>e.stopPropagation()}
    >
      <div className={styles.skilltitle}>
        <div className={styles.title}>Phone Number</div>
        {/* <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} /> */}

        <div className="close-btn">
          <Image src={close} alt="" onClick={() => setEnable(false)} className={!backLoader ? styles.deleteIcon  : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
      <LogoTitle
        logo={<Image src={phone} alt="err" />}
        title={!status ? "Number not provided" : number}
        action={handlePhoneNumberClick}
        status={status}
        const blankAddress = "Number not provided"
      />
    </div>
  );
};

export default PhoneNumberPopup;
