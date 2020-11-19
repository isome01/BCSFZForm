import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {List, fromJS, Map} from 'immutable'

const defaultOptions = fromJS([
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
])

const LocationSelect = ({onChange, value, currentValues, setValue, locationOptions, searchable}) => {
  const options = locationOptions ? locationOptions.size() : defaultOptions

  const handleChange = useCallback(e => {
    setValue(e)
    console.log(e)
  }, [])

  const location = currentValues.get('location', options.toJS()[0])
  console.log(location)

  return (
    <Select
      id='location'
      value={location}
      options={options.toJS()}
      onChange={handleChange}
      isSearchable={searchable}
    />
  )
}

LocationSelect.propTypes = {
  currentValues: PropTypes.instanceOf(Map),
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(List),
  searchable: PropTypes.bool
}

LocationSelect.defaultProps = {
  searchable: true
}

export default LocationSelect
