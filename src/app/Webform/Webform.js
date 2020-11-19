import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {Map, List} from 'immutable'
import {useForm} from '../../hooks'
import LocationSelect from './locationSelect'
import './Webform.css'

const Webform = () => {
  const {currentValues, setInitialValues, setValue} = useForm()
  const [loading, setLoading] = useState(false)
  const storeOpened = currentValues.get('storeOpened', '')
  const phoneNumber = currentValues.get('signer-phone-number')

  const handleSubmit = useCallback(e => {
    e.preventDefault()
  }, [])

  return (
    <div className='fz-webform col-sm-8 offset-sm-2 col-md-8 offset-md-2'>
      <form onSubmit={handleSubmit}>
        <h1 style={{marginBottom: 50, borderBottom: 'solid #eee 1px'}}>Revel Order Form</h1>
        <div className='form-group'>
          <div>
            <label>What is the name of your location?</label>
            <div>
              <LocationSelect
                className='form-control fz-input'
                value={currentValues.get('location', '')}
                onChange={e => setValue('location', e)}
                currentValues={currentValues}
                setValue={setValue}
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
            <div className='text-center col-sm-6'>
              <label className='col-sm-6 float-left' style={{width: 50}}>
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
              <label className='col-sm-6' style={{width: 50}}>
                <label>No</label>
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
            {!storeOpened &&
            <div className='col-sm-6'>
              <label>Opening Date</label>
              <div>
                <input
                  id='opening-date'
                  type='date'
                  className='form-control fz-input'
                  value={currentValues.get('opening-date', '')}
                  onChange={e => setValue('opening-date', e.target.value)}
                />
              </div>
            </div>
            }
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label htmlFor='entityId'>Legal Entity Name</label>
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
            <label htmlFor='signer'>Signer Name</label>
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
            <label htmlFor='signer-email'>Signer Email</label>
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
            <label htmlFor='signer-phone-number'>Signer Phone Number</label>
            <div>
              <input
                id='signer-phone-number'
                type='phone'
                placeholder='ex: 1-(323)-542-3725'
                className='form-control fz-input'
                value={currentValues.get('signer-phone-number', '')}
                onChange={e => setValue('signer-phone-number', e.target.value)}
              />
            </div>
          </div>
        </div>
        {phoneNumber &&
          <div className='form-group'>
            <div>
              <label htmlFor='billing-address'>What is the billing address?</label>
              <div>
                <input
                  id='billing-address'
                  placeholder='ex: 1234 Buff Blvd. Buff City, TX 12345'
                  type='text'
                  className='form-control fz-input'
                  value={currentValues.get('billing-address', '')}
                  onChange={e => setValue('billing-address', e.target.value)}
                />
              </div>
            </div>
          </div>
        }
        <div className='form-group'>
          <div>
            <label htmlFor='shipping-address'>What is the shipping address for your equipment?</label>
            <div>
              <input
                id='shipping-address'
                placeholder='ex: 1234 Buff Blvd. Buff City, TX 12345'
                type='text'
                className='form-control fz-input'
                value={currentValues.get('shipping-address', '')}
                onChange={e => setValue('shipping-address', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div style={{width: '100%', marginTop: 20, marginBottom: 20}}>
          <img
            src='https://images.typeform.com/images/bjzBy94fPHTf/image/default'
            alt='revel-image.jpg'
            style={{width: '100%', maxWidth: 300}}
          />
        </div>
        <div className='form-group'>
          <div>
            <label htmlFor='desktop-terminals'>How many Desktop POS Terminals?</label>
            <div>
              <input
                id='desktop-terminals'
                placeholder={1}
                type='number'
                className='form-control fz-input'
                value={currentValues.get('desktop-terminals', '')}
                onChange={e => setValue('desktop-terminals', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div>
            <label htmlFor='mobile-terminals'>How many Mobile POS Terminals?</label>
            <div>
              <input
                id='mobile-terminals'
                placeholder={1}
                type='number'
                className='form-control fz-input'
                value={currentValues.get('mobile-terminals', '')}
                onChange={e => setValue('mobile-terminals', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

Webform.propTypes = {

}

export default Webform
