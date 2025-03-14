import { useEffect, useState } from 'react'
import Styles from './UserList.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Pagination } from 'antd';
import Search from 'antd/es/input/Search';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { userModel, ResponseModel } from '../../common/models/ResponseModel';
import { RootState } from '../../redux/store';
import { addData } from '../../redux/usersSlice';

const UserList = () => {
  const { t } = useTranslation();
  const link = import.meta.env.VITE_URL_TO_REQUEST;
  const [currentPage, sePage] = useState(1);
  const [usersToShow, setUsers] = useState<userModel[]>();
  const users: userModel[] = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
      if (users.length === 0) {
        axios.get<ResponseModel>(link)
      .then(response => {
        const data = response.data.users;
        dispatch(addData(data));
        setUsers(data);
      })
      .catch(error => {
        console.error(error);
      });
      } else {
        setUsers(users);
      }}, []);

  return (
    <div className={Styles.main}>
      <h2>{t("UserList.tittle")}</h2>
      <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
        <Search
          onSearch={(searchString) => setUsers(users.filter(e => e.firstName.includes(searchString) || e.lastName.includes(searchString)))}
          placeholder="input search text"
          enterButton
          size='large'
          style={{
            maxWidth: '200px'
          }}/>
      </div>
      <div className={Styles.userList}>
          {
            usersToShow?.slice((currentPage - 1) * 5, currentPage * 5).map(e => (
              <div key={e.id} className={Styles.user}>
                <div className={Styles.img_wrapper}>
                  <img src={e.image} alt="user_icon" />
                </div>
                <div>
                  <p>{`${e.firstName} ${e.lastName}`}</p>
                  <p>{e.address.address}</p>
                </div>
                <Link to={`${e.id}`}>
                  <Button style={{marginTop: 15}} type='text' icon={<RightOutlined />} />
                </Link>
              </div>
            ))
          }
      </div>
      <Pagination
        onChange={(page) => {
          sePage(page);
        }}
        simple
        defaultCurrent={1}
        pageSize={5}
        align='center'
        total={usersToShow?.length}
         />
    </div>
  )
}

export default UserList