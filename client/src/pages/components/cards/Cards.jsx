import React from 'react'
import PropTypes from 'prop-types'
//import { Chart } from 'react-charts'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

const Cards = ({ countryData, summary }) => (
    <div id='main'>
        <div className='main-card'>
            <div className='card-country'>
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h1">
                            {countryData.Country}
                        </Typography>
                        <Typography variant="h4" component="h2">
                            Confirmed: {countryData.TotalConfirmed}
                            <br />
                            Deaths: {countryData.TotalDeaths}
                            <br />
                            Recovered: {countryData.TotalRecovered}
                        </Typography>
                        <Typography className='' color="textSecondary" gutterBottom>
                            Last Date: {countryData.Date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='card-summary'>
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h1">
                            Global
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Confirmed: {summary.TotalConfirmed}
                            <br />
                                Deaths: {summary.TotalDeaths}
                            <br />
                                Recovered: {summary.TotalRecovered}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
)

Cards.propTypes = {
    countryData: PropTypes.string.isRequired
}

export default Cards