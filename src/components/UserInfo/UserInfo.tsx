import { useEffect, useState } from "react"

type user = {
    imie: string,
    nazwisko: string
}

const UserInfo = () => {

    const emptyUser: user = {imie: '', nazwisko: ''}

    const [currentUser, setCurrentUser] = useState(emptyUser);

    useEffect(()=>{setCurrentUser({imie: "Mateusz", nazwisko: "Borkowski"})},[])

    return <p>User: {currentUser.imie} {currentUser.nazwisko}</p>
}

export default UserInfo