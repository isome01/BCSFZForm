import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {Map, List} from 'immutable'
import {useForm} from "../../hooks";
import './Webform.css'

const Webform = () => {
  const {currentValues, setInitialValues, setValue} = useForm()
  const [loading, setLoading] = useState(false)

  return (
    <div className='fz-webform col-sm-8 offset-sm-2 col-md-8 offset-md-2'>
      <form onSubmit={() => {}}>
        <h1 style={{marginBottom: 50}}>Revel Order Form</h1>
        <div className='form-group'>
          <div>
            <label>What is the name of your location?</label>
            <div>
              <input
                id='location'
                className='form-control fz-input'
                value={currentValues.get('location', '')}
                onChange={e => setValue('location', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>What is the location address?</label>
            <div>
              <input
                id='address'
                className='form-control fz-input'
                value={currentValues.get('address', '')}
                onChange={e => setValue('address', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>Is your store already open?</label>
            <div>
              <label>
                Yes
                <input
                  id='store-opened-1'
                  type='radio'
                  className='form-control fz-input'
                  value={() => {
                    const storeOpened = currentValues.get('storeOpened')
                    return storeOpened === 'yes'
                  }}
                  onChange={e => setValue('storeOpened', e.target.checked ? 'yes' : 'no')}
                />
              </label>
              <label>
                No
                <input
                  id='store-opened-2'
                  type='radio'
                  className='form-control fz-input'
                  value={() => {
                    const storeOpened = currentValues.get('storeOpened')
                    return storeOpened !== 'yes'
                  }}
                  onChange={e => setValue('storeOpened', e.target.checked ? 'no' : 'yes')}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>Legal Entity Name</label>
            <div>
              <input
                id='entityId'
                className='form-control fz-input'
                value={currentValues.get('entityId', '')}
                onChange={e => setValue('entityId', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>Signer Name</label>
            <div>
              <input
                id='signer'
                className='form-control fz-input'
                value={currentValues.get('signer', '')}
                onChange={e => setValue('signer', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>Signer Email</label>
            <div>
              <input
                id='signer-email'
                type='email'
                className='form-control fz-input'
                value={currentValues.get('signer-email', '')}
                onChange={e => setValue('signer-email', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label>Signer Phone Number</label>
            <div>
              <input
                id='signer-phone-number'
                type='phone'
                className='form-control fz-input'
                value={currentValues.get('signer-phone-number', '')}
                onChange={e => setValue('signer-phone-number', e.target.value)}
              />
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

Webform.propTypes = {

}

export default Webform
