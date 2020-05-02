import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainForm from './MainForm'

class MainFormContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countryName: '',
            countries: []
        }

        this.fetcher = this.props.fetcher
        this.handleChangeField = this.handleChangeField.bind(this)
    }

    handleChangeField(e) {
        const { target: { name, value } } = e
        this.setState(() => ({ [name]: value }))
    }

    async componentDidMount() {
        this.loadParentCountries()
    }

    async loadParentCountries() {
        const res = await this.fetcher.get(`countries`)
        const content = await res.json()

        this.setState({
            countries: content
        })
    }

    render() {
        return (
            <MainForm
                countries
                countryName={this.state.countryName}
                onChangeField={this.handleChangeField} />
        )
    }
}

ProviderFormContainer.propTypes = {
    fetcher: PropTypes.object.isRequired
}

export default MainFormContainer
