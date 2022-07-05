import React from 'react'
import { Switch, FormControlLabel } from '@mui/material'

const SwitchCharacterInput = ({ onChange, checked }) => {
  return (
    <>
      <FormControlLabel
        control={<Switch onChange={onChange} checked={checked} />}
        label="Guiones"
        labelPlacement="start"
      />
    </>
  )
}

export default SwitchCharacterInput