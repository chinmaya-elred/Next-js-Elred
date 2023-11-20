import React from 'react'
import styles from '@/styles/Minicard.module.css'
import { Offcanvas } from 'react-bootstrap'
import EmailPopup from '../../BottomPopupsComponent/EmailPopup/EmailPopup'

const EmailPopupData = ({openMail, setOpenMail, data}) => {
    return (
        <Offcanvas show={openMail}  className={styles.bottompopup} placement="bottom" onClick={() => setOpenMail(false)}>
            <EmailPopup
                email={data?.email}
                setOpenMail={setOpenMail}
                status={data?.cardInfo?.[0]?.alternateEmailDisplayStatus}
            />
        </Offcanvas>
    )
}

export default EmailPopupData
