import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Provider, useDispatch} from 'react-redux'
import './App.css'
import store from './core/store/store'
import UsersComponent from './components/usersComponent/usersComponent'
import { getUsersData } from './core/services/serviceMock'
import { postUsers } from './components/usersComponent/usersActions'
import HomePage from './pages/HomePage'

function App() {
  
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  )
}

export default App
