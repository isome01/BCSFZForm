import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {List, fromJS, Map} from 'immutable'

const defaultOptions = fromJS([
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
])

const LocationSelect = ({onChange, value, locationOptions, searchable}) => {
  const options = locationOptions.size ? locationOptions : defaultOptions

  return (
    <Select
      id='store_name'
      value={{value, label: value}}
      options={options.toJS()}
      onChange={e => onChange(e)}
      isSearchable={searchable}
    />
  )
}

LocationSelect.propTypes = {
  locationOptions: PropTypes.instanceOf(List),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(List),
  searchable: PropTypes.bool,
  value: PropTypes.string
}

LocationSelect.defaultProps = {
  locationOptions: List(),
  value: '',
  searchable: true
}

export default LocationSelect
