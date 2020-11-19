import ajax from '../../../config/ajax'

const getPOCData = () => {
  return ajax.get('/')
    .then(res => {
      return (res.data.data || [])
    })
}

export {
  getPOCData
}
