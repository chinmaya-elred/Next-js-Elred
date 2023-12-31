import React, { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import close from "../../../assets/Images/redclose.svg";
import LogoTitle from "../LogoTitle/LogoTitle";
import location from "../../../assets/Images/locateBg.svg";
import { Spinner } from "react-bootstrap";

const AddressPopup = ({ address, setLocationEnable, status,data }) => {
  const [backLoader, setbackLoader] = useState(true)
  const {latitude, longitude, fullAddress} = data?.address
  const handleMapClick = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  };
  return (
    
    <div className={styles.outerdiv} onClick={(e)=>e.stopPropagation()}>
      <div className={styles.skilltitle}>
        <div className={styles.title}>Address</div>
        {/* <Spinner animation="border" variant="danger" size="sm" className={backLoader ? 'show-img-loader loader-close' : 'hide-img-loader'} /> */}

        <div className="close-btn">
          <Image src={close} alt="" onClick={() => setLocationEnable(false)}
          className={!backLoader ? styles.deleteIcon : 'hide-img-loader'} onLoad={() => setbackLoader(false)} />
        </div>
      </div>
    
      <LogoTitle
          logo={<Image src={location} alt="err" />}
        title={
          !status || fullAddress === ""||!fullAddress
            ? "Address not provided"
            : fullAddress
        }
        status={status}
        action={handleMapClick}
        address={true}
        lat={latitude}
        lon={longitude}
        favicon={false}
        blankAddress = "Address not provided"
      />
     
     
    </div>
  );
};

export default AddressPopup;
