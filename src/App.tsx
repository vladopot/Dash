import { Route, Routes } from 'react-router'
import './App.scss'
import ContactUs from './pages/contactUs'
import LayOut from './common/components/LayOut'
import CurrentUserPage from './pages/currentUserPage/CurrentUserPage'
import UserList from './pages/UserList/UserList'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<UserList />} />
          <Route path=':id' element={<CurrentUserPage />}></Route>
          <Route path='contactUs' element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
