import React from "react";
import styles from '@/styles/Minicard.module.css'

const Badges = ({ badge }) => {
    console.log(badge)
  return (
    <div className={styles.badges}>
      {badge?.map((imageUrl, index) => (
        <div key={index} className={styles.badge}>
          <img src={imageUrl?.awardIconURL} alt={`Badge ${index}`} className={styles.badgeimg}/>
        </div>
      ))}
    </div>
  );
};

export default Badges;
