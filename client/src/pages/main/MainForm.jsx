import React from 'react'

const MainForm = ({ countries, onChangeField }) => (
    <div id='main'>
        <header>
            <h1>MAIN PAGE</h1>
        </header>
        <body>
            <select name="countryName" onChange={onChangeField} value={countryName}>
                {countries.map((item, index) => {
                    return <option key={index} value={item._id}>{item.name}</option>
                })}
            </select>
        </body>
    </div>
)

export default MainForm