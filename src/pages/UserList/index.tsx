import { useEffect, useState } from 'react'
import Styles from './index.module.scss'
import { Button, Pagination } from 'antd';
import Search from 'antd/es/input/Search';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { userModel } from '../../common/models/ResponseModel';
import { RootState } from '../../redux/store';
import { addData } from '../../redux/usersSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks/customReduxHooks';
import { api } from '../../common/api/apiDET';

const UserList = () => {
  const { t } = useTranslation();
  const [currentPage, sePage] = useState(1);
  const users: userModel[] = useAppSelector((state: RootState) => state.users.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
      if (users.length === 0) {
        api.getUsersList()
      .then(response => {
        const data = response.data.users;
        dispatch(addData(data));
      })
      .catch(error => {
        console.error(error);
      });
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
          // onSearch={(searchString) => setUsers(users.filter(e => e.firstName.includes(searchString) || e.lastName.includes(searchString)))}
          placeholder="input search text"
          enterButton
          size='large'
          style={{
            maxWidth: '200px'
          }}/>
      </div>
      <div className={Styles.userList}>
          {
            users?.slice((currentPage - 1) * 5, currentPage * 5).map(e => (
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
        total={users?.length}
         />
    </div>
  )
}

export default UserList