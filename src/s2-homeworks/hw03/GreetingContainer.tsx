import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import User from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (e: string) => void, setName: (n: string) => void, addUserCallback: (nameUser: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!name) {setError('name is required') }
    else
        addUserCallback(name)
    setName('')

}

export const pureOnBlur = (name: string, setError: (e: string) => void) => {
    // если имя пустое - показать ошибку
    if (name.length === 0) setError('name is required')
}

export const pureOnEnter = (event: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (event.key === 'Enter') {
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(event.target.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers : number = users.length// need to fix
    const lastUserName: string | undefined = users.length > 0 ? users[users.length - 1].name : undefined;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
