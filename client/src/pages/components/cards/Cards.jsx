import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

const Cards = ({
    country,
    totalConfirmed,
    totalDeaths,
    totalRecovered,
    date,
    summaryTotalConfirmed,
    summaryTotalDeaths,
    summaryTotalRecovered }) => (
        <div id='main'>
            <div className='main-card'>
                <div className='card-country'>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h1">
                                {country}
                            </Typography>
                            <Typography variant="h4" component="h2">
                                Confirmed: {totalConfirmed}
                                <br />
                            Deaths: {totalDeaths}
                                <br />
                            Recovered: {totalRecovered}
                            </Typography>
                            <Typography className='' color="textSecondary" gutterBottom>
                                Last Date: {date}
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
                                Confirmed: {summaryTotalConfirmed}
                                <br />
                                Deaths: {summaryTotalDeaths}
                                <br />
                                Recovered: {summaryTotalRecovered}
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