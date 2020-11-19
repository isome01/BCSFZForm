import React from 'react'
import PropTypes from 'prop-types'
import Webform from "./Webform";

const App = () => {
  return (
    <div className='web-form'>
      <Webform />
    </div>
  )
}

App.propTypes = {
  appEssentials: PropTypes.any,
  routes: PropTypes.any
}

export default App
