import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainForm from './MainForm'
import moment from 'moment'

class MainFormContainer extends Component {
    constructor(props) {
        super(props)

        this.fetcher = this.props.fetcher

        this.state = {
            countryName: '',
            countries: [],
            summary: [],
            countryData: ''
        }

        this.handleChangeField = this.handleChangeField.bind(this)
        this.handleClickField = this.handleClickField.bind(this)
    }

    async componentDidMount() {
        this.loadParentCountries()
        this.loadGlobalData()
    }

    async loadGlobalData() {
        const res = await this.fetcher.get(`summary`)
        const content = await res.json()
        const contentSummary = content['Global']

        const convertedDataSummary = {
            NewConfirmed: this.formatNumber(contentSummary.NewConfirmed),
            TotalConfirmed: this.formatNumber(contentSummary.TotalConfirmed),
            NewDeaths: this.formatNumber(contentSummary.NewDeaths),
            TotalDeaths: this.formatNumber(contentSummary.TotalDeaths),
            NewRecovered: this.formatNumber(contentSummary.NewRecovered),
            TotalRecovered: this.formatNumber(contentSummary.TotalRecovered)
        }

        this.setState({
            summary: convertedDataSummary
        })
    }

    async loadParentCountries() {
        const res = await this.fetcher.get('countries')
        const content = await res.json()

        this.setState({
            countries: content.sort(function( a, b ) {
                a = a.Country.toLowerCase();
                b = b.Country.toLowerCase();
            
                return a < b ? -1 : a > b ? 1 : 0;
            })
        })
    }

    handleChangeField(e) {
        const { target: { name, value } } = e
        this.setState(() => ({ [name]: value }))
    }

    handleClickField() {
        this.loadData()
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    async loadData() {
        const res = await this.fetcher.get(`summary`)
        const content = await res.json()

        const contentCountry = content['Countries'].filter(
            s => s.Country === this.state.countryName
        )[0]

        if (contentCountry) {
            const convertedCountryData = {
                Country: contentCountry.Country,
                CountryCode: contentCountry.CountryCode,
                Slug: contentCountry.Slug,
                NewConfirmed: this.formatNumber(contentCountry.NewConfirmed),
                TotalConfirmed: this.formatNumber(contentCountry.TotalConfirmed),
                NewDeaths: this.formatNumber(contentCountry.NewDeaths),
                TotalDeaths: this.formatNumber(contentCountry.TotalDeaths),
                NewRecovered: this.formatNumber(contentCountry.NewRecovered),
                TotalRecovered: this.formatNumber(contentCountry.TotalRecovered),
                Date: moment(contentCountry.Date).format('DD/MM/YYYY')
            }

            this.setState({
                countryData: convertedCountryData
            })
        }

        this.loadGlobalData()
    }

    render() {
        return (
            <MainForm
                countries={this.state.countries}
                countryName={this.state.countryName}
                onChangeField={this.handleChangeField}
                onClickField={this.handleClickField}
                countryData={this.state.countryData}
                summary={this.state.summary} />
        )
    }
}

MainFormContainer.propTypes = {
    fetcher: PropTypes.object.isRequired
}

export default MainFormContainer
