import Gun from 'gun'
import { useState } from 'react';
import 'gun/sea'
import 'gun/axe'
export const db = Gun({ web: 'http://localhost:8765' });



export const user = db.user().recall({ sessionStorage: true })

export const Peppit = () => {
    const [username, setUsername] = useState("PAKYU LORD")
    db.on('auth', async (e) => {
        const alias = await user.get('alias')



    })

    return (
        <>{username}</>
    )
}
// user.auth('hinzwif', 'securepassword')

