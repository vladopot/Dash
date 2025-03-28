import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
import { userModel } from '../../../common/models/ResponseModel';
import { UserData } from '../models/userData';
import UserDataComponent from '../components/UserData';

const PersonalData = ({user}:{user: userModel | null}) => {
    const { t } = useTranslation();

    const userDatas: UserData[] = [
      {tittle: "UserPage.personalData.name", value: user?.firstName},
      {tittle: "UserPage.personalData.surname", value: user?.lastName},
      {tittle: "UserPage.personalData.gender", value: user?.gender},
      {tittle: "UserPage.personalData.phone", value: user?.phone},
      {tittle: "UserPage.personalData.mail", value: user?.email},
      {tittle: "UserPage.personalData.age", value: String(user?.age)},
      {tittle: "UserPage.personalData.birth_date", value: user?.birthDate},
      {tittle: "UserPage.personalData.blood_group", value: user?.bloodGroup},
      {tittle: "UserPage.personalData.adress", value: user?.address.address},
      {tittle: "UserPage.personalData.post_code", value: user?.address.postalCode},
      {tittle: "UserPage.personalData.state", value: user?.address.state}
    ]

  return (
    <div className={styles.personalDataWrapper}>
          <div className={styles.imgWrapper}>
            <img src={user?.image} alt="user_photo" />
          </div>
          <div className={styles.personalData}>
            <h3 className={styles.tittle}>{t("UserPage.personalData.tittle")}</h3>
            {userDatas.map((e) => (
              <UserDataComponent userDatas={e} />
            ))}
          </div>
        </div>
  )
}

export default PersonalData