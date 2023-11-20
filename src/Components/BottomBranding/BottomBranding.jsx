import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import ElredImage from '../../assets/Images/elredLogo.png'
import CardUser from '../../assets/Images/cardUser.svg'

const CardBottomBranding = ({ handleClose}) => {
    const[profileLoader,setprofileLoader]=useState(true)

    return (
        <div className={styles.cardbranding}>
            <div className="logo-elred">
                <Image src={ElredImage} alt="" className={styles.elredimg}/>
            </div>
            <div className={styles.maincardprofile} onClick={handleClose}>
                <div className={styles.profile_div} >
                {/* <Spinner animation="border" variant="light" size="sm" className={profileLoader ? 'showing-img-loader' : 'hiding-img-loader'} /> */}
                    <Image src={CardUser} alt=""  className={!profileLoader ? 'showing-img-loader' : "hiding-img-loader"}    onLoad={() => setprofileLoader(false)} />
                </div>
                <span className={styles.profile_txt}>Profile</span>
            </div>
        </div>
    )
}

export default CardBottomBranding