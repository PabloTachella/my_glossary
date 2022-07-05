import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Welcome from '../components/views/Welcome/Welcome'
import Login from '../components/views/Login/Login'
import Authentication from '../components/views/Authentication/Authentication'
import Home from '../components/views/Home/Home'
import Profile from '../components/views/Profile/Profile'
import NotFound from '../components/views/NotFound/NotFound'
import MyPairsContainer from '../components/containers/MyPairsContainer'
import Practice from '../components/views/Practice/Practice'
import PracticeDemo from '../components/views/PracticeDemo/PracticeDemo'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='authentication' element={<Authentication />} />
      <Route path='practice-demo' element={<PracticeDemo />} />
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='profile' element={<Profile />} />
        <Route path='practice' element={<Practice />} />
        <Route path='my-pairs' element={<MyPairsContainer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter >
)
export default App