import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUsers } from './usersActions'

const UsersComponent = () => {
    const usersFromReducer = useSelector((state) => state.usersReducer.users)
    const [usersList, setUsersList] = useState([])
    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        if (usersFromReducer) {
            setUsersList(usersFromReducer)
            console.log('reducer', usersFromReducer)
        }
    }, [usersFromReducer])

    const createNewUserHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const addNewUserHandler = () => {
        console.log(newUser)
        const aux = [...usersFromReducer]
        aux.push(newUser)
        console.log(aux)
        dispatch(postUsers(aux))
        setUsersList(aux)
    }

    return (
        <div>
            <div>
                <input type="text" name='nombre' onChange={(e) => createNewUserHandler(e)} />
                <input type="text" name='apellido' onChange={(e) => createNewUserHandler(e)} />
                <button onClick={addNewUserHandler}>crear</button>
            </div>
            {usersList.map((user, i) => (
                <div key={i}>
                    <h2>{user.nombre} {user.apellido}</h2>
                </div>
            ))}
        </div>
    )
}

export default UsersComponent