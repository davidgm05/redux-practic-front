import React, { useEffect, useState } from 'react'
import UsersComponent from '../components/usersComponent/usersComponent'
import { useDispatch } from 'react-redux'
import { getUsersData } from '../core/services/serviceMock'
import { postUsers } from '../components/usersComponent/usersActions'

const HomePage = () => {
  const [usersData, setUsersData] = useState(undefined)
  const dispatch = useDispatch()

  useEffect(() => {
    const aux = getUsersData()
    setUsersData(aux)
    console.log(usersData)
  }, [])

  useEffect(() => {
    dispatch(postUsers(usersData))
    console.log(usersData)
  },[usersData])
  return (
    <>
    <UsersComponent/>
    </>
  )
}

export default HomePage
