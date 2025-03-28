import { Route, Routes } from 'react-router'
import './App.scss'
import ContactUs from './pages/contactUs'
import LayOut from './common/components/LayOut'
import UserList from './pages/UserList'
import CurrentUserPage from './pages/currentUserPage'



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
