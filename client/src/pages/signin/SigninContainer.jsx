import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Signin from './Signin'
import { login } from '../../actions'
const { fetch } = window

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
        const res = await fetch('/api/auth/signin', {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({ provider: 'google', token: tokenId })
        })

        if (res.ok) {
            const user = await res.json()
            this.props.dispatch(login(user))
        } else {
            alert('Failed to Login - Google')
        }
    }

    async handleGoogleSignInFailure({ error, details }) {
        alert(error + ' - ' + details)
    }

    async handleFacebookSignInSuccess(response) {
        const res = await fetch('/api/auth/signin', {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({ provider: 'facebook', token: response.accessToken })
          })
          
          if (res.ok) {            
            const user = await res.json()
            this.props.dispatch(login(user))
          } else {
            alert('Failed to Login - Facebook')
          }
    }

    async handleFacebookSignInFailure(response) {
        alert('Failed to Login - Facebook - ' + response)
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
