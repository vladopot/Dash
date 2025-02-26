import { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router';
import styles from './currentUserPage.module.scss'
import { useParams } from 'react-router';
import { userModel } from '../../models/ResponseModel';
import { EngLangDatas, RusLangDatas } from '../../models/languageDatas';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const CurrentUserPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const language = useSelector((state: RootState) => state.language.value);
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <main>
      <div className={styles.tittleWrapper}>
        <Button onClick={() => navigate(-1)} style={{marginRight: 10}} type='text' icon={<LeftOutlined />} />
        <h2>{`${language === 'ENG' ? EngLangDatas.UserPage.tittle : RusLangDatas.UserPage.tittle} - ${currentUser.firstName} ${currentUser.lastName}`}</h2>
      </div>
      <div className={styles.userData}>
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
        <div className="bank_datas">
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
        </div>
        <div className="jobPlace_information">
          <h3 className={styles.tittle}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.tittle : RusLangDatas.UserPage.jobInformation.tittle}</h3>
          <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.department : RusLangDatas.UserPage.jobInformation.department}</p>
            <p className={styles.userData}>{currentUser.company.department}</p>
          </div>
          <div className={styles.userDataWrapper}>
            <p className={styles.userData}>{language === 'ENG' ? EngLangDatas.UserPage.jobInformation.companyName : RusLangDatas.UserPage.jobInformation.companyName}</p>
            <p className={styles.userData}>{currentUser.company.name}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CurrentUserPage