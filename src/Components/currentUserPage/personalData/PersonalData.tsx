import styles from './personalData.module.scss'
import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';
import { EngLangDatas, RusLangDatas } from '../../../models/languageDatas';
import { userModel } from '../../../models/ResponseModel';

const PersonalData = ({id}:{id: number}) => {
    const language = useSelector((state: RootState) => state.language.value);
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <div className={styles.personalDataWrapper}>
          <div className={styles.imgWrapper}>
            <img src={currentUser.image} alt="user_photo" />
          </div>
          <div className={styles.personalData}>
            <h3 className={styles.tittle}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.tittle : RusLangDatas.UserPage.personalData.tittle}</h3>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.name : RusLangDatas.UserPage.personalData.name}</p>
              <p className={styles.userData}>{currentUser.firstName}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.surname : RusLangDatas.UserPage.personalData.surname}</p>
              <p className={styles.userData}>{currentUser.lastName}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.gender : RusLangDatas.UserPage.personalData.gender}</p>
              <p className={styles.userData}>{currentUser.gender}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.phone : RusLangDatas.UserPage.personalData.phone}</p>
              <p className={styles.userData}>{currentUser.phone}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.mail : RusLangDatas.UserPage.personalData.mail}</p>
              <p className={styles.userData}>{currentUser.email}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.age : RusLangDatas.UserPage.personalData.age}</p>
              <p className={styles.userData}>{currentUser.age}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.birth_date : RusLangDatas.UserPage.personalData.birth_date}</p>
              <p className={styles.userData}>{currentUser.birthDate}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.blood_group : RusLangDatas.UserPage.personalData.blood_group}</p>
              <p className={styles.userData}>{currentUser.bloodGroup}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.adress : RusLangDatas.UserPage.personalData.adress}</p>
              <p className={styles.userData}>{currentUser.address.address}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.post_code : RusLangDatas.UserPage.personalData.post_code}</p>
              <p className={styles.userData}>{currentUser.address.postalCode}</p>
            </div>
            <div className={styles.userDataWrapper}>
              <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.personalData.state : RusLangDatas.UserPage.personalData.state}</p>
              <p className={styles.userData}>{currentUser.address.state}</p>
            </div>
          </div>
        </div>
  )
}

export default PersonalData