import React from 'react'

const MainContainer = props => {
    return (
        <div id='main'>
            <header>
                <h2>Page Main - {props.user}</h2>
            </header>
        </div>
    )
}

export default MainContainer