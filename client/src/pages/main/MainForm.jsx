import React from 'react'
import PropTypes from 'prop-types'
import Cards from './../components/cards/Cards'
import ChartBar from './../components/charts/ChartBar'
import './MainForm.css'

const MainForm = ({ countries, countryName, onChangeField, onClickField, countryData, summary }) => (
    <div className='main'>
        <div>
            <div className='card'>
                <Cards 
                    country={countryData.country}
                    totalConfirmed={countryData.totalConfirmed}
                    totalDeaths={countryData.totalDeaths}
                    totalRecovered={countryData.totalRecovered}
                    date={countryData.date}
                    summaryTotalConfirmed={summary.totalConfirmed}
                    summaryTotalDeaths={summary.totalDeaths}
                    summaryTotalRecovered={summary.totalRecovered}
                />
            </div>
            <div className='country'>
                <select name="countryName" onChange={onChangeField} value={countryName}>
                    {countries.map((item, index) => {
                        return <option key={index} value={item.countryName}>{item.Country}</option>
                    })}
                </select>
                <br />
                <button type='button' onClick={onClickField}>Get Data</button>
            </div>
        </div>
        <div className='chart'>
            <ChartBar 
                totalConfirmed={countryData.totalConfirmed}
                totalDeaths={countryData.totalDeaths}
                totalRecovered={countryData.totalRecovered}
                date={countryData.date}/>
        </div>
    </div>
)

MainForm.propTypes = {
    countries: PropTypes.array.isRequired,
    countryName: PropTypes.string.isRequired,
    onChangeField: PropTypes.func.isRequired,
    onClickField: PropTypes.func.isRequired,
    countryData: PropTypes.string.isRequired
}

export default MainForm