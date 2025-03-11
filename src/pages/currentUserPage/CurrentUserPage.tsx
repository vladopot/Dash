import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router';
import styles from './currentUserPage.module.scss'
import { useParams } from 'react-router';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import PersonalData from './personalData/PersonalData';
import BankDatas from './bankDatas/BankDatas';
import JobPlace from './jobPlace/JobPlace';
import { useTranslation } from 'react-i18next';
import { userModel } from '../../common/models/ResponseModel';

const CurrentUserPage = () => {
    const { t } = useTranslation();
    const {id} = useParams();
    const navigate = useNavigate();
    const users: userModel[] = useSelector((state: RootState) => state.users.users);
    const currentUser: userModel = users.filter((e) => e.id === Number(id))[0];

  return (
    <main>
      <div className={styles.tittleWrapper}>
        <Button onClick={() => navigate(-1)} style={{marginRight: 10}} type='text' icon={<LeftOutlined />} />
        <h2>{`${t("UserPage.tittle")} - ${currentUser.firstName} ${currentUser.lastName}`}</h2>
      </div>
      <div className={styles.userData}>
          <PersonalData id={Number(id)}/>
        <div className="bank_datas">
          <BankDatas id={Number(id)}/>
        </div>
        <div className="jobPlace_information">
          <JobPlace id={Number(id)}/>
        </div>
      </div>
    </main>
  )
}

export default CurrentUserPage