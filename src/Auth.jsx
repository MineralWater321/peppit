import Gun from 'gun'
import { useContext, createContext } from 'react';
import 'gun/sea'
import 'gun/axe'
import React from 'react'
export const db = Gun({ web: 'http://localhost:8765' });

// { web: 'http://localhost:8765' }

export const user = db.user().recall({ sessionStorage: true })

// export const Peppit = () => {
//     const [username, setUsername] = useState("PAKYU LORD")
//     db.on('auth', async (e) => {
//         const alias = await user.get('alias')



//     })

//     return (
//         <>{username}</>
//     )
// }

db.on('auth', async (e) => {
    const alias = await user.get('alias')


    UserName(alias)



})


user.auth('hinzwifi', 'securitypass')
// user.leave()

const UserContext = createContext()






export function UserName(alias) {


    console.log(alias)

}


