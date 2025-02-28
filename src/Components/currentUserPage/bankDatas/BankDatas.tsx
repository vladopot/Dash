import styles from './BankDatas.module.scss'
import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { EngLangDatas, RusLangDatas } from '../../../models/languageDatas';
import { userModel } from '../../../models/ResponseModel';

const BankDatas = ({id}:{id:number}) => {
    const language = useSelector((state: RootState) => state.language.value);
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];
    
  return (
    <>
        <h3 className={styles.tittle}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.tittle : RusLangDatas.UserPage.bankData.tittle}</h3>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.expirationDate : RusLangDatas.UserPage.bankData.expirationDate}</p>
                <p className={styles.userData}>{currentUser.bank.cardExpire}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.cardNumber : RusLangDatas.UserPage.bankData.cardNumber}</p>
                <p className={styles.userData}>{currentUser.bank.cardNumber}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.cardType : RusLangDatas.UserPage.bankData.cardType}</p>
                <p className={styles.userData}>{currentUser.bank.cardType}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.currency : RusLangDatas.UserPage.bankData.currency}</p>
                <p className={styles.userData}>{currentUser.bank.currency}</p>
            </div>
            <div className={styles.userDataWrapper}>
                <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.bankData.iban : RusLangDatas.UserPage.bankData.iban}</p>
                <p className={styles.userData}>{currentUser.bank.iban}</p>
        </div>
    </>
  )
}

export default BankDatas