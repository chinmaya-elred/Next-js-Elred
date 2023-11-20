import React, {useState} from "react";
import styles from '@/styles/Minicard.module.css'
import DesignationListProfile from "@/Components/Designation/Designation";
import Badges from "@/Components/Badges/Badges";
import BottomOptions from "@/Components/BottomOptions/BottomOptions";
import CardBottomPopups from "@/Components/CardBottomPopups/CardBottomPopups";
import CardBottomBranding from "@/Components/BottomBranding/BottomBranding";
import TopSharing from "@/Components/TopSharing/TopSharing";

const MainCard = ({ cardContent }) => {
    const [open, setOpen] = useState(false);
    const [enable, setEnable] = useState(false);
    const [openMail, setOpenMail] = useState(false);
    const [webEnable, setWebEnable] = useState(false);
    const [locationEnable, setLocationEnable] = useState(false);
    const CardBottomPopupsProps = {
        open, setOpen, enable, setEnable, openMail, setOpenMail, locationEnable, setLocationEnable,
        webEnable, setWebEnable
      }

    const newAddress = `${cardContent?.location?.city?.length > 0 ? cardContent?.location?.city + "," : ""} ${cardContent?.location?.country}`
    return (
        <>
            <div className={styles.cardWrapper}>
                <div className={styles.minicard} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cardContent?.cardInfo?.[0]?.cardShortBgURL})` }}>

                    <div className="mainCardTop">
                        <TopSharing/>
                        <img
                            src={cardContent?.dpURL}
                            alt="err"
                            width={128}
                            height={128}
                        />
                        <div className={styles.firstname}>{cardContent?.firstname}</div>
                        <div className={styles.lastname}>{cardContent?.lastname}</div>

                        <div className="designations">
                            <div className={styles.titledesignation}>
                                {/* {title?.length > 1 ? `${title?.[0]?.value} | +${title?.length - 1}` : title?.[0]?.value} */}
                                <DesignationListProfile designation={cardContent?.title} maxWidth={180} /></div>
                            <div className={styles.address}>
                                {newAddress?.length <= 28 ? newAddress : newAddress?.slice(0, 28) + '...'}
                            </div>
                        </div>
                        <Badges badge={cardContent?.awards} />
                        <BottomOptions {...CardBottomPopupsProps}/>
                        <CardBottomBranding/>
                    </div>

                </div>
            </div>
            <CardBottomPopups  {...CardBottomPopupsProps} data={cardContent}/>
        </>
    )
}
export default MainCard