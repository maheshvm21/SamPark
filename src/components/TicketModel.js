import React from 'react'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/base/TextareaAutosize'

const TicketModel = ({
  open,
  handleClose,
  setInputs,
  inputs,
  feildtypes,
  data,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    m: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'SpaceAround',
    // alignItems: 'center',
  }
  //   const [inputs, setInputs] = React.useState({
  //     firstName: '',
  //     date: '',
  //     alarm: '',
  //   })

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <HighlightOffIcon onClick={handleClose}></HighlightOffIcon>
        </div>
        {/* <div style={{ marginTop: '-40px' }}> */}
        {/* <center style={{ margin: '-10px' }}> */}
        <center>
          {' '}
          <h2>
            {feildtypes === 'edit'
              ? 'Update Ticket'
              : feildtypes === 'Delete'
              ? 'Delete Ticket'
              : feildtypes === 'create'
              ? 'Create Ticket'
              : 'View Ticket'}
          </h2>
        </center>
        {/* </div> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            value={feildtypes !== 'create' ? data.firstName : inputs.firstName}
            // value={inputs.firstName}
            variant="outlined"
            disabled={
              feildtypes === 'view' || feildtypes === 'Delete' ? true : false
            }
            onChange={(e) =>
              setInputs({ ...inputs, firstName: e.target.value })
            }
            size="small"
            fullWidth
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="Alarm title"
            value={feildtypes !== 'create' ? data.alarm : inputs.alarm}
            variant="outlined"
            disabled={
              feildtypes === 'view' || feildtypes === 'Delete' ? true : false
            }
            onChange={(e) => setInputs({ ...inputs, alarm: e.target.value })}
            size="small"
            fullWidth
          />
          <br></br>
          <TextField
            id="datetime-local"
            label="Date & Time"
            type="datetime-local"
            value={feildtypes !== 'create' ? data.date : null}
            disabled={
              feildtypes === 'view' || feildtypes === 'Delete' ? true : false
            }
            onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br></br>
          {feildtypes === 'Delete' && (
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
            />
          )}
        </div>
        <br></br>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          {feildtypes !== 'view' && (
            <Button variant="contained" onClick={handleClose}>
              {feildtypes === 'edit'
                ? 'Update'
                : feildtypes === 'create'
                ? 'Create'
                : 'Delete'}
            </Button>
          )}
        </div>
      </Box>
    </Modal>
  )
}

export default TicketModel
