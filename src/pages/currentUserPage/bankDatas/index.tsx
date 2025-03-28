import styles from './index.module.scss'
import { useTranslation } from 'react-i18next';
import { userModel } from '../../../common/models/ResponseModel';
import { UserData } from '../models/userData';
import UserDataComponent from '../components/UserData';

const BankDatas = ({user}:{user: userModel | null}) => {
    const { t } = useTranslation();
    const userDatas: UserData[] = [
        {tittle: "UserPage.bankData.expirationDate", value: user?.bank.cardExpire},
        {tittle: "UserPage.bankData.cardNumber", value: user?.bank.cardNumber},
        {tittle: "UserPage.bankData.cardType", value: user?.bank.cardType},
        {tittle: "UserPage.bankData.currency", value: user?.bank.currency},
        {tittle: "UserPage.bankData.iban", value: user?.bank.iban}
    ]
    
  return (
    <>
        <h3 className={styles.tittle}>{t("UserPage.bankData.tittle")}</h3>
        {userDatas.map((e) => (
            <UserDataComponent userDatas={e} />
        ))}
    </>
  )
}

export default BankDatas