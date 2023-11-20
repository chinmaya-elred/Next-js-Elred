import React from "react";
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import closeIcon from '../../assets/Images/redclose.svg'
import MainCard from "./MainCard/MainCard";
import CardBottomPopups from "../CardBottomPopups/CardBottomPopups";
import Head from 'next/head';

const Minicard = ({ cardInfo }) => {
    // console.log(cardInfo, 'card')
    return (
        <>
            <Head>
                <title>{cardInfo?.firstname + "'s"} Personal Card</title>
                <meta property="og:title" content={cardInfo?.firstname + "'s"} Personal Card />
                <meta property="og:description" content={cardInfo?.firstname + "'s"} Personal Card />
                <meta property="og:image" content={cardInfo?.cardInfo?.[0]?.cardShortBgURL} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />

                {/* Add other meta tags if needed */}
            </Head>

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