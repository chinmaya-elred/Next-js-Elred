import React from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import closeIcon from '../../assets/Images/redclose.svg'
import MainCard from "./MainCard/MainCard";
import CardBottomPopups from "../CardBottomPopups/CardBottomPopups";

const Minicard = ({ cardInfo }) => {
    console.log(cardInfo, 'card')
    return (
        <>
            <div className={styles.topBar}>
                <div className={styles.usertitle}>{cardInfo?.firstname + "'s"} Personal Card</div>
                <Image
                    src={closeIcon}
                    alt="err"
                    className={styles.closeIcon}
                />
            </div>
            <MainCard cardContent={cardInfo} />
            <div className={styles.save_button_mini}><button type="button" 
            className={styles.save_button_mini_button}>Save card</button>
            </div>
        </>
    )
}
export default Minicard