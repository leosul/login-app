import React from 'react'
import PropTypes from 'prop-types'
import './Signout.css'

const Singout = ({ user, onClickSignOut }) => (
  <div id='signout'>
    <header>
      <h2>Sign Out</h2>
    </header>
    <div className='wrapper'>
      <div className='user-info'>
        <div className='picture' style={{ backgroundImage: `url(${user.picture})` }} />
        <div className='info'>
          <h3>{user.name}</h3>
          <p className='provider'>
            Signed in With <span>{user.provider}</span>
          </p>
        </div>
        <div>
          <button onClick={onClickSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  </div>
)

Singout.propTypes = {
  user: PropTypes.object.isRequired,
  onClickSignOut: PropTypes.func.isRequired
}

export default Singout
