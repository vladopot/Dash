import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { EngLangDatas, RusLangDatas } from '../../../models/languageDatas';
import { userModel } from '../../../models/ResponseModel';
import styles from './JobPlace.module.scss'

const JobPlace = ({id}:{id:number}) => {
    const language = useSelector((state: RootState) => state.language.value);
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <>
        <h3 className={styles.tittle}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.tittle : RusLangDatas.UserPage.jobInformation.tittle}</h3>
        <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.department : RusLangDatas.UserPage.jobInformation.department}</p>
            <p className={styles.userData}>{currentUser.company.department}</p>
        </div>
        <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.companyName : RusLangDatas.UserPage.jobInformation.companyName}</p>
            <p className={styles.userData}>{currentUser.company.name}</p>
        </div>
    </>
  )
}

export default JobPlace