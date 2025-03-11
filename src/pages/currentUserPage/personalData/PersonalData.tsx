import styles from './PersonalData.module.scss'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userModel } from '../../../common/models/ResponseModel';
import { RootState } from '../../../redux/store';

const PersonalData = ({id}:{id: number}) => {
    const { t } = useTranslation();
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <div className={styles.personalDataWrapper}>
          <div className={styles.imgWrapper}>
            <img src={currentUser.image} alt="user_photo" />
          </div>
          <div className={styles.personalData}>
            <h3 className={styles.tittle}>{t("UserPage.personalData.tittle")}</h3>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.name")}</p>
              <p className={styles.userData}>{currentUser.firstName}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.surname")}</p>
              <p className={styles.userData}>{currentUser.lastName}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.gender")}</p>
              <p className={styles.userData}>{currentUser.gender}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.phone")}</p>
              <p className={styles.userData}>{currentUser.phone}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.mail")}</p>
              <p className={styles.userData}>{currentUser.email}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.age")}</p>
              <p className={styles.userData}>{currentUser.age}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.birth_date")}</p>
              <p className={styles.userData}>{currentUser.birthDate}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.blood_group")}</p>
              <p className={styles.userData}>{currentUser.bloodGroup}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.adress")}</p>
              <p className={styles.userData}>{currentUser.address.address}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.post_code")}</p>
              <p className={styles.userData}>{currentUser.address.postalCode}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{t("UserPage.personalData.state")}</p>
              <p className={styles.userData}>{currentUser.address.state}</p>
            </div>
          </div>
        </div>
  )
}

export default PersonalData