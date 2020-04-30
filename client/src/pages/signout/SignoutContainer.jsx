import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Signout from './Signout'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions'
const { confirm } = window

class SignoutContainer extends Component {
  constructor (props) {
    super(props)

    this.fetcher = this.props.fetcher

    this.state = {}

    this.handleClickSignOut = this.handleClickSignOut.bind(this)
  }

  handleClickSignOut () {
    const confirmSignOut = confirm('Confirm to Sign Out')

    if (confirmSignOut) {
      this.props.dispatch(logout())
    }
  }

  render () {
    return <Signout {...this.props}
      {...this.state}
      onClickSignOut={this.handleClickSignOut} />
  }
}

SignoutContainer.propTypes = {
  fetcher: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const stateToProps = ({ user }) => ({
  user
})

export default withRouter(connect(stateToProps)(SignoutContainer))
