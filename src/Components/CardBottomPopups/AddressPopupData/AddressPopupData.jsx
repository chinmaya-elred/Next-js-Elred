import React from 'react'
import styles from '@/styles/Minicard.module.css'
import { Offcanvas } from 'react-bootstrap'
import AddressPopup from '../../BottomPopupsComponent/AddressPopup/AddressPopup'

const AddressPopupData = ({locationEnable, setLocationEnable, data}) => {
    return (
        <Offcanvas
            show={locationEnable}
            className={styles.bottompopup}
            placement="bottom"
            onClick={() => setLocationEnable(false)}
            
        >
            <AddressPopup
                data={data}
                setLocationEnable={setLocationEnable}
                status={data?.cardInfo?.[0]?.addressDisplayStatus}
            />
        </Offcanvas>
    )
}

export default AddressPopupData
