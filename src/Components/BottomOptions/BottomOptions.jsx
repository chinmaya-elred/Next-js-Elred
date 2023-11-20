import React from "react";
import styles from '@/styles/Minicard.module.css'
import Image from "next/image";
import call from "../../assets/Images/call.svg";
import globe from "../../assets/Images/globe.svg";
import location from "../../assets/Images/location.svg";
import mail from "../../assets/Images/mail.svg";
import S from "../../assets/Images/S.svg";

const BottomOptions = ({ setOpen, setEnable, setOpenMail, setLocationEnable, setWebEnable, isShareCard, setPop }) => {
    console.log(setOpen)
  return (
    <div className={isShareCard?'bottom-options custom-width': styles.bottomoptions}>
      <div className={styles.optionwrapper} onClick={()=>setOpen(true)}>
        <Image src={S} alt="" className={styles.optionwrapperimg}/>
      </div>
      <div className={styles.optionwrapper} onClick={()=>setOpenMail(true)}>
        <Image src={mail} alt="" className={styles.optionwrapperimg}/>
      </div>
      <div className={styles.optionwrapper} onClick={()=>setEnable(true)}>
        <Image src={call} alt="" className={styles.optionwrapperimg}/>
      </div>
      <div className={styles.optionwrapper} onClick={()=>setLocationEnable(true)}>
        <Image src={location} alt="" className={styles.optionwrapperimg}/>
      </div>
      <div className={styles.optionwrapper} onClick={()=>setWebEnable(true)}>
        <Image src={globe} alt="" className={styles.optionwrapperimg}/>
      </div>
    </div>
  );
};

export default BottomOptions;
