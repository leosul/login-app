import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Signin from './Signin'
import { login } from '../../actions'

class SigninContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            success: !!props.user
        }

        this.handleGoogleSignInSuccess = this.handleGoogleSignInSuccess.bind(this)
        this.handleGoogleSignInFailure = this.handleGoogleSignInFailure.bind(this)
        this.handleFacebookSignInSuccess = this.handleFacebookSignInSuccess.bind(this)
        this.handleFacebookSignInFailure = this.handleFacebookSignInFailure.bind(this)
    }

    componentDidUpdate(prevProps) {

        if (!!this.props.user && !prevProps.user) {
            this.setState(() => ({ success: true }))
        }
    }

    async handleGoogleSignInSuccess({ tokenId }) {
        const user = 'leonardo - Google'
        this.props.dispatch(login(user))
        //alert('Google Success!')
    }

    async handleGoogleSignInFailure({ error, details }) {
        alert('Google Failure!')
    }

    async handleFacebookSignInSuccess(response) {
        const user = 'leonardo - Facebook'
        this.props.dispatch(login(user))
        //alert('Facebook Success!')
    }

    async handleFacebookSignInFailure(response) {
        alert('Facebook Failure!')
    }

    render() {
        if (this.state.success) {
            return <Redirect to='/' />
        }

        return <Signin {...this.props} {...this.state}
            onGoogleSignInSuccess={this.handleGoogleSignInSuccess}
            onGoogleSignInFailure={this.handleGoogleSignInFailure}
            onFacebookSignInSuccess={this.handleFacebookSignInSuccess}
            onFacebookSignInFailure={this.handleFacebookSignInFailure} />
    }
}

SigninContainer.propTypes = {
    user: PropTypes.object
}

const stateToProps = ({ user }) => ({
    user
  })

export default withRouter(connect(stateToProps)(SigninContainer))
