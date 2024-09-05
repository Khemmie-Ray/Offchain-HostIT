import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const ButtonLoader = () => {
  return (
    <ColorRing
    visible={true}
    height="30"
    width="30"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#0D0042', '#000000', '#0D0042', '#11EBF2', '#849b87']}
    />
  )
}

export default ButtonLoader