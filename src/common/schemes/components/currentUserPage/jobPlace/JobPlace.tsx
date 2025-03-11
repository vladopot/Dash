import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { userModel } from '../../../models/ResponseModel';
import styles from './JobPlace.module.scss'
import { useTranslation } from 'react-i18next';

const JobPlace = ({id}:{id:number}) => {
    const { t } = useTranslation();
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <>
        <h3 className={styles.tittle}>{t("UserPage.jobInformation.tittle")}</h3>
        <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{t("UserPage.jobInformation.department")}</p>
            <p className={styles.userData}>{currentUser.company.department}</p>
        </div>
        <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{t("UserPage.jobInformation.companyName")}</p>
            <p className={styles.userData}>{currentUser.company.name}</p>
        </div>
    </>
  )
}

export default JobPlace