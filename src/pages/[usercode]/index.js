// pages/prerendered.js
import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import Minicard from '@/Components/Minicard/Minicard';
import styles from '@/styles/Minicard.module.css'

const PrerenderedPage = ({ data }) => {
  const router = useRouter();
  //   console.log(data)
  const cardInfo = data?.result?.[0]
  return (
    <div className={styles.main}>
      <Minicard cardInfo={cardInfo} />
    </div>
  );
};

export default PrerenderedPage;

export async function getServerSideProps(context) {
  try {
    const userCodeParam  = context.params.usercode; 
    const userCode = userCodeParam ? userCodeParam.split('=')[1] : null;
    console.log(userCode, 'usercode')

    // if (!userCode) {
    //   throw new Error('Missing userCode parameter');
    // }

    const requestData = {
      userCode,
    };

    const response = await fetch(`https://dev.elred.io/noSessionMinicardInfo?userCode=${userCode}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return {
   
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);

    return {
      props: {
        data: [],
      },
    };
  }
}

