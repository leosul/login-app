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
        const contentSummary = content.Global

        const convertedDataSummary = {
            newConfirmed: this.formatNumber(contentSummary.NewConfirmed),
            totalConfirmed: this.formatNumber(contentSummary.TotalConfirmed),
            newDeaths: this.formatNumber(contentSummary.NewDeaths),
            totalDeaths: this.formatNumber(contentSummary.TotalDeaths),
            newRecovered: this.formatNumber(contentSummary.NewRecovered),
            totalRecovered: this.formatNumber(contentSummary.TotalRecovered)
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

        const contentCountry = content.Countries.find(
            s => s.Country === this.state.countryName
        )

        if (contentCountry) {
            const convertedCountryData = {
                country: contentCountry.Country,
                countryCode: contentCountry.CountryCode,
                slug: contentCountry.Slug,
                newConfirmed: this.formatNumber(contentCountry.NewConfirmed),
                totalConfirmed: this.formatNumber(contentCountry.TotalConfirmed),
                newDeaths: this.formatNumber(contentCountry.NewDeaths),
                totalDeaths: this.formatNumber(contentCountry.TotalDeaths),
                newRecovered: this.formatNumber(contentCountry.NewRecovered),
                totalRecovered: this.formatNumber(contentCountry.TotalRecovered),
                date: moment(contentCountry.Date).format('DD/MM/YYYY')
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
