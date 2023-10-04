import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import StateManagedSelect from 'react-select/dist/declarations/src/stateManager'

interface Props extends React.InputHTMLAttributes<StateManagedSelect> {}

function CountrySelector({ ...props }: Props) {
  const options = useMemo(() => countryList().getData(), [])

  return (
    // @ts-ignore
    <Select options={options} className='outline-none' {...props} />
  )
}

export default CountrySelector