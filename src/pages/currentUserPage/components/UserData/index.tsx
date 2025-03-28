import React from 'react'
import styles from './index.module.scss'
import { UserData } from '../../models/userData'
import { t } from 'i18next'

const UserDataComponent = ({userDatas} : {userDatas : UserData}) => {
  return (
    <div className={styles.userDataWrapper}>
        <p className={styles.userData}>{t(userDatas.tittle)}</p>
        <p className={styles.userData}>{userDatas.value}</p>
    </div>
  )
}

export default UserDataComponent