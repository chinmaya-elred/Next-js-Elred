import React from 'react'
import { Spinner } from 'react-bootstrap'
import Image from "next/image";
import styles from '@/styles/Minicard.module.css'
import Share from '../../assets/Images/share-arrow.svg'

const TopSharing = () =>{
    return(
        <div className={styles.top_sharing}>
        <div className={styles.shareicon} onClick={()=>handleShareProfile(data)}>
        {/* <Spinner animation="border" variant="light" size="sm" className={shareLoader ? 'showing-img-loader' : 'hiding-img-loader'} /> */}

            <Image src={Share} alt=""  />
        </div>
        <span className={styles.sharetitle} onClick={()=>handleShareProfile(data)}>Share</span>
    </div>
    )
}
export default TopSharing