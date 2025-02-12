import React from 'react'
import Styles from './navBar.css';

const logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <img src='https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png'/>
    </div>
  )
}

export default logo