import React from 'react'
import styles from '@/styles/Minicard.module.css'
import { Offcanvas } from 'react-bootstrap'
import WebsitePopup from '../../BottomPopupsComponent/WebsitePopup/WebsitePopup'

const WebsitePopupData = ({webEnable, setWebEnable, data}) => {
    return (
        <Offcanvas show={webEnable}  className={styles.bottompopup} placement="bottom" onClick={() => setWebEnable(false)}>
            <WebsitePopup
                data={data}
                setWebEnable={setWebEnable}
                webStatus={data?.cardInfo?.[0]?.websiteDisplayStatus}
                socialStatus={data?.cardInfo?.[0]?.socialMediaDisplayStatus}
            />
        </Offcanvas>
    )
}

export default WebsitePopupData
