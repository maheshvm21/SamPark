import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Clear'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import TicketModel from './TicketModel'

export default function ServiceTicketTable() {
  const [open, setOpen] = React.useState(false)
  const [feildtypes, setFeildTypes] = React.useState(null)
  const [data, setData] = React.useState({
    id: '',
    firstName: '',
    alarm: '',
    date: '',
  })
  const [inputs, setInputs] = React.useState({
    firstName: '',
    date: '',
    alarm: '',
  })
  //   const handleOpen = () => {
  //     setOpen(true)
  //   }
  const handlefeildtypes = (type, param) => {
    setData(param.row)
    // console.log(data)
    setFeildTypes(type)
    setOpen(true)
  }
  // console.log(inputs, 'dataaaaaaaaaaaaaaaaaaaa')
  const handleClose = () => {
    setInputs({
      firstName: '',
      date: '',
      alarm: '',
    })
    // console.log(inputs, 'dataaaaaaaaaaaaaaaaaaaa')
    setOpen(false)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'firstName', headerName: 'Name', width: 300 },
    { field: 'alarm', headerName: 'Alarm title', width: 450 },
    { field: 'date', headerName: 'Date & Time', width: 400 },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            {' '}
            <div
              onClick={() => {
                handlefeildtypes('view', params)
              }}
              style={{ paddingRight: 5 }}
            >
              <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
            </div>
            <div style={{ paddingRight: 5 }}>
              <EditIcon
                sx={{ fontSize: 20 }}
                onClick={() => {
                  handlefeildtypes('edit', params)
                }}
              />
            </div>
            <div>
              <DeleteIcon
                sx={{ fontSize: 20 }}
                onClick={() => {
                  handlefeildtypes('Delete', params)
                }}
              />
            </div>
          </div>
        )
      },
    },
  ]
  const rows = [
    { id: 1, firstName: 'Jon', date: '19-02-2022', alarm: 'Alarm 1' },
    //generate random data with id,firstName,date and alarm
    {
      id: 2,
      firstName: 'Jon',
      date: '2022-03-09T04:47',
      alarm: 'Alarm title',
    },
    {
      id: 3,
      firstName: 'Jon',
      date: '2022-03-09T04:47',
      alarm: 'Alarm title',
    },
    {
      id: 4,
      firstName: 'Jon',
      date: '2022-03-09T14:47',
      alarm: 'Alarm title',
    },
    {
      id: 5,
      firstName: 'Jon',
      date: '2022-03-09T16:47',
      alarm: 'Alarm title',
    },
    {
      id: 6,
      firstName: 'Jon',
      date: '2022-03-09T04:47',
      alarm: 'Alarm title',
    },
  ]
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

  return (
    <div>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      <div>
        <TicketModel
          open={open}
          handleClose={handleClose}
          data={data}
          feildtypes={feildtypes}
          setInputs={setInputs}
          inputs={inputs}
        />
      </div>
    </div>
  )
}
