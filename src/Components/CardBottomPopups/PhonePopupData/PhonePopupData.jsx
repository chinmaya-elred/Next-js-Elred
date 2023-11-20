import React from 'react'
import styles from '@/styles/Minicard.module.css'
import { Offcanvas } from 'react-bootstrap'
import PhoneNumberPopup from '../../BottomPopupsComponent/PhoneNumberPopup/PhoneNumberPopup'

const PhonePopupData = ({enable, setEnable, data}) => {
    return (
        <Offcanvas
            show={enable}
            className={styles.bottompopup}
            placement="bottom"
            onClick={() => setEnable(false)}
        >
            <PhoneNumberPopup
                number={data?.phone}
                status={data?.cardInfo?.[0]?.alternatePhoneDisplayStatus}
                setEnable={setEnable}
            />
        </Offcanvas>
    )
}

export default PhonePopupData
