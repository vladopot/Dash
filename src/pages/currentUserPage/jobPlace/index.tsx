import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
import { userModel } from '../../../common/models/ResponseModel';
import { UserData } from '../models/userData';
import UserDataComponent from '../components/UserData';

const JobPlace = ({user}:{user: userModel | null}) => {
    const { t } = useTranslation();

    const userDatas: UserData[] = [
      {tittle: "UserPage.jobInformation.department", value: user?.company.department},
      {tittle: "UserPage.jobInformation.companyName", value: user?.company.name}
    ]

  return (
    <>
        <h3 className={styles.tittle}>{t("UserPage.jobInformation.tittle")}</h3>
        {userDatas.map((e) => (
          <UserDataComponent userDatas={e} />
        ))}
    </>
  )
}

export default JobPlace