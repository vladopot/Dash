import styles from './BankDatas.module.scss'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userModel } from '../../../common/models/ResponseModel';
import { RootState } from '../../../redux/store';

const BankDatas = ({id}:{id:number}) => {
    const { t } = useTranslation();
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];
    
  return (
    <>
        <h3 className={styles.tittle}>{t("UserPage.bankData.tittle")}</h3>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{t("UserPage.bankData.expirationDate")}</p>
                <p className={styles.userData}>{currentUser.bank.cardExpire}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{t("UserPage.bankData.cardNumber")}</p>
                <p className={styles.userData}>{currentUser.bank.cardNumber}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{t("UserPage.bankData.cardType")}</p>
                <p className={styles.userData}>{currentUser.bank.cardType}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{t("UserPage.bankData.currency")}</p>
                <p className={styles.userData}>{currentUser.bank.currency}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{t("UserPage.bankData.iban")}</p>
                <p className={styles.userData}>{currentUser.bank.iban}</p>
        </div>
    </>
  )
}

export default BankDatas