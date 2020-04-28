import React from 'react'

const MainContainer = ({user}) => (
    <div id='main'>
        <header>
            <h1>MAIN PAGE</h1>
            <h2>Nome: {user.name}</h2>
        </header>
    </div>
)

export default MainContainer