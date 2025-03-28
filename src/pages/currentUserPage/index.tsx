import { useNavigate  } from 'react-router';
import styles from './index.module.scss'
import { useParams } from 'react-router';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import BankDatas from './bankDatas';
import { useTranslation } from 'react-i18next';
import { userModel } from '../../common/models/ResponseModel';
import { api } from '../../common/api/apiDET';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import PersonalData from './personalData';
import JobPlace from './jobPlace';

const CurrentUserPage = () => {
    const { t } = useTranslation();
    const {id} = useParams();
    const [getUser, setUser] = useState<userModel | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response: AxiosResponse<userModel> = await api.getUserById(id);
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUser();
    }, [id]);

  return (
    <main>
      <div className={styles.tittleWrapper}>
        <Button onClick={() => navigate(-1)} style={{marginRight: 10}} type='text' icon={<LeftOutlined />} />
        <h2>{`${t("UserPage.tittle")} - ${getUser?.firstName} ${getUser?.lastName}`}</h2>
      </div>
      <div className={styles.userData}>
          <PersonalData user={getUser}/>
        <div className="bank_datas">
          <BankDatas user={getUser}/>
        </div>
        <div className="jobPlace_information">
          <JobPlace user={getUser}/>
        </div>
      </div>
    </main>
  )
}

export default CurrentUserPage