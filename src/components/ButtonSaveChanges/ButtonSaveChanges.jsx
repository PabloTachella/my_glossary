import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Correct from "../Correct/Correct";

const ButtonSaveChanges = ({ statusSaveChanges, handleClick, disabledSaveButton }) => {
  return (
    <>
      {statusSaveChanges === 'idle' ?
        <ButtonPrimary handleClick={handleClick}
          handleDisabled={disabledSaveButton}
          text="GUARDAR CAMBIOS"
        />
        : statusSaveChanges === 'loading' ?
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          : statusSaveChanges === 'succeeded' ?
            <Correct />
            : statusSaveChanges === 'failed' ?
              <span>Ha ocurrido un error</span>
              : null
      }
    </>
  )
}

export default ButtonSaveChanges